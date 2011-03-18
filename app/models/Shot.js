roookies.models.Shot = Ext.regModel("roookies.models.Shot", {
    fields: [
        {name: "id", type: "int"},
        {name: "title", type: "string"},
        {name: "url", type: "string"},
        {name: "image_url", type: "string"},
        {name: "image_teaser_url", type: "string"},
        {name: "views_count", type: "int"},
        {name: "likes_count", type: "int"},
        {name: "comments_count", type: "int"},
        {name: "rebounds_count", type: "int"},
        {name: "created_at", type: "date"},
        {name: "likes_count", type: "int"},
        {name: "player", type: "auto", convert: function (value) {
            return new roookies.models.Player(value);
        }}
    ]
});

roookies.stores.shots = {
    everyone: new Ext.data.Store({
        model: "roookies.models.Shot",
        proxy: roookies.proxyFactory({
            path: '/shots/everyone',
            reader: {
                type: 'json',
                root: 'shots'
            }
        }),
        autoLoad:true
    })
};

