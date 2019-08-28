require('dotenv').config({
    path: `.env.${process.env.NODE_ENV}`,
})
module.exports = {
    siteMetadata: {
        title: `Backroads`,
        description: `Explore awesome parts of the world & discover which makes ech of them unique. FOrget your daily routine & say yes to adventure!`,
        author: `@johndoe`,
    },
    plugins: [
        `gatsby-plugin-styled-components`,
        `gatsby-plugin-transition-link`,
        `gatsby-transformer-sharp`,
        `gatsby-plugin-sharp`,
        {
            resolve: `gatsby-source-filesystem`,
            options: {
                name: `images`,
                path: `${__dirname}/src/images/`,
            },
        },
        {
            resolve: `gatsby-source-contentful`,
            options: {
                spaceId: process.env.CONTENTFUL_SPACE_ID,
                accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
            },
        },
    ],
}
