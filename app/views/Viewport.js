roookies.views.Viewport = Ext.extend(Ext.Panel, {
    fullscreen: true,
    layout: 'card',
    cardSwitchAnimation: 'slide',
    initComponent: function() {

        roookies.views.shotsLists = new roookies.views.ShotsLists();
        roookies.views.shotDetail = new roookies.views.ShotDetail();

        Ext.apply(this, {
            items: [
                roookies.views.shotsLists,
                roookies.views.shotDetail,
            ]
        });

        roookies.views.Viewport.superclass.initComponent.apply(this, arguments);
    }

});
