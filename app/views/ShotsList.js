roookies.views.ShotsInnerList = Ext.extend(Ext.List, {
    itemTpl: [
        "<img src='{image_teaser_url}'/> {title}",
        "<div class='meta'>more stuff</div>"
    ],
    multiSelect: true,
    simpleSelect: true,

    metaOpenAnim: new Ext.Anim({
        from: {height:'0', opacity:0},
        to: {height:'20px', opacity:1},
        autoClear: false
    }),
    metaCloseAnim: new Ext.Anim({
        to: {height:'0', opacity:0},
        from: {height:'20px', opacity:1},
        autoClear: false
    }),

    afterRender: function () {
        this.mon(this.getTargetEl(), 'singletap', this.handleItemDisclosure, this, {delegate: '.x-list-disclosure'});
        Ext.List.superclass.afterRender.call(this);
    },

    listeners: {

        //selectionchange: function(selectionModel, records) {
        //    if (records) {
        //        Ext.dispatch({
        //            controller: roookies.controllers.shots,
        //            action: 'show',
        //            id: records[0].getId(),
        //            store: roookies.stores.shots.everyone
        //       });
        //    }
        //},

        itemtap: function (list, index, element, event) {
            var record = list.getRecord(element);
            var meta = Ext.get(element).down('.meta');
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

    }

});


roookies.views.ShotsList = Ext.extend(Ext.Panel, {
    dockedItems: [{
        xtype: 'toolbar',
        title: 'Shots'
    }],
    items: [new roookies.views.ShotsInnerList({
        store: roookies.stores.shots.everyone
    })]
});