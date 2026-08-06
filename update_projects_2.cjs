const fs = require('fs');

let content = fs.readFileSync('src/app/context/LanguageContext.tsx', 'utf8');

const oldFeaturedProjectsStrRegex = /featuredProjects:\s*\[[\s\S]*?skills:\s*\[/m;

const newFeaturedProjectsStr = `featuredProjects: [
        {
          id: 'proj1',
          title: t.jobTitle1,
          date: t.jobDate1,
          company: lang === 'en' ? 'Georgian National Spatial Data Infrastructure Platform' : 'Georgian National Spatial Data Infrastructure პლატფორმა',
          companyLink: "https://nsdi.gov.ge/",
          desc: [t.jobDesc1[0]],
          status: lang === 'en' ? 'In Active Development' : 'აქტიური განვითარების პროცესში',
          domain: 'nsdi.gov.ge'
        },
        {
          id: 'proj2',
          title: t.jobTitle1,
          date: t.jobDate1,
          company: lang === 'en' ? 'National Agency of Public Registry of Georgia Website' : 'National Agency of Public Registry of Georgia ვებგვერდი',
          companyLink: "https://napr.gov.ge/",
          desc: [t.jobDesc1[1]],
          status: lang === 'en' ? 'In Active Development' : 'აქტიური განვითარების პროცესში',
          domain: 'napr.gov.ge'
        },
        {
          id: 'proj3',
          title: t.projectTitle1,
          date: t.projectDate1,
          company: t.projectCompany1,
          companyLink: "https://www.reblaze.com",
          desc: t.projectDesc1,
          status: lang === 'en' ? 'In Development Process' : 'მიმდინარეობს დეველოპმენტი',
          domain: 'reblaze.com',
          isDisabled: true
        },
        {
          id: 'proj4',
          title: t.projectTitle2,
          date: t.projectDate2,
          company: t.projectCompany2,
          companyLink: "https://sabado.co",
          desc: t.projectDesc2,
          status: lang === 'en' ? 'Periodic Updates' : 'პერიოდული განახლებები',
          domain: 'sabado.edu.ge'
        }
      ],
      skills: [`;

if (content.match(oldFeaturedProjectsStrRegex)) {
  content = content.replace(oldFeaturedProjectsStrRegex, newFeaturedProjectsStr);
  fs.writeFileSync('src/app/context/LanguageContext.tsx', content, 'utf8');
  console.log('LanguageContext.tsx updated successfully.');
} else {
  console.log('Regex match failed for LanguageContext.tsx');
}
