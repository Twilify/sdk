import { build } from 'vite';
import { config } from 'dotenv';
import { exec } from 'child_process';

config({
  path: process.env.NODE_ENV === 'development' ? '.env.development' : undefined,
});

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
    rollupOptions: {
      external: ['ofetch', '@microsoft/fetch-event-source'],
    },
  },
  define: {
    'process.env': {
      NODE_ENV: process.env.NODE_ENV,
      API_URL: process.env.API_URL,
      CDN_URL: process.env.CDN_URL,
    },
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
