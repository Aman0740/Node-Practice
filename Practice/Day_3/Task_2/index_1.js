const fs = require('fs');
const path = require('path');

const dirpath = path.join(__dirname, 'files');

// Ensure the directory exists
if (!fs.existsSync(dirpath)) {
    fs.mkdirSync(dirpath, { recursive: true });
}

for (let i = 0; i < 5; i++) {
    const filePath = path.join(dirpath, `hello${i}.txt`);
    fs.writeFileSync(filePath, 'This Is A Simple File');
}
