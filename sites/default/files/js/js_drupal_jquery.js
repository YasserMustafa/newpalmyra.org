jQuery.extend(Drupal.settings, {
	"basePath": "\/",
	"pathPrefix": "",
	"ajaxPageState": {
		"theme": "newpalmyra",
		"theme_token": "v26fpLm-5h_EQFPvLl_tabDUhTjAQpUr4_3WKTvucZk",
		"js": {
			"sites\/all\/modules\/flexslider\/assets\/js\/flexslider.load.js": 1,
			"sites\/all\/themes\/bootstrap\/js\/bootstrap.js": 1,
			"sites\/all\/modules\/jquery_update\/replace\/jquery\/1.7\/jquery.min.js": 1,
			"misc\/jquery.once.js": 1,
			"misc\/drupal.js": 1,
			"\/\/netdna.bootstrapcdn.com\/bootstrap\/3.0.2\/js\/bootstrap.min.js": 1,
			"sites\/all\/modules\/contentanalysis\/contentanalysis.js": 1,
			"sites\/all\/modules\/contentoptimizer\/contentoptimizer.js": 1,
			"sites\/all\/libraries\/colorbox\/jquery.colorbox-min.js": 1,
			"sites\/all\/modules\/colorbox\/js\/colorbox.js": 1,
			"sites\/all\/modules\/colorbox\/styles\/default\/colorbox_style.js": 1,
			"sites\/all\/libraries\/flexslider\/jquery.flexslider-min.js": 1,
			"sites\/all\/modules\/google_analytics\/googleanalytics.js": 1,
			"0": 1
		},
		"css": {
			"modules\/system\/system.base.css": 1,
			"sites\/all\/modules\/date\/date_api\/date.css": 1,
			"sites\/all\/modules\/date\/date_popup\/themes\/datepicker.1.7.css": 1,
			"modules\/field\/theme\/field.css": 1,
			"sites\/all\/modules\/views\/css\/views.css": 1,
			"sites\/all\/modules\/colorbox\/styles\/default\/colorbox_style.css": 1,
			"sites\/all\/modules\/ctools\/css\/ctools.css": 1,
			"sites\/all\/modules\/flexslider\/assets\/css\/flexslider_img.css": 1,
			"sites\/all\/libraries\/flexslider\/flexslider.css": 1,
			"\/\/netdna.bootstrapcdn.com\/bootstrap\/3.0.2\/css\/bootstrap.min.css": 1,
			"sites\/all\/themes\/bootstrap\/css\/overrides.css": 1,
			"sites\/all\/themes\/newpalmyra\/css\/style.css": 1
		}
	},
	"colorbox": {
		"opacity": "0.85",
		"current": "{current} of {total}",
		"previous": "\u00ab Prev",
		"next": "Next \u00bb",
		"close": "Close",
		"maxWidth": "98%",
		"maxHeight": "98%",
		"fixed": true,
		"mobiledetect": true,
		"mobiledevicewidth": "480px"
	},
	"flexslider": {
		"optionsets": {
			"featured_project_slider": {
				"namespace": "flex-",
				"selector": ".slides \u003E li",
				"easing": "swing",
				"direction": "horizontal",
				"reverse": false,
				"smoothHeight": false,
				"startAt": 0,
				"animationSpeed": 600,
				"initDelay": 0,
				"useCSS": true,
				"touch": true,
				"video": false,
				"keyboard": true,
				"multipleKeyboard": false,
				"mousewheel": 0,
				"controlsContainer": ".flex-control-nav-container",
				"sync": "",
				"asNavFor": "",
				"itemWidth": 0,
				"itemMargin": 0,
				"minItems": 0,
				"maxItems": 0,
				"move": 0,
				"animation": "fade",
				"slideshow": true,
				"slideshowSpeed": "7000",
				"directionNav": true,
				"controlNav": true,
				"prevText": "Previous",
				"nextText": "Next",
				"pausePlay": false,
				"pauseText": "Pause",
				"playText": "Play",
				"randomize": false,
				"thumbCaptions": false,
				"thumbCaptionsBoth": false,
				"animationLoop": true,
				"pauseOnAction": true,
				"pauseOnHover": false,
				"manualControls": ""
			}
		},
		"instances": {
			"flexslider-1": "featured_project_slider",
			"flexslider-2": "craftgrid_slider"
		}
	},
	"googleanalytics": {
		"trackOutbound": 1,
		"trackMailto": 1,
		"trackDownload": 1,
		"trackDownloadExtensions": "7z|aac|arc|arj|asf|asx|avi|bin|csv|doc(x|m)?|dot(x|m)?|exe|flv|gif|gz|gzip|hqx|jar|jpe?g|js|mp(2|3|4|e?g)|mov(ie)?|msi|msp|pdf|phps|png|ppt(x|m)?|pot(x|m)?|pps(x|m)?|ppam|sld(x|m)?|thmx|qtm?|ra(m|r)?|sea|sit|tar|tgz|torrent|txt|wav|wma|wmv|wpd|xls(x|m|b)?|xlt(x|m)|xlam|xml|z|zip"
	},
	"bootstrap": {
		"anchorsFix": 1,
		"anchorsSmoothScrolling": 1,
		"popoverEnabled": 1,
		"popoverOptions": {
			"animation": 1,
			"html": 0,
			"placement": "right",
			"selector": "",
			"trigger": "click",
			"title": "",
			"content": "",
			"delay": 0,
			"container": "body"
		},
		"tooltipEnabled": 1,
		"tooltipOptions": {
			"animation": 1,
			"html": 0,
			"placement": "auto left",
			"selector": "",
			"trigger": "hover focus",
			"delay": 0,
			"container": "body"
		}
	}
});