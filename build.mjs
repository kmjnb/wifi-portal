import { mkdir, copyFile, writeFile, rm } from 'node:fs/promises';
const root = new URL('./', import.meta.url);
const destination = new URL('dist/', root);
await rm(destination, { recursive: true, force: true });
await mkdir(destination, { recursive: true });
for (const file of ['index.html', 'styles.css', 'app.js']) await copyFile(new URL(file, root), new URL(file, destination));
await writeFile(new URL('.nojekyll', destination), '');
console.log('GitHub Pages files built in dist/.');
