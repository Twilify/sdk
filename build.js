const { build } = require('esbuild');
const { dependencies } = require('./package.json');

const entryFile = 'src/main.ts';
const shared = {
  bundle: true,
  entryPoints: [entryFile],
  // Treat all dependencies in package.json as externals to keep bundle size to a minimum
  external: Object.keys(dependencies),
  logLevel: 'info',
  minify: true,
  sourcemap: true,
};

build({
  ...shared,
  format: 'esm',
  outfile: './lib/index.esm.js',
  target: ['esnext', 'node12.22.0'],
});

build({
  ...shared,
  format: 'cjs',
  outfile: './lib/index.cjs.js',
  target: ['esnext', 'node12.22.0'],
});
