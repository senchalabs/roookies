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


//some template helpers
roookies.views.imgTpl = function () {return "<img class='shot-image' src='http://i.tinysrc.mobi/286/{image_url}' />";};
roookies.views.metaTpl = function (startCollapsed) {
    return "<div class='shot-meta' style='overflow:hidden" +
        (startCollapsed ? ";max-height:0" : "") +
        "'>" +
        "<span class='views'><img src='" + Ext.BLANK_IMAGE_URL + "'>{views_count}</span><span class='noun'> views, </span>" +
        "<span class='likes'><img src='" + Ext.BLANK_IMAGE_URL + "'>{likes_count}</span><span class='noun'> likes, </span>" +
        "<span class='rebounds'><img src='" + Ext.BLANK_IMAGE_URL + "'>{rebounds_count}</span><span class='noun'> rebounds, </span>" +
        "<span class='comments'><img src='" + Ext.BLANK_IMAGE_URL + "'>{comments_count}</span><span class='noun'> comments</span>" +
    "</div>";
};