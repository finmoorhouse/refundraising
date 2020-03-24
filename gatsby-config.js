module.exports = {
  pathPrefix: `/refundraising/`, // This path is subpath of your hosting https://domain/portfolio
  siteMetadata: {
    title: 'Refundraising',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Refundraising',
        short_name: 'Refundraising',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#ff933c',
        display: 'standalone',
        icon: 'src/assets/img/website-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
  ],
};
