const fs = require('fs')


const readDirectory = (dir) => {
  return fs
    .readdirSync(dir)
    .filter((file) => {
      return ![
        "_app.tsx",
        "sitemap.xml.tsx",
      ].includes(file);
    })
    .map((file) => {
      const potentialDirectory = `${ dir }/${ file }`
      return !fs.statSync(potentialDirectory).isDirectory() ? file : readDirectory(potentialDirectory).map((subPage) => `${ file }/${ subPage }`)
    }).flat();
}

// @ts-ignore
const generateSitemap = () => {

  const baseUrl = 'https://docs.doqs.dev';

  const staticPages = readDirectory('pages',)
    .map((staticPagePath) => {
      // concat and strip file ending
      return `${ baseUrl }/${ staticPagePath }`.replace('.mdx', '')
        // replace index to acutal index page
        .replace('index', '');
    });


  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${ staticPages
    .map((url) => {
      return `
            <url>
              <loc>${ url }</loc>
              <lastmod>${ new Date().toISOString() }</lastmod>
              <changefreq>weekly</changefreq>
              <priority>1.0</priority>
            </url>
          `;
    })
    .join("") }
    </urlset>
  `;

  fs.writeSync(fs.openSync('public/sitemap.xml', 'w'), sitemap);
};

generateSitemap();