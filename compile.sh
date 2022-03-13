#!/bin/bash

# Compiles the Pineapple SCSS to CSS and JS to JS

SASS_BINARY=./node_modules/.bin/sass
UGLIFYJS_BINARY=./node_modules/.bin/uglifyjs

main() {
    echo "Compiling Pineapple assets..."
    compile_readable_css
    compile_minified_css
    compile_readable_js
    compile_minified_js
    echo "Script complete!"
}

compile_readable_css() {
    # Pineapple
    "$SASS_BINARY" pineapple/scss/pineapple.scss pineapple/dist/css/pineapple.css --style expanded
    "$SASS_BINARY" pineapple/scss/pineapple-styles.scss pineapple/dist/css/pineapple-styles.css --style expanded
    "$SASS_BINARY" pineapple/scss/pineapple-utilities.scss pineapple/dist/css/pineapple-utilities.css --style expanded

    # Templates
    "$SASS_BINARY" templates/coming-soon/coming-soon.scss templates/coming-soon/assets/css/coming-soon.css --style expanded
    "$SASS_BINARY" templates/waterfall/waterfall.scss templates/waterfall/assets/css/waterfall.css --style expanded

    # Playground (dev only)
    "$SASS_BINARY" playground/src/playground.scss playground/src/assets/css/playground.css --style expanded
    echo "Readable CSS step complete!"
}

compile_minified_css() {
    # Pineapple
    "$SASS_BINARY" pineapple/scss/pineapple.scss pineapple/dist/css/pineapple.min.css --style compressed
    "$SASS_BINARY" pineapple/scss/pineapple-styles.scss pineapple/dist/css/pineapple-styles.min.css --style compressed
    "$SASS_BINARY" pineapple/scss/pineapple-utilities.scss pineapple/dist/css/pineapple-utilities.min.css --style compressed

    # Templates
    "$SASS_BINARY" templates/coming-soon/coming-soon.scss templates/coming-soon/assets/css/coming-soon.min.css --style compressed
    "$SASS_BINARY" templates/waterfall/waterfall.scss templates/waterfall/assets/css/waterfall.min.css --style compressed
    echo "Compressed CSS step complete!"
}

compile_readable_js() {
    cat pineapple/js/*.js >pineapple/dist/js/pineapple.js
    "$UGLIFYJS_BINARY" pineapple/dist/js/pineapple.js --beautify --no-annotations --source-map --verbose --comments '/https://github.com/justintime50/pineapple/' --output pineapple/dist/js/pineapple.js
    echo "Readable JS step complete!"
}

compile_minified_js() {
    cat pineapple/js/*.js >pineapple/dist/js/pineapple.min.js
    "$UGLIFYJS_BINARY" pineapple/dist/js/pineapple.js --source-map --verbose --comments '/https://github.com/justintime50/pineapple/' --output pineapple/dist/js/pineapple.min.js
    echo "Compressed JS step complete!"
}

main
