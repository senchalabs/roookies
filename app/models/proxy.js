roookies.proxyFactory = function (config) {
    var offline = false;
    if (offline) {
        config.type = 'ajax';
        config.url = './_api/' + config.path;
    } else {
        config.type = 'scripttag';
        config.url = 'http://api.dribbble.com' + config.path;
    };
    return config;
};
