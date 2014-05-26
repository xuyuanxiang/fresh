define(["backbone", "../model/ProductModel"], function(Backbone, ProductModel) {
	var ProductCollection = Backbone.Model.extend({
		model : ProductModel
	});
	return ProductCollection;
});
