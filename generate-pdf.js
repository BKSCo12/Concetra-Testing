const fs = require('fs');
const path = require('path');
const puppeteer = require('puppeteer');

const outputFile = path.join(process.cwd(), 'BK_Carrier_Shield_Desk_Reference.pdf');
const htmlFile = path.join(process.cwd(), 'index.html');

console.log('\n========================================');
console.log('BK Carrier Shield Compliance Reference');
console.log('PDF Generator');
console.log('========================================\n');

(async () => {
  try {
    console.log('📖 Reading HTML source file...');
    const html = fs.readFileSync(htmlFile, 'utf8');

    console.log('🚀 Launching Puppeteer browser...');
    const browser = await puppeteer.launch({
      headless: 'new',
      args: [
        '--no-sandbox',
        '--disable-setuid-sandbox',
        '--disable-gpu',
        '--single-process=false'
      ]
    });

    console.log('📄 Creating new page...');
    const page = await browser.newPage({
      width: 1200,
      height: 900,
      deviceScaleFactor: 1
    });

    console.log('⏳ Loading HTML content...');
    await page.setContent(html, {
      waitUntil: 'networkidle0',
      timeout: 30000
    });

    console.log('🖨️  Rendering PDF (landscape, Letter size)...');
    await page.pdf({
      path: outputFile,
      format: 'Letter',
      landscape: true,
      printBackground: true,
      margin: {
        top: '0.2in',
        right: '0.2in',
        bottom: '0.2in',
        left: '0.2in'
      }
    });

    console.log('✅ PDF generated successfully!');
    console.log(`📂 Output: ${outputFile}\n`);

    const stats = fs.statSync(outputFile);
    const sizeKB = (stats.size / 1024).toFixed(2);
    console.log(`📊 File size: ${sizeKB} KB`);
    console.log('========================================\n');

    await browser.close();
    process.exit(0);
  } catch (error) {
    console.error('❌ Error generating PDF:', error.message);
    process.exit(1);
  }
})();
