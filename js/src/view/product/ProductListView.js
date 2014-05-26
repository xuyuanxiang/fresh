define(["backbone", "../../model/ProductModel", "../../collection/ProductCollection", "text!../../../../pages/productList.html"], function(Backbone, ProductModel, ProductCollection, productHtml) {
	var ProductListView = Backbone.View.extend({
		render : function() {
			var template = _.tempalte(productHtml, {});
			$(this.el).html(template);
		}
	});
	return ProductListView;
});
