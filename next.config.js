const withOffline = require("next-offline");
const withSass = require("@zeit/next-sass");

const config = withSass({
    cssModules: true,
    cssLoaderOptions: {
        importLoaders: 1,
        localIdentName: "[local]___[hash:base64:5]"
    }
});

module.exports = withOffline(config);
