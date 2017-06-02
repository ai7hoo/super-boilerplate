const defaultPreset = require('cssnano-preset-default');

module.exports = defaultPreset({
    discardComments: {
        camelCase: true,
        autoprefixer: {
            add: true
        }
    },
});