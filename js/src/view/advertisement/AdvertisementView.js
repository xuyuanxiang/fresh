define(["backbone", "../../model/AdvertisementModel", "../../collection/AdvertisementCollection", "text!../../../../pages/advertisement.html", "css!../../../../css/slick.css", "slick"], function(Backbone, AdvertisementModel, AdvertisementCollection, advertisementHtml) {
	var AdvertisementView = Backbone.View.extend({
		initialize : function() {
		},
		render : function() {
			var template = _.template(advertisementHtml, {
				advertisements : [{
					imgPath : "images/pic_home_slide.png"
				}, {
					imgPath : "images/pic_home_slide.png"
				}]
			});
			$(this.el).html(template);
			$(this.el).slick({
				dots : true,
				slidesToShow : 1,
				slidesToScroll : 1
			});
		}	});
	return AdvertisementView;
});
