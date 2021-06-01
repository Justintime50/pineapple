#!/bin/bash

main() {
    echo "Compiling Pineapple assets..."
    compile_readable_css
    compile_minified_css
    compile_readable_js
    compile_minified_js
    echo "Script complete!"
}

compile_readable_css() {
    ./node_modules/.bin/node-sass pineapple/scss/pineapple.scss pineapple/css/pineapple.css --source-map true
    ./node_modules/.bin/node-sass pineapple/scss/pineapple-styles.scss pineapple/css/pineapple-styles.css --source-map true
    ./node_modules/.bin/node-sass pineapple/scss/pineapple-utilities.scss pineapple/css/pineapple-utilities.css --source-map true
}

compile_minified_css() {
    ./node_modules/.bin/node-sass pineapple/scss/pineapple.scss pineapple/css/pineapple.min.css --output-style compressed --source-map true
    ./node_modules/.bin/node-sass pineapple/scss/pineapple-styles.scss pineapple/css/pineapple-styles.min.css --output-style compressed --source-map true
    ./node_modules/.bin/node-sass pineapple/scss/pineapple-utilities.scss pineapple/css/pineapple-utilities.min.css --output-style compressed --source-map true
}

compile_readable_js() {
    echo "TODO"
}

compile_minified_js() {
    echo "TODO"
}

main
