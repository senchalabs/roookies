roookies.views.ShotDetail = Ext.extend(Ext.Panel, {
    dockedItems: [{
        xtype: 'toolbar',
        title: 'View shot',
        items: [
            {
                text: 'Back',
                ui: 'back',
                listeners: {
                    'tap': function () {
                        Ext.dispatch({
                            controller: roookies.controllers.shots,
                            action: 'index',
                            animation: {type:'slide', direction:'right'}
                        });
                    }
                }
            },
        ]
    }],
    styleHtmlContent:true,
    scroll: 'vertical',
    items: [
        {tpl:'{image_url}'},
        {tpl:'<tpl for="player.data">{name}</tpl>'},
    ],

    updateWithRecord: function(record) {
        Ext.each(this.items.items, function(item) {
            item.update(record.data);
        });
        this.getDockedItems()[0].setTitle(record.get('title'));
    }

});
