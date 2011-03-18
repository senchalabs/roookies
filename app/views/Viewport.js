roookies.views.Viewport = Ext.extend(Ext.Panel, {
    fullscreen: true,
    layout: 'card',
    cardSwitchAnimation: 'slide',
    initComponent: function() {

        roookies.views.shotsList = new roookies.views.ShotsList();
        roookies.views.shotDetail = new roookies.views.ShotDetail();

        Ext.apply(this, {
            items: [
                roookies.views.shotsList,
                roookies.views.shotDetail,
            ]
        });

        roookies.views.Viewport.superclass.initComponent.apply(this, arguments);
    }

});
