;
(function($, window, document, undefined) {
	'use strict';

	function Sliders(element, options) {
		this.element = element;
		this.options = {
			vWidth: options.vWidth || element.width(),
			current: options.current || 1,
			imgArr: options.imgArr,
			len: options.imgArr.length,
			autoLoop: options.autoLoop,
			time: options.time || 4000
		};
		this.init();
	}
	Sliders.prototype = {
		constructor: Sliders,
		init: function() {
			this.createHtml();
			this.bindEvent();
			this.hackLoop();
		},
		createHtml: function() {
			var me = this;
			var content = [];
			var imgArr = me.options.imgArr,
				len = me.options.len,
				current = me.options.current;
			content.push("<ul class='sliderUl'>");
			for(var i = 0; i < len; i++) {
				content.push("<li class='sliderLi'><img class='block' src=" + imgArr[i] + ">" + i + "</li>")
			}
			content.push("<li class='sliderLi'><img class='block' src=" + imgArr[0] + ">" + i + "</li></ul>");
			content.push("<ul class='pointer'>");
			for(var i = 1, len1 = len + 1; i < len1; i++) {
				if(current !== i) {
					content.push("<li data-index=" + i + "></li>");
				} else {
					content.push("<li class='current' data-index=" + i + "></li>");
				}
			}
			content.push("</ul>");
			me.element.html(content.join(''));
		},
		bindEvent: function() {
			var me = this;
			me.element.on('mouseenter', '.sliderUl', function() {
				clearInterval(me.timer);
			});
			me.element.on('mouseleave', '.sliderUl', function() {
				me.hackLoop();
			});
			me.element.on('click', '.pointer li', function() {
				clearInterval(me.timer);
				var index = parseInt($(this).data('index'));
				me.goPage(index);
			});
			me.element.on('click', '#preBtn', function() {
				clearInterval(me.timer);
				var i = me.options.current,
					len = me.options.len;
				me.options.current = --i === 0 ? len - 1 : i - 1;
				me.loop();
			});
			me.element.on('click', '#nextBtn', function() {
				clearInterval(me.timer);
				var i = me.options.current,
					len = me.options.len;
				me.options.current = i === len ? len : i;
				me.loop();
			});
		},
		loop: function() {
			var me = this;
			var i = me.options.current,
				vWidth = me.options.vWidth,
				len = me.options.len;
			me.element.children('.sliderUl').css({
				"-webkit-transform": "translateX(" + (-i * vWidth) + "px)",
				"transform": "translateX(" + (-i * vWidth) + "px)",
				"transition-duration": "0.4s",
				"transition-timing-function": "ease-in",
				"transition-property": "transform"
			});
			me.element.children('.pointer').children("li").removeClass("current");
			me.element.children('.pointer').children("li").eq(i === len ? 0 : i).addClass("current");
			if(me.options.current === len) {
				setTimeout(function() {
					me.element.children('.sliderUl').css({
						"-webkit-transform": "translateX(0px)",
						"transform": "translateX(0px)",
						"transition-duration": "none",
						"transition-timing-function": "none",
						"transition-property": "none"
					});
				}, 500);
			}
			me.options.current = (len !== i) ? ++i : 1;
		},
		hackLoop: function() {
			var me = this;
			if(me.options.autoLoop) {
				me.timer = setInterval(function() {
					me.loop();
				}, me.options.time);
			}
		},
		goPage: function(index) {
			var me = this;
			var vWidth = me.options.vWidth;
			me.options.current = index;
			me.element.children('.sliderUl').css({
				"-webkit-transform": "translateX(" + (-(index - 1) * vWidth) + "px)",
				"transform": "translateX(" + (-(index - 1) * vWidth) + "px)",
				"transition-duration": "0.4s",
				"transition-timing-function": "ease-in",
				"transition-property": "transform"
			});
			me.element.children('.pointer').children("li").removeClass("current");
			me.element.children('.pointer').children("li").eq(index - 1).addClass("current");
		}
	};
	$.fn.sliders = function(options) {
		return new Sliders($(this), options);
	}
})(jQuery, window, document);