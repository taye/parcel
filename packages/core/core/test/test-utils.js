// @flow

import type {ParcelOptions} from '../src/types';
import Cache, {createCacheDir} from '@parcel/cache';
import tempy from 'tempy';
import {inputFS, outputFS} from '@parcel/test-utils';
import {NodePackageManager} from '@parcel/package-manager';
import {createEnvironment} from '../src/Environment';

let cacheDir = tempy.directory();
createCacheDir(outputFS, cacheDir);
export let cache = new Cache(outputFS, cacheDir);

export const DEFAULT_OPTIONS: ParcelOptions = {
  cacheDir: '.parcel-cache',
  entries: [],
  logLevel: 'info',
  rootDir: __dirname,
  targets: undefined,
  projectRoot: '',
  lockFile: undefined,
  autoinstall: false,
  hot: undefined,
  serve: false,
  mode: 'development',
  scopeHoist: false,
  minify: false,
  publicUrl: '/',
  distDir: process.cwd(),
  env: {},
  disableCache: false,
  sourceMaps: false,
  profile: false,
  inputFS,
  outputFS,
  cache,
  patchConsole: false,
  packageManager: new NodePackageManager(inputFS),
};

export const DEFAULT_ENV = createEnvironment({
  context: 'browser',
  engines: {
    browsers: ['> 1%'],
  },
});

export const DEFAULT_TARGETS = [
  {
    name: 'test',
    distDir: 'dist',
    distEntry: 'out.js',
    env: DEFAULT_ENV,
    publicUrl: '/',
  },
];
