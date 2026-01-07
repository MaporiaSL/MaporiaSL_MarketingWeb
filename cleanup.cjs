const fs = require('fs');
const path = require('path');

const BACKUP_DIR = 'backup_vite';
// List of files/folders to move. We use a glob-like approach or explicit list.
const ITEMS_TO_MOVE = [
    'src', 
    'public', 
    'dist', 
    'index.html', 
    'vite.config.js', 
    'package.json', 
    'package-lock.json', 
    'eslint.config.js', 
    'netlify.toml', 
    'Features.pdf'
];

if (!fs.existsSync(BACKUP_DIR)) {
    console.log(`Creating ${BACKUP_DIR}...`);
    fs.mkdirSync(BACKUP_DIR);
}

// Special handling for node_modules: attempt rename, else ignore/warn
if (fs.existsSync('node_modules')) {
    console.log('Moving node_modules (this might take a moment)...');
    try {
        fs.renameSync('node_modules', path.join(BACKUP_DIR, 'node_modules'));
    } catch (e) {
        console.warn('Could not move node_modules. You may need to delete it manually if it persists.');
    }
}

ITEMS_TO_MOVE.forEach(item => {
    if (fs.existsSync(item)) {
        console.log(`Moving ${item}...`);
        try {
            fs.renameSync(item, path.join(BACKUP_DIR, item));
        } catch (e) {
            console.error(`Failed to move ${item}: ${e.message}`);
        }
    }
});

console.log('Cleanup complete. Ready for Next.js init.');
