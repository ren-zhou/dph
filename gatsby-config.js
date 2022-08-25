module.exports = {
  plugins: [
    `gatsby-transformer-yaml`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `puzzles`,
        path: `${__dirname}/src/data/puzzles/`,
        ignore: [`**/\.*`], // ignore files starting with a dot
      },
    },
  ],
}
