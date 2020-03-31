import { Config } from '@stencil/core';

import nodePolyfills from 'rollup-plugin-node-polyfills';
import visualizer from 'rollup-plugin-visualizer';

// https://stenciljs.com/docs/config

export const config: Config = {
  // the defined custom stylesheet loads /src/global/app.css
  // this approach makes it possible to make the CSS adjustable
  // without the need of switching another environment/config flag
  globalStyle: 'src/custom/styles/app.css',
  globalScript: 'src/global/app.ts',
  outputTargets: [
    {
      type: 'www',
      // comment the following line to disable service workers in production
      serviceWorker: null,
      baseUrl: 'https://infection-risk-assessment.netlify.com/',
    },
  ],
  testing: {
    setupFiles: ['jest-localstorage-mock'],
  },
  plugins: [
    nodePolyfills(),
    process.env.npm_lifecycle_event === 'analyze' ? visualizer() : null,
  ],
};
