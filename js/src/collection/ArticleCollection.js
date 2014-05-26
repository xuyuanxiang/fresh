define(["backbone", "../model/ArticleModel"], function(Backbone, Article) {
	var Articles = Backbone.Collection.extend({
		model : Article
	});
	return Articles;
});
