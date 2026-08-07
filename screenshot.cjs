const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');

(async () => {
  const publicDir = path.join(__dirname, 'public');
  if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir);
  }

  console.log('Launching browser...');
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  
  // Set viewport to a nice desktop size
  await page.setViewport({ width: 1440, height: 900 });
  
  console.log('Navigating to local dev server...');
  await page.goto('http://localhost:5173', { waitUntil: 'networkidle2' });

  // Wait an extra 2 seconds for all animations to complete
  console.log('Waiting for animations...');
  await new Promise(r => setTimeout(r, 2000));

  const imgPath = path.join(publicDir, 'og-image.jpg');
  console.log(`Saving screenshot to ${imgPath}...`);
  await page.screenshot({ path: imgPath, quality: 80, type: 'jpeg' });

  await browser.close();
  console.log('Done.');
})();
