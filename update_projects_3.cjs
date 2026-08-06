const fs = require('fs');

let content = fs.readFileSync('src/app/context/LanguageContext.tsx', 'utf8');

// 1. Add import statement at the top
if (!content.includes('import nsdiImg')) {
  content = content.replace(
    "import { translations } from '../translations/translations';",
    "import { translations } from '../translations/translations';\nimport nsdiImg from '../../assets/Projects/NSDI.jpg';"
  );
}

// 2. Replace 'Platform' with 'Portal' and add the image field to proj1
content = content.replace(
  "company: lang === 'en' ? 'Georgian National Spatial Data Infrastructure Platform' : 'Georgian National Spatial Data Infrastructure პლატფორმა',",
  "company: lang === 'en' ? 'Georgian National Spatial Data Infrastructure Portal' : 'Georgian National Spatial Data Infrastructure პლატფორმა',"
);

// 3. Add `image: nsdiImg` to the first project
content = content.replace(
  "domain: 'nsdi.gov.ge'",
  "domain: 'nsdi.gov.ge',\n          image: nsdiImg"
);

fs.writeFileSync('src/app/context/LanguageContext.tsx', content, 'utf8');
console.log('LanguageContext.tsx updated successfully.');
