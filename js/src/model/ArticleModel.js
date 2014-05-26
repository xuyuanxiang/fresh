define(["backbone"], function(Backbone) {
	var Article = Backbone.Model.extend({
		sync : function(method, model, options) {
			var params = _.extend({
				type : 'get',
				dataType : 'jsonp',
				jsonpCallback : "callback",
				url : model.url,
				processData : false
			}, options);
			return $.ajax(params);
		},
		parse : function(response) {
			if (response) {
				if (response.status == 1 && response.data) {
					return {
						id : response.data.id || "",
						title : response.data.title || "",
						summary : response.data.summary || "",
						content : response.data.text1 || "" + response.data.text2 || "" + response.data.text3 || "" + response.data.text4 || "" + response.data.text5 || "",
						author : response.data.author || "",
						source : response.data.source || "",
						hits : response.data.hits || "",
						status : response.data.status || "",
						createdate : response.data.createdate || "",
						creator : response.data.creator || "",
						channelId : response.data.channelId || "",

					};
				}
			}
		},
		validate : function(attrs) {
			if (!attrs.title) {
				return "标题不能为空！";
			}
		},
		defaults : {
			id : "",
			title : "",
			summary : "",
			content : "",
			author : "",
			source : "",
			hits : "",
			status : "",
			createdate : "",
			creator : "",
			channelId : ""
		}
	});
	return Article;
});
