define(["backbone", "../../model/ArticleModel", "text!../../../../pages/article_details.html"], function(Backbone, ArticleModel, articleDetailsHtml) {
	var ArticleDetailsView = Backbone.View.extend({
		initialize : function() {
			this.listenTo(this.model, 'change', this.render);
		},
		render : function() {
			var template = _.template(articleDetailsHtml, this.model.attributes);
			$(this.el).hide().html(template).fadeIn(200)
		},
		events : {
			'change input[name=title]' : 'inputTitleChange'
		},
		inputTitleChange : function() {
			this.model.set({
				title : $('input[name=title]').val()
			});
		}
	});
	return ArticleDetailsView;
});
