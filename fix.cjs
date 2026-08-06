const fs = require('fs');
let content = fs.readFileSync('src/app/App.tsx', 'utf8');

content = content.replace(/\{language === "en" \? "About" : ".*?"\}/g, '{language === "en" ? "About" : "შესახებ"}');
content = content.replace(/\{language === "en" \? "Selected Works" : ".*?"\}/g, '{language === "en" ? "Selected Works" : "ნამუშევრები"}');
content = content.replace(/\{language === "en" \? "Career Roadmap" : ".*?"\}/g, '{language === "en" ? "Career Roadmap" : "კარიერული გზა"}');
content = content.replace(/\{language === "en" \? "Skills & Tools" : ".*?"\}/g, '{language === "en" ? "Skills & Tools" : "უნარები და ინსტრუმენტები"}');
content = content.replace(/\{language === "en" \? "Education & Languages" : ".*?"\}/g, '{language === "en" ? "Education & Languages" : "განათლება და ენები"}');
content = content.replace(/\{language === "en" \? "What I Do" : ".*?"\}/g, '{language === "en" ? "What I Do" : "რას ვაკეთებ"}');
content = content.replace(/\{language === "en" \? "Performance Metrics" : ".*?"\}/g, '{language === "en" ? "Performance Metrics" : "შესრულების მეტრიკა"}');
content = content.replace(/\{language === "en" \? "Applause Corner" : ".*?"\}/g, '{language === "en" ? "Applause Corner" : "შეფასებები"}');
content = content.replace(/\{language === "en" \? "Contact" : ".*?"\}/g, '{language === "en" ? "Contact" : "კონტაქტი"}');
content = content.replace(/\{language === "en" \? "Product Designer" : ".*?"\}/g, '{language === "en" ? "Product Designer" : "პროდუქტის დიზაინერი"}');
content = content.replace(/\{language === "en" \? "Download Resume" : ".*?"\}/g, '{language === "en" ? "Download Resume" : "რეზიუმეს გადმოწერა"}');
content = content.replace(/\{language === "en" \? "Scroll to Explore" : ".*?"\}/g, '{language === "en" ? "Scroll to Explore" : "ჩამოსქროლე"}');
content = content.replace(/\{language === "en" \? "Read Case Study" : ".*?"\}/g, '{language === "en" ? "Read Case Study" : "პროექტის ნახვა"}');
content = content.replace(/\{language === "en" \? "Live Site ↗" : ".*?"\}/g, '{language === "en" ? "Live Site ↗" : "ვებ-გვერდი ↗"}');
content = content.replace(/\{language === "en" \? "Tools" : ".*?"\}/g, '{language === "en" ? "Tools" : "ინსტრუმენტები"}');
content = content.replace(/\{language === "en" \? "Education" : ".*?"\}/g, '{language === "en" ? "Education" : "განათლება"}');
content = content.replace(/\{language === "en" \? "Academic Step" : ".*?"\}/g, '{language === "en" ? "Academic Step" : "აკადემიური საფეხური"}');
content = content.replace(/\{language === "en" \? "Languages" : ".*?"\}/g, '{language === "en" ? "Languages" : "ენები"}');
content = content.replace(/\{language === "en" \? "Focus Areas" : ".*?"\}/g, '{language === "en" ? "Focus Areas" : "მიმართულებები"}');
content = content.replace(/\{language === "en" \? "Professional Experience" : ".*?"\}/g, '{language === "en" ? "Professional Experience" : "წლიანი პროფესიონალური გამოცდილება"}');
content = content.replace(/\{language === "en" \? "\\(Design & Strategy\\)" : ".*?"\}/g, '{language === "en" ? "(Design & Strategy)" : "(დიზაინი & სტრატეგია)"}');
content = content.replace(/\{language === "en" \? "Successful Projects" : ".*?"\}/g, '{language === "en" ? "Successful Projects" : "წარმატებული პროექტი"}');
content = content.replace(/\{language === "en" \? "\\(Delivered and launched\\)" : ".*?"\}/g, '{language === "en" ? "(Delivered and launched)" : "(დასრულებული & გაშვებული)"}');
content = content.replace(/\{language === "en" \? "Client Reviews" : ".*?"\}/g, '{language === "en" ? "Client Reviews" : "შეფასებები"}');
content = content.replace(/\{language === "en" \? "Inquiries & Contact" : ".*?"\}/g, '{language === "en" ? "Inquiries & Contact" : "კონტაქტი & კითხვები"}');
content = content.replace(/\{language === "en" \? "Start a project\\." : ".*?"\}/g, '{language === "en" ? "Start a project." : "დაიწყე პროექტი."}');
content = content.replace(/\{language === "en" \? "Availability" : ".*?"\}/g, '{language === "en" ? "Availability" : "ხელმისაწვდომი სტატუსი"}');
content = content.replace(/\{language === "en" \? "Write an Email ↗" : ".*?"\}/g, '{language === "en" ? "Write an Email ↗" : "მოგვწერეთ ელ-ფოსტაზე ↗"}');
content = content.replace(/\{copiedEmail \? \(language === "en" \? "Copied" : ".*?"\) : \(language === "en" \? "Copy Email Address" : ".*?"\)\}/g, '{copiedEmail ? (language === "en" ? "Copied" : "დაკოპირებულია") : (language === "en" ? "Copy Email Address" : "დააკოპირე")}');
content = content.replace(/\{language === "en" \? "Direct Email" : ".*?"\}/g, '{language === "en" ? "Direct Email" : "ელ-ფოსტა"}');
content = content.replace(/\{language === "en" \? "Location" : ".*?"\}/g, '{language === "en" ? "Location" : "ლოკაცია"}');
content = content.replace(/\{language === "en" \? "Tbilisi, Georgia" : ".*?"\}/g, '{language === "en" ? "Tbilisi, Georgia" : "თბილისი, საქართველო"}');

content = content.replace(/\{m\((.*?)\)\}/g, '{$1}');
content = content.replace(/uppercase tracking-wider/g, '');
content = content.replace(/uppercase/g, ''); // User wants no typography, I'll remove uppercase class entirely
content = content.replace(/:\s*\["\?\?\?\?\?\?\?\?\? \?\?\?\?\?\?\?", "\?\?\/\?\? \?\?\?\?\?\?\?\?\?", "\?\?\?\?\?\? \?\?\?\?\?\?\?\?\?", "\?\?\?\?\?\?\?\?\?\?\? \?\?\?\?\?\?\?", "\?\?\?\?\?\?\?\?\?\?\?\? \?\?\?\?\?\?", "\?\?\?\?\?\?\?\?\?\?\?\?\?\?\? \?\?\?\?\?"\]/g, ': ["პროდუქტის დიზაინი", "UI/UX სტრატეგია", "დიზაინ სისტემები", "ინტერაქციის დიზაინი", "მომხმარებლის კვლევა", "გამოყენებადობის ტესტი"]');

fs.writeFileSync('src/app/App.tsx', content, 'utf8');
console.log('Restored!');
