import { build } from 'vite';
import { config } from 'dotenv';

config();

build({
  configFile: false,
  build: {
    emptyOutDir: true,
    lib: {
      entry: './src/main.ts',
      formats: ['es', 'cjs'],
      name: 'index',
      fileName: 'index',
    },
    outDir: 'lib',
  },
  define: {
    'process.env': process.env,
  },
});
