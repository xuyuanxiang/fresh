define(["backbone"], function(Backbone) {
	var Channel = Backbone.Model.extend({
		defaults : {
			id : "",
			title : "",
			path : "",
			memo : "",
			typeId : "",
			parentId : "",
			iconPath : "",
			sorts : "",
			status : "",
			seoKeywords : "",
			seoDescription : "",
			allIds : ""
		}
	});
	return Channel;
});
