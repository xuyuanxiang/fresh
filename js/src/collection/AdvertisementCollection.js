define(["backbone", "../model/AdvertisementModel"], function(Backbone, Advertisement) {
	var Advertisements = Backbone.Collection.extend({
		model : Advertisement
	});
	return Advertisements;
});
