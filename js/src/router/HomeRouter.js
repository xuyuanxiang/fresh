define(["backbone", "../view/HomeView", "../view/advertisement/AdvertisementView", "../view/notice/NoticeView"], function(Backbone, HomeView, AdvertisementView, NoticeView) {
	var HomeRouter = Backbone.Router.extend({
		routes : {
			"" : "defaultCtrl",
			"home" : "defaultCtrl"
		},
		defaultCtrl : function() {
			var homeView = new HomeView({
				el : $('.container-fluid')
			});
			homeView.render();
			var advertisementView = new AdvertisementView({
				el : $('.carousel')
			});
			advertisementView.render();
			var noticeView = new NoticeView({
				el : $('.notice')
			});
			noticeView.render();
		}
	});
	return HomeRouter;
});
