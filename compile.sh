#!/bin/bash

# Compiles the Pineapple SCSS to CSS

main() {
    echo "Compiling Pineapple assets..."
    compile_readable_css
    compile_minified_css
    compile_readable_js
    # compile_minified_js
    echo "Script complete!"
}

compile_readable_css() {
    # Pineapple
    ./node_modules/.bin/node-sass pineapple/scss/pineapple.scss pineapple/dist/css/pineapple.css --output-style expanded --source-map true
    ./node_modules/.bin/node-sass pineapple/scss/pineapple-styles.scss pineapple/dist/css/pineapple-styles.css --output-style expanded --source-map true
    ./node_modules/.bin/node-sass pineapple/scss/pineapple-utilities.scss pineapple/dist/css/pineapple-utilities.css --output-style expanded --source-map true

    # Templates
    ./node_modules/.bin/node-sass templates/coming-soon/coming-soon.scss templates/coming-soon/assets/css/coming-soon.css --output-style expanded --source-map true
    ./node_modules/.bin/node-sass templates/waterfall/waterfall.scss templates/waterfall/assets/css/waterfall.css --output-style expanded --source-map true
}

compile_minified_css() {
    # Pineapple
    ./node_modules/.bin/node-sass pineapple/scss/pineapple.scss pineapple/dist/css/pineapple.min.css --output-style compressed --source-map true
    ./node_modules/.bin/node-sass pineapple/scss/pineapple-styles.scss pineapple/dist/css/pineapple-styles.min.css --output-style compressed --source-map true
    ./node_modules/.bin/node-sass pineapple/scss/pineapple-utilities.scss pineapple/dist/css/pineapple-utilities.min.css --output-style compressed --source-map true

    # Templates
    ./node_modules/.bin/node-sass templates/coming-soon/coming-soon.scss templates/coming-soon/assets/css/coming-soon.min.css --output-style compressed --source-map true
    ./node_modules/.bin/node-sass templates/waterfall/waterfall.scss templates/waterfall/assets/css/waterfall.min.css --output-style compressed --source-map true
}

compile_readable_js() {
    # TODO: Actually compile JS here instead of simply copying it
    cp pineapple/js/pineapple.js pineapple/dist/js/pineapple.js
}

compile_minified_js() {
    echo "TODO"
}

main
