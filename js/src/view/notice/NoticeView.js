define(["backbone", "../../model/NoticeModel", "text!../../../../pages/notice.html", "css!../../../../css/slick.css", "slick"], function(Backbone, NoticeModel, noticeHtml) {
	var NoticeView = Backbone.View.extend({
		render : function() {
			var model = new NoticeModel;
			model.set({
				title : "通知及公告",
				content : "通知及公告内容通知及公告内容"
			});
			var template = _.template(noticeHtml, model.attributes);
			$(this.el).html(template);
		}
	});
	return NoticeView;
});
