define(["backbone", "text!../../../pages/home.html", "css!../../../css/home.css"], function(Backbone, homeHtml) {
	var HomeView = Backbone.View.extend({
		render : function() {
			$(this.el).hide().html(homeHtml).fadeIn(200);
		}
	});
	return HomeView;
});
