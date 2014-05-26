define(["backbone", "../model/ChannelModel"], function(Backbone, Channel) {
	var Channels = Backbone.Collection.extend({
		model : Channel
	});
	return Channels;
});
