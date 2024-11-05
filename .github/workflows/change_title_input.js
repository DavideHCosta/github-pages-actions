const fs = require('fs');
const { JSDOM } = require('jsdom');
 
// Get the new title from the command line arguments
const newTitle = process.argv[2] || 'Default Title';
 
// Read index.html
const htmlContent = fs.readFileSync('index.html', 'utf-8');
const dom = new JSDOM(htmlContent);
 
// Change the <title> tag
const titleTag = dom.window.document.querySelector('title');
if (titleTag) {
  titleTag.textContent = newTitle;
} else {
  const newTitleTag = dom.window.document.createElement('title');
  newTitleTag.textContent = newTitle;
  dom.window.document.head.appendChild(newTitleTag);
}
 
// Write the modified content back to index.html
fs.writeFileSync('index.html', dom.serialize());
console.log(`Updated <title> to "${newTitle}"`);