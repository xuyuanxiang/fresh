require.config({
	paths : {
		"jquery" : "lib/jquery-1.11.0.min",
		"bootstrap" : "lib/bootstrap.min",
		"slick" : "3rd/slick.min",
		"css" : "lib/css.min",
		"text" : "lib/text.min",
		"underscore" : "lib/underscore-min",
		"backbone" : "lib/backbone-min"
	},
	shim : {
		"bootstrap" : {
			"deps" : ["jquery"],
			"exports" : "bootstrap"
		},
		"slick" : {
			"deps" : ["jquery"],
			"exports" : "slick"
		},
		"backbone" : {
			"deps" : ["jquery", "underscore"],
			"exports" : "cookies"
		}
	}
});
require(["backbone", "src/router/HomeRouter", "src/view/channel/ChannelView", "css!../css/bootstrap.min.css", "css!../css/font-awesome.min.css", "css!../css/global.css"], function(Backbone, HomeRouter, ChannelView) {
	var homeRouter = new HomeRouter;
	var channelView = new ChannelView({
		el : $('.navbar')
	});
	channelView.render();
	Backbone.history.start();
});

