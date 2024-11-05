const fs = require('fs');
const { JSDOM } = require('jsdom');
 
// Read the index.html file
const htmlContent = fs.readFileSync('docs/index.html', 'utf-8');
const dom = new JSDOM(htmlContent);
 
// Check for the presence of a <title> tag
const titleTag = dom.window.document.querySelector('title');
 
if (!titleTag) {
  console.error('Error: <title> tag is missing from index.html!');
  process.exit(1);  // Exit with error code to fail the workflow
} else {
  console.log('<title> tag found: ' + titleTag.textContent);
}