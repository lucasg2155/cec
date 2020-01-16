module.exports = {
  plugins: [`gatsby-plugin-netlify-cms`],
  plugins: [
    `gatsby-plugin-netlify-cms`,
   
    `gatsby-transformer-remark`,
  ],

  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `markdown-pages`,
        path: `${__dirname}/blog`,
      },
    },
    `gatsby-transformer-remark`,
  ]
}


