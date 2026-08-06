const fs = require('fs');
let content = fs.readFileSync('src/app/App.tsx', 'utf8');

// Remove all typography-related tailwind classes
content = content.replace(/font-display/g, '');
content = content.replace(/font-mono/g, '');
content = content.replace(/font-sans/g, '');

fs.writeFileSync('src/app/App.tsx', content, 'utf8');
console.log('Typography classes removed!');
