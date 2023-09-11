import { build } from 'vite';
import { config } from 'dotenv';
import { exec } from 'child_process';

config();

build({
  configFile: false,
  build: {
    emptyOutDir: true,
    lib: {
      entry: './src/index.ts',
      formats: ['es', 'cjs'],
      name: 'index',
      fileName: 'index',
    },
    outDir: 'lib',
    watch: process.argv.includes('--watch'),
  },
  define: {
    'process.env': process.env,
  },
  plugins: [
    {
      name: 'postbuild-commands',
      closeBundle: () => {
        exec('tsc');
      },
    },
  ],
});
