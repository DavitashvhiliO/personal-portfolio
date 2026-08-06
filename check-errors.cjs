const puppeteer = require('puppeteer');
const { spawn } = require('child_process');

(async () => {
  // Start the preview server
  const previewProcess = spawn('npx.cmd', ['vite', 'preview', '--port', '4173'], { stdio: 'inherit' });

  // Wait 3 seconds for server to start
  await new Promise(resolve => setTimeout(resolve, 3000));

  console.log('Launching Puppeteer...');
  const browser = await puppeteer.launch({ headless: "new" });
  const page = await browser.newPage();

  // Capture console messages
  page.on('console', msg => {
    if (msg.type() === 'error') {
      console.log('BROWSER ERROR:', msg.text());
    } else {
      console.log('BROWSER LOG:', msg.text());
    }
  });

  page.on('pageerror', err => {
    console.log('PAGE ERROR:', err.message);
  });

  console.log('Navigating to http://localhost:4173 ...');
  try {
    await page.goto('http://localhost:4173', { waitUntil: 'networkidle0', timeout: 10000 });
  } catch (err) {
    console.log('Navigation error:', err.message);
  }

  // Dump HTML to see if it's blank
  const bodyHTML = await page.evaluate(() => document.body.innerHTML);
  console.log('BODY HTML LENGTH:', bodyHTML.length);
  if (bodyHTML.length < 500) {
    console.log('BODY CONTENT:', bodyHTML);
  }

  await browser.close();
  previewProcess.kill();
  process.exit(0);
})();
