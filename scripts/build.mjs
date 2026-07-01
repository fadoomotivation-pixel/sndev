import { cp, mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';

await rm('dist', { recursive: true, force: true });
await mkdir('dist', { recursive: true });
await mkdir('dist/src', { recursive: true });
await writeFile('dist/index.html', (await readFile('index.html', 'utf8')).replace('/src/main.js', './src/main.js'));
await cp('src', 'dist/src', { recursive: true });
if (existsSync('public')) await cp('public', 'dist', { recursive: true });
console.log('Built static site to dist/');
