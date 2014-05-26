define(["backbone", "../view/article/ArticleDetailsView", "../model/ArticleModel", "../collection/ArticleCollection"], function(Backbone, ArticleDetailsView, ArticleModel, ArticleCollection) {
	var ArticleRouter = Backbone.Router.extend({
		routes : {
			"article/all/:channelId" : "articleListCtrl",
			"article/get/:id" : "articleDetailsCtrl"
		},
		articleListCtrl : function(channelId) {
			var articleCollection = new ArticleCollection;
		},
		articleDetailsCtrl : function(id) {
			var article = new ArticleModel;
			article.fetch({
				url : "http://localhost:8080/tjpowermgm/article/get/" + id,
				success : function(model, response) {
					var articleDetailsView = new ArticleDetailsView({
						el : $('body'),
						model : model
					});
					articleDetailsView.render();
				},
				error : function() {
					alert('error');
				}
			});
		}
	});
	return ArticleRouter;
});
