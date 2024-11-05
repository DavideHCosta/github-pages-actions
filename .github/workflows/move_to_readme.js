const fs = require('fs');
const { JSDOM } = require('jsdom');

// Load index.html
const htmlContent = fs.readFileSync('docs/index.html', 'utf-8');
const dom = new JSDOM(htmlContent);

// Extract <title> and first <p> as description
const title = dom.window.document.querySelector('title')?.textContent || 'My Project';
const description = dom.window.document.querySelector('p')?.textContent || 'Description not available.';

// Generate README content
const readmeContent = `# \${title}\n\n\${description}\n\nThis README was generated automatically from index.html.`;

// Write to README.md
const output = fs.writeFileSync('README.md', readmeContent);
console.log(output);