import { Config } from '@stencil/core';
import dotenv from 'dotenv';
import nodePolyfills from 'rollup-plugin-node-polyfills';
import visualizer from 'rollup-plugin-visualizer';

dotenv.config();

// https://stenciljs.com/docs/config

export const config: Config = {
  // the defined custom stylesheet loads /src/global/app.css
  // this approach makes it possible to make the CSS adjustable
  // without the need of switching another environment/config flag
  globalStyle: 'src/global/app.css',
  globalScript: 'src/global/app.ts',
  outputTargets: [
    {
      type: 'www',
      // comment the following line to disable service workers in production
      serviceWorker: null,
      baseUrl: process.env.BASE_URL || 'https://covapp.charite.de',
    },
  ],
  testing: {
    setupFiles: ['jest-localstorage-mock'],
    testPathIgnorePatterns: ['cypress'],
  },
  plugins: [
    nodePolyfills(),
    process.env.npm_lifecycle_event === 'analyze' ? visualizer() : null,
  ],
};
