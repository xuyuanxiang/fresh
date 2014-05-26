define(["backbone", "../../collection/ChannelCollection", "text!../../../../pages/channel.html", "css!../../../../css/slick.css", "slick"], function(Backbone, ChannelCollection, channelHtml) {
	var HomeView = Backbone.View.extend({
		render : function() {
			var template = _.template(channelHtml, {
				channels : [{
					title : "主页",
					inactiveIconPath : "images/icon_home_inactive.png",
					activeIconPath : "images/icon_home_active.png",
					path : "#home",
					active : true
				}, {
					title : "当鲜",
					inactiveIconPath : "images/icon_fresh_inactive.png",
					activeIconPath : "images/icon_fresh_active.png",
					path : "#fresh",
					active : false
				}]
			});
			$(this.el).hide().html(template).fadeIn(200);
			$(this.el).slick({
				slidesToShow : 4,
				slidesToScroll : 1
			});
		}
	});
	return HomeView;
});
