const fs = require('fs');

const appPath = 'src/app/App.tsx';
let appStr = fs.readFileSync(appPath, 'utf8');

// Remove m and Counter from App.tsx
appStr = appStr.replace(/export const m = [\s\S]*?};/, '');
appStr = appStr.replace(/export function Counter\([\s\S]*?return <span[^>]*>[^<]*<\/span>;\n}/, '');

fs.writeFileSync(appPath, appStr);

function replaceImports(filePath) {
  if (!fs.existsSync(filePath)) return;
  let str = fs.readFileSync(filePath, 'utf8');
  str = str.replace(/import \{ m \} from "\.\.\/App";/, 'import { m } from "../utils";');
  str = str.replace(/import \{ Counter \} from "\.\.\/App";/, 'import { Counter } from "../utils";');
  str = str.replace(/import \{ m, Counter \} from "\.\.\/App";/, 'import { m, Counter } from "../utils";');
  fs.writeFileSync(filePath, str);
}

replaceImports('src/app/components/Hero.tsx');
replaceImports('src/app/components/ProjectsSection.tsx');
replaceImports('src/app/components/ExpertiseSection.tsx');
replaceImports('src/app/components/FooterSection.tsx');

console.log('Fixed circular dependencies.');
