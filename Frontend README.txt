Welcome!

This is a webpack/browsersync frontend architecture for CMS based projects.

Once you download this repo in IDE install NPM packages with a command "npm install".
After initial installization you can run either "npm run develop" or "npm run build".

Develop environment will open up your default browser on a localhost:3000.
You can connect to that server via your IP adress, follow the commands by browser sync to achieve that (remember to you need to deactivate your firewall)

CSS / Sass:

    * All changes done in Sass files are live-updated and triggered on saving the file, 
    * Please follow the BMI rules while updating CSS (Block__element-modifier--modifier),
    * Refrain from using pixels as value, please use REM. Default value of REM is set to: 1rem = 10px,
    * All scss files in main.scss are prefixed and squished to output 1 style.css file. To change the name/location where that file is outputted go to webpack.prod.js and do changes there,
    * Add vendor css styles to vendor folder and import them in index.js to merge them with transpiled scss files (add vendor css before sass),
    * CSS grids are supported by autoprefixer, however they need to be explicit towards their grid row and column. Use IE mixin to include for IE.
JS:

    * Add vendor js to vendor folder,
    * Create axios models in model folder,
    * Please partial up your features to seperate js files is js folder,
    * You can use ES6 + in your project, all javascript is transpiled or polyfiled,
    * Comment on elaborate functions,
    * Only one JS file is outputted to app.bundle.js. To change name/location where file is outputted go to webpack.common.js and do changes there,
    

Markup:

    * Go to src/assets/partials and fetch particular partial you need and simply change the content,
    * For reference you can use the whole markup layout outputed in dist,
    * Pay close attention to comments on markup in src partials.


To build frontend run "npm run build". This will bundle js, sass -> css, fetch all used assets and create a dist folder. In there you can find in separate folders used assets.
Do not copy assets from src, only from dist once its build.

In order to change where build files are placed, go to webpack.dev/prod/common.js and change path/name in there.