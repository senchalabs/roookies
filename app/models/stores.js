roookies.shotStoreFactory = function (config) {

    var offline = false;
    if (offline) {
        type = 'ajax';
        url = './_api/' + config.path;
    } else {
        type = 'scripttag';
        url = 'http://api.dribbble.com' + config.path;
    };

    return new Ext.data.Store({
        model: "roookies.models.Shot",
        autoLoad: true,
        proxy: {
            type: type,
            url: url,
            reader: {
                type: 'json',
                root: 'shots'
            }
        }
    });


};
