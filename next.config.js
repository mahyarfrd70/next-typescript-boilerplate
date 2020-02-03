const { PHASE_DEVELOPMENT_SERVER, PHASE_PRODUCTION_BUILD } = require("next/constants");

const getBuildConfig = (...args) => {
    const withPugins = require("next-compose-plugins");
    const withOffline = require("next-offline");
    const withSCSS = require("@zeit/next-sass");
    const postcssPresetEnv = require("postcss-preset-env");
    const postcssPresetEnvOptions = {
        features: {
            "custom-media-queries": true,
            "custom-selectors": true
        }
    };
    const cssOptions = {
        postcssLoaderOptions: {
            plugins: [postcssPresetEnv(postcssPresetEnvOptions)]
        }
    };

    const nextConfig = {
        webpack(config) {
            config.module.rules.push({
                test: /\.svg$/,
                include: /src\/components\/icon\/icons/,
                use: [
                    "svg-sprite-loader",
                    {
                        loader: "svgo-loader",
                        options: {
                            plugins: [
                                { removeAttrs: { attrs: "(fill)" } },
                                { removeTitle: true },
                                { cleanupIDs: true },
                                { removeStyleElement: true }
                            ]
                        }
                    }
                ]
            });
            return config;
        }
    };
    return withPugins([[withOffline], [withSCSS, cssOptions]], nextConfig)(...args);
};

module.exports = (phase, ...rest) => {
    const shouldAddBuildConfig = phase === PHASE_DEVELOPMENT_SERVER || phase === PHASE_PRODUCTION_BUILD;
    return shouldAddBuildConfig ? getBuildConfig(phase, ...rest) : {};
};
