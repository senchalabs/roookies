
roookies.views.ShotsInnerList = Ext.extend(Ext.List, {
    itemTpl: "<img src='http://i.tinysrc.mobi/-34/{image_url}' />",
    itemTplPost:
        "<div class='shot-meta'>" +
            "<span class='views'><img src='" + Ext.BLANK_IMAGE_URL + "'>{views_count}</span>" +
            "<span class='likes'><img src='" + Ext.BLANK_IMAGE_URL + "'>{likes_count}</span>" +
            "<span class='comments'><img src='" + Ext.BLANK_IMAGE_URL + "'>{comments_count}</span>" +
            "<span class='rebounds'><img src='" + Ext.BLANK_IMAGE_URL + "'>{rebounds_count}</span>" +
        "</div>",
    multiSelect: true,
    simpleSelect: true,

    metaOpenAnim: new Ext.Anim({
        from: {height:'0'},
        to: {height:'1em'},
        autoClear: false
    }),
    metaCloseAnim: new Ext.Anim({
        to: {height:'0'},
        from: {height:'1em'},
        autoClear: false
    }),

    afterRender: function () {
        this.mon(this.getTargetEl(), 'singletap', this.handleItemDisclosure, this, {delegate: '.x-list-disclosure'});
        roookies.views.ShotsInnerList.superclass.afterRender.call(this);
    },

    listeners: {
        itemtap: function (list, index, element, event) {
            var record = list.getRecord(element);
            var meta = Ext.get(element).next('.shot-meta');
            if (!meta) {
                return;
            }
            if(list.selModel.isSelected(record)) {
                Ext.Anim.run(
                    meta, list.metaCloseAnim
                );
            } else {
                Ext.Anim.run(
                    meta, list.metaOpenAnim
                );
            }
        }

    },

    initComponent: function () {
        roookies.views.ShotsInnerList.superclass.initComponent.call(this);
        var tpl = this.tpl.html;
        tpl = tpl.substr(0, tpl.length-6) + this.itemTplPost + '</tpl>';
        this.tpl = new Ext.XTemplate(tpl, {});
    }

});


roookies.views.ShotsLists = Ext.extend(Ext.TabPanel, {
    layout: 'fit',
    dockedItems: [{
        xtype: 'toolbar',
        title: 'Roookies'
    }],
    tabBar: {
        dock: 'bottom',
        layout: {pack: 'center'}
    },
    cardSwitchAnimation: 'fade',
    items: [
        new roookies.views.ShotsInnerList({
            store: roookies.shotStoreFactory({
                path: '/shots/debuts'
            }),
            iconCls: 'user',
            title:'Debuts'
        }),
        new roookies.views.ShotsInnerList({
            store: roookies.shotStoreFactory({
                path: '/shots/popular'
            }),
            iconCls: 'favorites',
            title:'Popular'
        }),
        new roookies.views.ShotsInnerList({
            store: roookies.shotStoreFactory({
                path: '/shots/everyone'
            }),
            iconCls: 'team',
            title:'Everyone'
        }),
    ]
});