import { resolve } from 'path';

export default {
    root: './src/frontend',
    server: {
        open:"user/user.html" // 
    },
    build: {
        outDir: resolve(__dirname, '../../dist/user'),
        emptyOutDir: true
    }
};

