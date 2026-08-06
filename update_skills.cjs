const fs = require('fs');

let content = fs.readFileSync('src/app/translations/translations.ts', 'utf8');

// Replace English texts
content = content.replace(
  "skillsCategory1Text: 'Product Design, UI Design, Interaction Design, Design Systems, Prototyping, Wireframing, Graphic Design'",
  "skillsCategory1Text: 'Product Design, UI Design, Interaction Design, UX Laws, Design Systems, Prototyping, Wireframing, Graphic Design'"
);

content = content.replace(
  "skillsCategory2Text: 'User Research, Usability Testing, Information Architecture'",
  "skillsCategory2Text: 'User Research, Usability Testing, Nielsen\\'s Heuristics, Information Architecture'"
);

// Replace Georgian texts
content = content.replace(
  "skillsCategory1Text: 'პროდუქტის დიზაინი, UI დიზაინი, ინტერაქციის დიზაინი, დიზაინ-სისტემები, პროტოტიპირება, Wireframing, გრაფიკული დიზაინი'",
  "skillsCategory1Text: 'პროდუქტის დიზაინი, UI დიზაინი, ინტერაქციის დიზაინი, UX Laws, დიზაინ-სისტემები, პროტოტიპირება, Wireframing, გრაფიკული დიზაინი'"
);

content = content.replace(
  "skillsCategory2Text: 'მომხმარებლის კვლევა, გამოყენებადობის ტესტირება, ინფორმაციის არქიტექტურა'",
  "skillsCategory2Text: 'მომხმარებლის კვლევა, გამოყენებადობის ტესტირება, Nielsen\\'s Heuristics, ინფორმაციის არქიტექტურა'"
);

fs.writeFileSync('src/app/translations/translations.ts', content, 'utf8');
console.log('Skills categories updated successfully.');
