// Copies the game into www/ for the mobile app, using a local copy of Three.js
// instead of the CDN so the app works without an internet connection.
import { mkdirSync, readFileSync, writeFileSync, copyFileSync } from 'node:fs';

const CDN = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.min.js';
const html = readFileSync('index.html', 'utf8');
if (!html.includes(CDN)) throw new Error('Three.js CDN script tag not found in index.html');

mkdirSync('www', { recursive: true });
writeFileSync('www/index.html', html.replace(CDN, 'three.min.js'));
copyFileSync('node_modules/three/build/three.min.js', 'www/three.min.js');
console.log('Built www/ (index.html + three.min.js)');
