const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer');

const outputFile = path.join(process.cwd(), 'BK_Carrier_Shield_Desk_Reference.pdf');
const htmlFile = path.join(process.cwd(), 'index.html');

(async () => {
  try {
    const html = fs.readFileSync(htmlFile, 'utf8');

    const browser = await puppeteer.launch({
      headless: 'new',
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    const page = await browser.newPage({
      width: 1200,
      height: 900,
      deviceScaleFactor: 1
    });

    await page.setContent(html, { waitUntil: 'networkidle0' });

    await page.pdf({
      path: outputFile,
      format: 'Letter',
      landscape: true,
      printBackground: true,
      margin: { top: '0.2in', right: '0.2in', bottom: '0.2in', left: '0.2in' }
    });

    console.log(`PDF generated successfully: ${outputFile}`);
    await browser.close();
  } catch (error) {
    console.error('Error generating PDF:', error);
    process.exit(1);
  }
})();
