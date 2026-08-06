const fs = require('fs');

let content = fs.readFileSync('src/app/context/LanguageContext.tsx', 'utf8');

// Update imports
content = content.replace(
  "import nsdiImg from '../../assets/Projects/NSDI.jpg';",
  `import nsdiImg from '../../assets/Projects/NSDI.webp';
import naprImg from '../../assets/Projects/NAPR.webp';
import reblazeImg from '../../assets/Projects/Reblaze.webp';
import sabadoImg from '../../assets/Projects/Sabado.webp';`
);

// Update proj2
content = content.replace(
  "domain: 'napr.gov.ge'\n        },",
  "domain: 'napr.gov.ge',\n          image: naprImg\n        },"
);
content = content.replace(
  "domain: 'napr.gov.ge'\r\n        },",
  "domain: 'napr.gov.ge',\r\n          image: naprImg\r\n        },"
);

// Update proj3
content = content.replace(
  "isDisabled: true\n        },",
  "isDisabled: true,\n          image: reblazeImg\n        },"
);
content = content.replace(
  "isDisabled: true\r\n        },",
  "isDisabled: true,\r\n          image: reblazeImg\r\n        },"
);

// Update proj4
content = content.replace(
  "companyLink: \"https://sabado.co\",",
  "companyLink: \"https://sabado.edu.ge\","
);
content = content.replace(
  "domain: 'sabado.edu.ge'\n        }",
  "domain: 'sabado.edu.ge',\n          image: sabadoImg\n        }"
);
content = content.replace(
  "domain: 'sabado.edu.ge'\r\n        }",
  "domain: 'sabado.edu.ge',\r\n          image: sabadoImg\r\n        }"
);

fs.writeFileSync('src/app/context/LanguageContext.tsx', content, 'utf8');
console.log('LanguageContext.tsx updated successfully.');
