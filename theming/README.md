Creating your custom theme
--------------------------

Use the contents of the <code>theming</code> folder for creating your custom theme for the Roookies application.

1.  Ensure you have Compass 0.11.beta.3 (or later) installed:

        > sudo gem install compass -v 0.11.beta.3

        > compass -v
        Compass 0.11.beta.3

2.  Make changes to the roookies.scss file

3.  Run compass to compile the CSS:

        > compass compile roookies.scss

4.  Change or uncomment the style <code>&lt;link&gt;</code> in the app's <code>index.html</code> to link to this new CSS:

        <link href="theming/roookies.css" rel="stylesheet" type="text/css" />

