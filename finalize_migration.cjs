const fs = require('fs');
const path = require('path');

const SOURCE_DIR = 'temp-app';
const DEST_DIR = '.';

if (!fs.existsSync(SOURCE_DIR)) {
    console.error(`Error: Directory '${SOURCE_DIR}' not found. Please run the create-next-app command first.`);
    process.exit(1);
}

// Get all files in the source directory
const files = fs.readdirSync(SOURCE_DIR);

files.forEach(file => {
    const srcPath = path.join(SOURCE_DIR, file);
    const destPath = path.join(DEST_DIR, file);

    console.log(`Moving ${file}...`);
    
    // If destination exists (e.g. .gitignore), we might want to overwrite or merge. 
    // For this fresh init, overwriting is generally fine as we backed up user's old stuff.
    // However, moving a directory (like src) on top of an existing one (if any) might fail or nest.
    // We expect root to be mostly clean except for backups and scripts.
    
    try {
        if (fs.existsSync(destPath)) {
            // Delete existing to allow move (careful!)
            // We only expect 'src' or 'package.json' etc if something went wrong or conflicts.
            // But we know 'src' was backed up.
            const stats = fs.statSync(destPath);
            if (stats.isDirectory()) {
                fs.rmdirSync(destPath, { recursive: true });
            } else {
                fs.unlinkSync(destPath);
            }
        }
        fs.renameSync(srcPath, destPath);
    } catch (err) {
        console.error(`Failed to move ${file}:`, err);
    }
});

// Cleanup temp dir
try {
    fs.rmdirSync(SOURCE_DIR);
    console.log(`Removed ${SOURCE_DIR}`);
} catch (e) {
    console.warn(`Could not remove ${SOURCE_DIR}. Please delete manually.`);
}

console.log('Next.js project files moved to root successfully.');
