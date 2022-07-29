import {
  Component,
  Event,
  EventEmitter,
  h,
  Prop,
  State,
} from '@stencil/core';
import * as tf from '@tensorflow/tfjs';
import i18next from '../../global/utils/i18n';

const SUPPORTS_MEDIA_DEVICES = 'mediaDevices' in navigator;

@Component({
  tag: 'ai-image-recognizer',
  styleUrl: 'ai-image-recognizer.css',
  shadow: true,
})
export class AiImageRecognizer {
  @Prop() inputId: string;
  @Event() updateFormData: EventEmitter;
  updateFormDataHandler(key: string, value: number) {
    this.updateFormData.emit({ key, value });
  }

  @State() tookPicture = false;

  _player;
  _canvas;
  _model;
  _videoStream;


  componentWillLoad() {
    tf.loadLayersModel('assets/ai/model.json').then(model => {
      this._model = model;
      console.log('model loaded');
    });
  }

  async componentDidLoad() {
    this._videoStream = await tf.data.webcam(this._player, {
      resizeWidth: 180,
      resizeHeight: 180,
      facingMode: 'environment',
    });
    // const track = this._videoStream.webcamVideoElement.srcObject.getVideoTracks()[0]
    // console.log(track.getCapabilities().torch)
    // track.applyConstraints({advanced: [{torch:true}]})
  }

  disconnectedCallback(){
    this._videoStream.stop();
    this._model.dispose();
  }

  takePicture = async () => {
    // Capture an image from the webcam using the Tensorflow.js data API
    //and store it as a tensor (resize to 224 x 224 size for mobilenet delivery).

    const img = await this._videoStream.capture();
    

    const offset = tf.scalar(255.0);
    const normalized = img.div(offset);
    await tf.browser.toPixels(normalized, this._canvas)
    this.tookPicture = true;

    const batch = tf.expandDims(normalized, 0)
    var score = tf.softmax(tf.tensor(this._model.predict(batch).arraySync()[0]));
    var confidence = tf.max(score).dataSync()[0];
    var labels = ['daisy', 'dandelion', 'roses', 'sunflowers', 'tulips'];
    console.log(labels[tf.argMax(score).dataSync()[0]] + ' with ' + confidence)

    img.dispose();
    this.updateFormDataHandler(this.inputId, confidence)
  }
  removePicture = async () => {
    this.tookPicture = false;
    this.updateFormDataHandler(this.inputId, undefined)
  }


  render() {
    return [
        (!SUPPORTS_MEDIA_DEVICES && i18next.t('no_camera_support')),
        <canvas ref={el => (this._canvas = el)} width="640" height="640" style={{display: this.tookPicture ? "block" : "none"}}></canvas>,
        <video ref={el => (this._player = el)} width="640" height="640" autoplay playsinline muted style={{display: this.tookPicture ? "none" : "block"}}></video>,
        (this.tookPicture ?
          <d4l-button
          type="button"
          classes="button--block answers-table__button"
          data-test="removePictureButton"
          text={i18next.t('ai_remove_picture')}
          handleClick={this.removePicture}
          /> : 
          <d4l-button
            type="button"
            classes="button--block answers-table__button"
            data-test="takePictureButton"
            text={i18next.t('ai_take_picture')}
            handleClick={this.takePicture}
          />)
        ];
  }

}