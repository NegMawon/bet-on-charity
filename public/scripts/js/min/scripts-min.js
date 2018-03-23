!function($){"use strict";var e=$("body");$.fn.uouTwitterFeed=function(){if($.fn.tweet){var e=$(this),t=e.data("id"),a=e.data("limit"),i=e.parents(".twitter-widget");e.bind("loaded",function(){if(i.removeClass("loading"),e.hasClass("paginated")&&$.fn.owlCarousel){var t=e.data("interval")?parseInt(e.data("interval"))>0:!1;e.find(".tweet-list").fadeIn(500),i.find(".tweet-nav").fadeIn(500),e.find(".tweet-list").owlCarousel({autoPlay:t,slideSpeed:300,pagination:!1,paginationSpeed:400,singleItem:!0}),i.find(".tweet-nav-prev").click(function(){e.find(".tweet-list").trigger("owl.prev")}),i.find(".tweet-nav-next").click(function(){e.find(".tweet-list").trigger("owl.next")})}}),e.tweet({username:t,modpath:"./twitter/",count:a,loading_text:'<span class="loading-anim"><span></span></span>'})}};var t=function(){$("#media-query-breakpoint").length<1&&$("body").append('<var id="media-query-breakpoint"><span></span></var>');var e=$("#media-query-breakpoint").css("content");return"undefined"!=typeof e?(e=e.replace('"',"").replace('"',"").replace("'","").replace("'",""),isNaN(parseInt(e,10))&&($("#media-query-breakpoint span").each(function(){e=window.getComputedStyle(this,":before").content}),e=e.replace('"',"").replace('"',"").replace("'","").replace("'","")),isNaN(parseInt(e,10))&&(e=1199)):e=1199,e};$.fn.uouCustomSelect=function(){var e=$(this);e.wrap('<div class="uou-custom-select"></div>');var t=e.parent(".uou-custom-select");t.append('<ul class="select-clone"></ul>');var i=t.children(".select-clone"),n=e.data("placeholder")?e.data("placeholder"):e.find("option:eq(0)").text();$('<input class="value-holder" type="hidden" disabled="disabled" placeholder="'+n+'"><span class="placeholder">'+n+'</span><i class="fa fa-chevron-down"></i>').insertBefore(i);var s=t.children(".value-holder"),o=t.children(".placeholder");e.find("option").each(function(){var e=$(this);i.append('<li data-value="'+e.val()+'">'+e.text()+"</li>")}),t.on("click",function(){t.toggleClass("active"),i.slideToggle(250)}),i.children("li").on("click",function(){var t=$(this);s.val(t.text()),o.html(t.text()),e.find('option[value="'+t.data("value")+'"]').prop("selected",!0)}),t.on("clickoutside touchendoutside",function(){a||(t.removeClass("active"),i.slideUp(250))}),e.hasClass("links")&&e.on("change",function(){window.location.href=select.val()})},$(document).ready(function(){$("#home-slider").owlCarousel({autoPlay:!1,singleItem:!0});var e=$("#home-slider");$(".intro .next").click(function(){e.trigger("owl.next")}),$(".intro .prev").click(function(){e.trigger("owl.prev")}),$("#home-slider").each(function(){var e=$(this),t=e.find(".item");t.each(function(){var e=$(this).find("img");e.length>0&&($(this).css("background-image","url("+e.attr("src")+")"),e.hide())})}),$(".match-week").each(function(){$(".datepicker-inner").datepicker()}),$("nav ul li a[href^='#']").on("click",function(e){e.preventDefault();var t=this.hash,a=$("#header.second-version").height()-1;return $("html, body").animate({scrollTop:$(t).offset().top-a},500),!1}),$("#back-to-top").each(function(){var e=$(this);e.on("click",function(e){e.preventDefault(),$("html, body").animate({scrollTop:0},500)}),$(window).scroll(function(){$(this).scrollTop()>300?e.fadeIn(200):$(this).scrollTop()<250&&e.fadeOut(200)})});var a=$("#header .header-toolbar .header-language");a.children("a").on("click",function(e){e.preventDefault(),$(this).parent(".header-language").toggleClass("active")}),a.on("clickoutside touchendoutside",function(){a.hasClass("active")&&a.removeClass("active")});var i=$("#header .header-toolbar .header-login, #header .header-toolbar .header-register");i.each(function(){var e=$(this);e.children("a").on("click",function(t){t.preventDefault(),e.toggleClass("active")}),e.on("clickoutside touchendoutside",function(){e.hasClass("active")&&e.removeClass("active")})}),$("select").each(function(){$(this).uouCustomSelect()}),$(".profile-slider").owlCarousel({autoPlay:!1,singleItem:!0,navigation:!0,navigationText:!1}),$(".twitter-feed").each(function(){$(this).uouTwitterFeed()}),$('a[data-toggle="tab"]').on("shown.bs.tab",function(e){console.log(e.target),$("#matches .teams-filter li, #trainings .teams-filter li").removeClass("active")}),$(".cups-slider").owlCarousel({autoPlay:!1,items:5,navigation:!0,navigationText:!1,afterAction:function(e){this.$owlItems.find(".cup-single").removeClass("active"),this.$owlItems.eq(this.currentItem+2).find(".cup-single").addClass("active")}});var n=t(),s=$(".header-navbar");s.find("li.has-submenu").hover(function(){n>992&&($(this).addClass("hover"),$(this).find(".sub-menu").stop(!0,!0).fadeIn(200))},function(){n>992&&($(this).removeClass("hover"),$(this).find(".sub-menu").stop(!0,!0).delay(10).fadeOut(200))}),s.find(".navbar-toggle").each(function(){$(this).click(function(){$(this).parent().find(".navigation").slideToggle("200"),$(this).parent().find(".navigation").toggleClass("active"),$(this).parent().parent().parent().parent().find(".header-navbar").toggleClass("active"),$(this).parent().parent().parent().parent().parent().find("#header").toggleClass("active"),$(this).parent().parent().parent().parent().parent().find(".header-logo").toggleClass("active"),$(this).find(".fa").toggleClass("fa-list fa-outdent")})}),s.find("li.has-submenu").each(function(){$(this).append('<button class="submenu-toggle"><i class="fa fa-chevron-down"></i></button>')}),s.find(".submenu-toggle").each(function(){$(this).click(function(){$(this).parent().find(".sub-menu").slideToggle(200),$(this).find(".fa").toggleClass("fa-chevron-up fa-chevron-down")})}),$(window).resize(function(){t()!==n&&(n=t(),$(".navigation, .has-submenu .sub-menu").removeAttr("style"),$("#header").removeClass("active"))}),$(".matches, .video-tabs").each(function(){var e=$(this);$(this).parent().find(".prev").on("click",function(){var t=e.scrollTop(),a=e.children().first(),i=a.outerHeight()+parseInt(a.css("marginBottom"),10);t>=0&&(t-=i,e.stop().animate({scrollTop:t},100))}),$(this).parent().find(".next").on("click",function(){var t=e.scrollTop(),a=e.height(),i=e.children().first(),n=i.outerHeight()+parseInt(i.css("marginBottom"),10);a>=t&&(t+=n,e.stop().animate({scrollTop:t},100))})}),$(".teams-filter").owlCarousel({autoPlay:!1,items:9,navigation:!1}),$("#matches .teams-filter li").on("click",function(){$(".active1").removeClass("active1"),$(this).addClass("active1")}),$("#trainings .teams-filter li").on("click",function(){$(".active2").removeClass("active2"),$(this).addClass("active2")}),$(".testimonials-slider").owlCarousel({autoPlay:!1,items:2,itemsDesktop:[1199,2],itemsTablet:[988,1],itemsTabletSmall:[520,1],itemsMobile:[479,1],navigation:!0,navigationText:!1,scrollPerPage:!0}),$(".header-search .fa").on("click",function(){$(".header-search").toggleClass("active")}),$(function(){$().timelinr({orientation:"horizontal",containerDiv:"#timeline",datesDiv:"#dates",datesSelectedClass:"selected",datesSpeed:"normal",issuesDiv:"#issues",issuesSelectedClass:"selected",issuesSpeed:"fast",issuesTransparency:.2,issuesTransparencySpeed:500,prevButton:"#prev",nextButton:"#next",arrowKeys:"false",startAt:1,autoPlay:"false",autoPlayDirection:"forward",autoPlayPause:2e3})})});var a=!1;e.on("touchmove",function(){a=!0}),e.on("touchstart",function(){a=!1})}(jQuery);