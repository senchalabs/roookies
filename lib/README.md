Download the Sencha Touch v1.1 SDK from http://www.sencha.com/products/touch/download/ and place (or symlink) the unzipped directory, renamed to 'touch', into this lib folder.

This should ensure that the <link> and <script> tags in the index.html of the application itself point to the correct locations for the JavaScript and CSS resources:

<script src="lib/touch/sencha-touch.js" type="text/javascript"></script>
<link  href="lib/touch/resources/css/sencha-touch.css" rel="stylesheet" type="text/css" />