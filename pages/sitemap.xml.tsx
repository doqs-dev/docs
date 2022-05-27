import React from "react";
import { ServerResponse } from "http";
import fs from "fs";

const Sitemap = () => {
};

export default Sitemap;

// @ts-ignore
export const getServerSideProps = ({res}) => {

  const baseUrl = 'https://docs.doqs.dev';

  const staticPages = fs
      .readdirSync("pages")
      .filter((staticPage) => {
        return ![
          "_app.tsx",
          "sitemap.xml.tsx",
        ].includes(staticPage);
      })
      .map((page) => {
        return !fs.statSync(`pages/${page}`).isDirectory() ? page : fs.readdirSync(`pages/${page}`,)
            // add parent folder as path prefix
            .map((subPage) => `${page}/${subPage}`);
      })
      .flat()
      .map((staticPagePath) => {
        // concat and strip file ending
        return `${baseUrl}/${staticPagePath}`.replace('.mdx', '')
            // replace index to acutal index page
            .replace('index', '');
      });


  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    ${staticPages
      .map((url) => {
        return `
            <url>
              <loc>${url}</loc>
              <lastmod>${new Date().toISOString()}</lastmod>
              <changefreq>weekly</changefreq>
              <priority>1.0</priority>
            </url>
          `;
      })
      .join("")}
    </urlset>
  `;

  res.setHeader("Content-Type", "text/xml");
  res.write(sitemap);
  res.end();

  return {
    props: {},
  };
};