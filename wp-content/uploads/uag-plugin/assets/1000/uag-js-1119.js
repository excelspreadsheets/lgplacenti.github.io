document.addEventListener("DOMContentLoaded", function(){ 				window.addEventListener( 'DOMContentLoaded', function() {
					const scope = document.querySelector( '.uagb-block-d9e298ac' );
					if ( scope ){
						if ( scope.children[0].classList.contains( 'spectra-image-gallery__layout--masonry' ) ) {
							// Add timeout for the images to load.
							setTimeout( function() {
								const element = scope.querySelector( '.spectra-image-gallery__layout--masonry' );
								const isotope = new Isotope( element, {
									itemSelector: '.spectra-image-gallery__media-wrapper--isotope',
									percentPosition: true,
								} );
								imagesLoaded( element ).on( 'progress', function() {
									isotope.layout();
								});
								imagesLoaded( element ).on( 'always', function() {
									element.parentNode.style.visibility = 'visible';
								});
								UAGBImageGalleryMasonry.init( {"block_id":"d9e298ac","classMigrate":true,"readyToRender":true,"tileSize":149,"mediaGallery":[{"sizes":{"thumbnail":{"height":150,"width":150,"url":"http:\/\/localhost\/wordpress\/wp-content\/uploads\/2024\/06\/IMG_5703-150x150.jpg","orientation":"landscape"},"medium":{"height":300,"width":300,"url":"http:\/\/localhost\/wordpress\/wp-content\/uploads\/2024\/06\/IMG_5703-300x300.jpg","orientation":"landscape"},"large":{"height":1024,"width":1024,"url":"http:\/\/localhost\/wordpress\/wp-content\/uploads\/2024\/06\/IMG_5703-1024x1024.jpg","orientation":"landscape"},"vp_sm":{"height":500,"width":500,"url":"http:\/\/localhost\/wordpress\/wp-content\/uploads\/2024\/06\/IMG_5703-500x500.jpg","orientation":"landscape"},"vp_md":{"height":800,"width":800,"url":"http:\/\/localhost\/wordpress\/wp-content\/uploads\/2024\/06\/IMG_5703-800x800.jpg","orientation":"landscape"},"vp_lg":{"height":1280,"width":1280,"url":"http:\/\/localhost\/wordpress\/wp-content\/uploads\/2024\/06\/IMG_5703-1280x1280.jpg","orientation":"landscape"},"vp_xl":{"height":1920,"width":1920,"url":"http:\/\/localhost\/wordpress\/wp-content\/uploads\/2024\/06\/IMG_5703-1920x1920.jpg","orientation":"landscape"},"full":{"url":"http:\/\/localhost\/wordpress\/wp-content\/uploads\/2024\/06\/IMG_5703.jpg","height":2000,"width":2000,"orientation":"landscape"}},"mime":"image\/jpeg","type":"image","subtype":"jpeg","id":1091,"url":"http:\/\/localhost\/wordpress\/wp-content\/uploads\/2024\/06\/IMG_5703.jpg","alt":"","link":"https:\/\/localhost\/wordpress\/img_5703\/","caption":""},{"sizes":{"thumbnail":{"height":150,"width":150,"url":"http:\/\/localhost\/wordpress\/wp-content\/uploads\/2024\/06\/IMG_5723-150x150.jpg","orientation":"landscape"},"medium":{"height":300,"width":300,"url":"http:\/\/localhost\/wordpress\/wp-content\/uploads\/2024\/06\/IMG_5723-300x300.jpg","orientation":"landscape"},"large":{"height":1024,"width":1024,"url":"http:\/\/localhost\/wordpress\/wp-content\/uploads\/2024\/06\/IMG_5723-1024x1024.jpg","orientation":"landscape"},"vp_sm":{"height":500,"width":500,"url":"http:\/\/localhost\/wordpress\/wp-content\/uploads\/2024\/06\/IMG_5723-500x500.jpg","orientation":"landscape"},"vp_md":{"height":800,"width":800,"url":"http:\/\/localhost\/wordpress\/wp-content\/uploads\/2024\/06\/IMG_5723-800x800.jpg","orientation":"landscape"},"vp_lg":{"height":1280,"width":1280,"url":"http:\/\/localhost\/wordpress\/wp-content\/uploads\/2024\/06\/IMG_5723-1280x1280.jpg","orientation":"landscape"},"vp_xl":{"height":1920,"width":1920,"url":"http:\/\/localhost\/wordpress\/wp-content\/uploads\/2024\/06\/IMG_5723-1920x1920.jpg","orientation":"landscape"},"full":{"url":"http:\/\/localhost\/wordpress\/wp-content\/uploads\/2024\/06\/IMG_5723.jpg","height":2000,"width":2000,"orientation":"landscape"}},"mime":"image\/jpeg","type":"image","subtype":"jpeg","id":1092,"url":"http:\/\/localhost\/wordpress\/wp-content\/uploads\/2024\/06\/IMG_5723.jpg","alt":"","link":"https:\/\/localhost\/wordpress\/img_5723\/","caption":""},{"sizes":{"thumbnail":{"height":150,"width":150,"url":"http:\/\/localhost\/wordpress\/wp-content\/uploads\/2024\/06\/IMG_5701-150x150.jpg","orientation":"landscape"},"medium":{"height":300,"width":300,"url":"http:\/\/localhost\/wordpress\/wp-content\/uploads\/2024\/06\/IMG_5701-300x300.jpg","orientation":"landscape"},"large":{"height":1024,"width":1024,"url":"http:\/\/localhost\/wordpress\/wp-content\/uploads\/2024\/06\/IMG_5701-1024x1024.jpg","orientation":"landscape"},"vp_sm":{"height":500,"width":500,"url":"http:\/\/localhost\/wordpress\/wp-content\/uploads\/2024\/06\/IMG_5701-500x500.jpg","orientation":"landscape"},"vp_md":{"height":800,"width":800,"url":"http:\/\/localhost\/wordpress\/wp-content\/uploads\/2024\/06\/IMG_5701-800x800.jpg","orientation":"landscape"},"vp_lg":{"height":1280,"width":1280,"url":"http:\/\/localhost\/wordpress\/wp-content\/uploads\/2024\/06\/IMG_5701-1280x1280.jpg","orientation":"landscape"},"vp_xl":{"height":1920,"width":1920,"url":"http:\/\/localhost\/wordpress\/wp-content\/uploads\/2024\/06\/IMG_5701-1920x1920.jpg","orientation":"landscape"},"full":{"url":"http:\/\/localhost\/wordpress\/wp-content\/uploads\/2024\/06\/IMG_5701.jpg","height":2000,"width":2000,"orientation":"landscape"}},"mime":"image\/jpeg","type":"image","subtype":"jpeg","id":1090,"url":"http:\/\/localhost\/wordpress\/wp-content\/uploads\/2024\/06\/IMG_5701.jpg","alt":"","link":"https:\/\/localhost\/wordpress\/img_5701\/","caption":""},{"sizes":{"thumbnail":{"height":150,"width":150,"url":"http:\/\/localhost\/wordpress\/wp-content\/uploads\/2024\/06\/IMG_5686-150x150.jpg","orientation":"landscape"},"medium":{"height":300,"width":300,"url":"http:\/\/localhost\/wordpress\/wp-content\/uploads\/2024\/06\/IMG_5686-300x300.jpg","orientation":"landscape"},"large":{"height":1024,"width":1024,"url":"http:\/\/localhost\/wordpress\/wp-content\/uploads\/2024\/06\/IMG_5686-1024x1024.jpg","orientation":"landscape"},"vp_sm":{"height":500,"width":500,"url":"http:\/\/localhost\/wordpress\/wp-content\/uploads\/2024\/06\/IMG_5686-500x500.jpg","orientation":"landscape"},"vp_md":{"height":800,"width":800,"url":"http:\/\/localhost\/wordpress\/wp-content\/uploads\/2024\/06\/IMG_5686-800x800.jpg","orientation":"landscape"},"vp_lg":{"height":1280,"width":1280,"url":"http:\/\/localhost\/wordpress\/wp-content\/uploads\/2024\/06\/IMG_5686-1280x1280.jpg","orientation":"landscape"},"vp_xl":{"height":1920,"width":1920,"url":"http:\/\/localhost\/wordpress\/wp-content\/uploads\/2024\/06\/IMG_5686-1920x1920.jpg","orientation":"landscape"},"full":{"url":"http:\/\/localhost\/wordpress\/wp-content\/uploads\/2024\/06\/IMG_5686.jpg","height":2000,"width":2000,"orientation":"landscape"}},"mime":"image\/jpeg","type":"image","subtype":"jpeg","id":1089,"url":"http:\/\/localhost\/wordpress\/wp-content\/uploads\/2024\/06\/IMG_5686.jpg","alt":"","link":"https:\/\/localhost\/wordpress\/img_5686\/","caption":""},{"sizes":{"thumbnail":{"height":150,"width":150,"url":"http:\/\/localhost\/wordpress\/wp-content\/uploads\/2024\/06\/IMG_5726-150x150.jpg","orientation":"landscape"},"medium":{"height":300,"width":300,"url":"http:\/\/localhost\/wordpress\/wp-content\/uploads\/2024\/06\/IMG_5726-300x300.jpg","orientation":"landscape"},"large":{"height":1024,"width":1024,"url":"http:\/\/localhost\/wordpress\/wp-content\/uploads\/2024\/06\/IMG_5726-1024x1024.jpg","orientation":"landscape"},"vp_sm":{"height":500,"width":500,"url":"http:\/\/localhost\/wordpress\/wp-content\/uploads\/2024\/06\/IMG_5726-500x500.jpg","orientation":"landscape"},"vp_md":{"height":800,"width":800,"url":"http:\/\/localhost\/wordpress\/wp-content\/uploads\/2024\/06\/IMG_5726-800x800.jpg","orientation":"landscape"},"vp_lg":{"height":1280,"width":1280,"url":"http:\/\/localhost\/wordpress\/wp-content\/uploads\/2024\/06\/IMG_5726-1280x1280.jpg","orientation":"landscape"},"vp_xl":{"height":1920,"width":1920,"url":"http:\/\/localhost\/wordpress\/wp-content\/uploads\/2024\/06\/IMG_5726-1920x1920.jpg","orientation":"landscape"},"full":{"url":"http:\/\/localhost\/wordpress\/wp-content\/uploads\/2024\/06\/IMG_5726.jpg","height":2000,"width":2000,"orientation":"landscape"}},"mime":"image\/jpeg","type":"image","subtype":"jpeg","id":1093,"url":"http:\/\/localhost\/wordpress\/wp-content\/uploads\/2024\/06\/IMG_5726.jpg","alt":"","link":"https:\/\/localhost\/wordpress\/img_5726\/","caption":""},{"sizes":{"thumbnail":{"height":150,"width":150,"url":"http:\/\/localhost\/wordpress\/wp-content\/uploads\/2024\/06\/Lecollage-150x150.webp","orientation":"landscape"},"medium":{"height":300,"width":300,"url":"http:\/\/localhost\/wordpress\/wp-content\/uploads\/2024\/06\/Lecollage-300x300.webp","orientation":"landscape"},"large":{"height":1024,"width":1024,"url":"http:\/\/localhost\/wordpress\/wp-content\/uploads\/2024\/06\/Lecollage-1024x1024.webp","orientation":"landscape"},"vp_sm":{"height":500,"width":500,"url":"http:\/\/localhost\/wordpress\/wp-content\/uploads\/2024\/06\/Lecollage-500x500.webp","orientation":"landscape"},"vp_md":{"height":800,"width":800,"url":"http:\/\/localhost\/wordpress\/wp-content\/uploads\/2024\/06\/Lecollage-800x800.webp","orientation":"landscape"},"vp_lg":{"height":1280,"width":1280,"url":"http:\/\/localhost\/wordpress\/wp-content\/uploads\/2024\/06\/Lecollage-1280x1280.webp","orientation":"landscape"},"vp_xl":{"height":1920,"width":1920,"url":"http:\/\/localhost\/wordpress\/wp-content\/uploads\/2024\/06\/Lecollage-1920x1920.webp","orientation":"landscape"},"full":{"url":"http:\/\/localhost\/wordpress\/wp-content\/uploads\/2024\/06\/Lecollage-scaled.webp","height":2560,"width":2560,"orientation":"landscape"}},"mime":"image\/webp","type":"image","subtype":"webp","id":1076,"url":"http:\/\/localhost\/wordpress\/wp-content\/uploads\/2024\/06\/Lecollage-scaled.webp","alt":"","link":"https:\/\/localhost\/wordpress\/lecollage\/","caption":""}],"mediaIDs":[1091,1092,1090,1089,1093,1076],"feedLayout":"masonry","imageDisplayCaption":false,"galleryImageSize":"vp_xl","imageClickEvent":"lightbox","columnsDesk":2,"columnsTab":4,"columnsMob":1,"gridPages":3,"paginateUseLoader":false,"paginateLimit":12,"focusList":[],"focusListObject":[],"galleryImageSizeTablet":"large","galleryImageSizeMobile":"medium","disableLazyLoad":false,"lightboxDisplayCaptions":false,"lightboxThumbnails":false,"lightboxDisplayCount":false,"lightboxCloseIcon":"xmark","lightboxCaptionHeight":50,"lightboxCaptionHeightTablet":"","lightboxCaptionHeightMobile":"","lightboxIconSize":24,"lightboxIconSizeTablet":"","lightboxIconSizeMobile":"","captionVisibility":"hover","captionDisplayType":"overlay","imageCaptionAlignment":"center center","imageCaptionAlignment01":"center","imageCaptionAlignment02":"center","imageDefaultCaption":"No Caption","captionPaddingTop":8,"captionPaddingRight":8,"captionPaddingBottom":8,"captionPaddingLeft":8,"captionPaddingTopTab":8,"captionPaddingRightTab":8,"captionPaddingBottomTab":8,"captionPaddingLeftTab":8,"captionPaddingTopMob":8,"captionPaddingRightMob":8,"captionPaddingBottomMob":8,"captionPaddingLeftMob":8,"captionPaddingUnit":"px","captionPaddingUnitTab":"px","captionPaddingUnitMob":"px","captionPaddingUnitLink":true,"captionGap":0,"captionGapUnit":"px","gridImageGap":8,"gridImageGapTab":"","gridImageGapMob":"","gridImageGapUnit":"px","gridImageGapUnitTab":"px","gridImageGapUnitMob":"px","feedMarginTop":"","feedMarginRight":"","feedMarginBottom":"","feedMarginLeft":"","feedMarginTopTab":"","feedMarginRightTab":"","feedMarginBottomTab":"","feedMarginLeftTab":"","feedMarginTopMob":"","feedMarginRightMob":"","feedMarginBottomMob":"","feedMarginLeftMob":"","feedMarginUnit":"px","feedMarginUnitTab":"px","feedMarginUnitMob":"px","feedMarginUnitLink":true,"carouselStartAt":0,"carouselSquares":false,"carouselLoop":true,"carouselAutoplay":true,"carouselAutoplaySpeed":2000,"carouselPauseOnHover":true,"carouselTransitionSpeed":500,"gridPageNumber":1,"feedPagination":false,"paginateUseArrows":true,"paginateUseDots":true,"paginateButtonAlign":"center","paginateButtonText":"Load More Images","paginateButtonPaddingTop":"","paginateButtonPaddingRight":"","paginateButtonPaddingBottom":"","paginateButtonPaddingLeft":"","paginateButtonPaddingTopTab":"","paginateButtonPaddingRightTab":"","paginateButtonPaddingBottomTab":"","paginateButtonPaddingLeftTab":"","paginateButtonPaddingTopMob":"","paginateButtonPaddingRightMob":"","paginateButtonPaddingBottomMob":"","paginateButtonPaddingLeftMob":"","paginateButtonPaddingUnit":"px","paginateButtonPaddingUnitTab":"px","paginateButtonPaddingUnitMob":"px","paginateButtonPaddingUnitLink":true,"imageEnableZoom":true,"imageZoomType":"zoom-in","captionBackgroundEnableBlur":false,"captionBackgroundBlurAmount":0,"captionBackgroundBlurAmountHover":5,"lightboxEdgeDistance":10,"lightboxEdgeDistanceTablet":"","lightboxEdgeDistanceMobile":"","lightboxBackgroundEnableBlur":true,"lightboxBackgroundBlurAmount":5,"lightboxBackgroundColor":"rgba(0,0,0,0.75)","lightboxIconColor":"rgba(255,255,255,1)","lightboxCaptionColor":"rgba(255,255,255,1)","lightboxCaptionBackgroundColor":"rgba(0,0,0,1)","captionLoadGoogleFonts":false,"captionFontFamily":"Default","captionFontWeight":"","captionFontStyle":"normal","captionTransform":"","captionDecoration":"none","captionFontSizeType":"px","captionFontSize":"","captionFontSizeTab":"","captionFontSizeMob":"","captionLineHeightType":"em","captionLineHeight":"","captionLineHeightTab":"","captionLineHeightMob":"","loadMoreLoadGoogleFonts":false,"loadMoreFontFamily":"Default","loadMoreFontWeight":"","loadMoreFontStyle":"normal","loadMoreTransform":"","loadMoreDecoration":"none","loadMoreFontSizeType":"px","loadMoreFontSize":"","loadMoreFontSizeTab":"","loadMoreFontSizeMob":"","loadMoreLineHeightType":"em","loadMoreLineHeight":"","loadMoreLineHeightTab":"","loadMoreLineHeightMob":"","lightboxLoadGoogleFonts":false,"lightboxFontFamily":"Default","lightboxFontWeight":"","lightboxFontStyle":"normal","lightboxTransform":"","lightboxDecoration":"none","lightboxFontSizeType":"px","lightboxFontSize":"","lightboxFontSizeTab":"","lightboxFontSizeMob":"","lightboxLineHeightType":"em","lightboxLineHeight":"","lightboxLineHeightTab":"","lightboxLineHeightMob":"","captionBackgroundEffect":"none","captionBackgroundEffectHover":"none","captionBackgroundEffectAmount":100,"captionBackgroundEffectAmountHover":0,"captionColor":"rgba(255,255,255,1)","captionColorHover":"rgba(255,255,255,1)","captionBackgroundColor":"rgba(0,0,0,0.75)","captionBackgroundColorHover":"rgba(0,0,0,0.75)","overlayColor":"rgba(0,0,0,0)","overlayColorHover":"rgba(0,0,0,0)","captionSeparateColors":false,"paginateArrowDistance":-24,"paginateArrowDistanceUnit":"px","paginateArrowSize":24,"paginateDotDistance":8,"paginateDotDistanceUnit":"px","paginateLoaderSize":18,"paginateButtonTextColor":"","paginateButtonTextColorHover":"","paginateColor":"","paginateColorHover":"","imageBoxShadowColor":"","imageBoxShadowHOffset":0,"imageBoxShadowVOffset":0,"imageBoxShadowBlur":"","imageBoxShadowSpread":"","imageBoxShadowPosition":"outset","imageBoxShadowColorHover":"","imageBoxShadowHOffsetHover":0,"imageBoxShadowVOffsetHover":0,"imageBoxShadowBlurHover":"","imageBoxShadowSpreadHover":"","imageBoxShadowPositionHover":"outset","arrowBorderTopWidth":4,"arrowBorderLeftWidth":4,"arrowBorderRightWidth":4,"arrowBorderBottomWidth":4,"arrowBorderTopLeftRadius":50,"arrowBorderTopRightRadius":50,"arrowBorderBottomLeftRadius":50,"arrowBorderBottomRightRadius":50,"arrowBorderRadiusUnit":"px","arrowBorderTopWidthTablet":"","arrowBorderLeftWidthTablet":"","arrowBorderRightWidthTablet":"","arrowBorderBottomWidthTablet":"","arrowBorderTopLeftRadiusTablet":"","arrowBorderTopRightRadiusTablet":"","arrowBorderBottomLeftRadiusTablet":"","arrowBorderBottomRightRadiusTablet":"","arrowBorderRadiusUnitTablet":"px","arrowBorderTopWidthMobile":"","arrowBorderLeftWidthMobile":"","arrowBorderRightWidthMobile":"","arrowBorderBottomWidthMobile":"","arrowBorderTopLeftRadiusMobile":"","arrowBorderTopRightRadiusMobile":"","arrowBorderBottomLeftRadiusMobile":"","arrowBorderBottomRightRadiusMobile":"","arrowBorderRadiusUnitMobile":"px","arrowBorderStyle":"none","arrowBorderColor":"","arrowBorderHColor":"","btnBorderTopWidth":"","btnBorderLeftWidth":"","btnBorderRightWidth":"","btnBorderBottomWidth":"","btnBorderTopLeftRadius":"","btnBorderTopRightRadius":"","btnBorderBottomLeftRadius":"","btnBorderBottomRightRadius":"","btnBorderRadiusUnit":"px","btnBorderTopWidthTablet":"","btnBorderLeftWidthTablet":"","btnBorderRightWidthTablet":"","btnBorderBottomWidthTablet":"","btnBorderTopLeftRadiusTablet":"","btnBorderTopRightRadiusTablet":"","btnBorderBottomLeftRadiusTablet":"","btnBorderBottomRightRadiusTablet":"","btnBorderRadiusUnitTablet":"px","btnBorderTopWidthMobile":"","btnBorderLeftWidthMobile":"","btnBorderRightWidthMobile":"","btnBorderBottomWidthMobile":"","btnBorderTopLeftRadiusMobile":"","btnBorderTopRightRadiusMobile":"","btnBorderBottomLeftRadiusMobile":"","btnBorderBottomRightRadiusMobile":"","btnBorderRadiusUnitMobile":"px","btnBorderStyle":"","btnBorderColor":"","btnBorderHColor":"","imageBorderTopWidth":"","imageBorderLeftWidth":"","imageBorderRightWidth":"","imageBorderBottomWidth":"","imageBorderTopLeftRadius":"","imageBorderTopRightRadius":"","imageBorderBottomLeftRadius":"","imageBorderBottomRightRadius":"","imageBorderRadiusUnit":"px","imageBorderTopWidthTablet":"","imageBorderLeftWidthTablet":"","imageBorderRightWidthTablet":"","imageBorderBottomWidthTablet":"","imageBorderTopLeftRadiusTablet":"","imageBorderTopRightRadiusTablet":"","imageBorderBottomLeftRadiusTablet":"","imageBorderBottomRightRadiusTablet":"","imageBorderRadiusUnitTablet":"px","imageBorderTopWidthMobile":"","imageBorderLeftWidthMobile":"","imageBorderRightWidthMobile":"","imageBorderBottomWidthMobile":"","imageBorderTopLeftRadiusMobile":"","imageBorderTopRightRadiusMobile":"","imageBorderBottomLeftRadiusMobile":"","imageBorderBottomRightRadiusMobile":"","imageBorderRadiusUnitMobile":"px","imageBorderStyle":"","imageBorderColor":"","imageBorderHColor":"","mainTitleBorderTopWidth":2,"mainTitleBorderLeftWidth":0,"mainTitleBorderRightWidth":0,"mainTitleBorderBottomWidth":2,"mainTitleBorderTopLeftRadius":"","mainTitleBorderTopRightRadius":"","mainTitleBorderBottomLeftRadius":"","mainTitleBorderBottomRightRadius":"","mainTitleBorderRadiusUnit":"px","mainTitleBorderTopWidthTablet":"","mainTitleBorderLeftWidthTablet":"","mainTitleBorderRightWidthTablet":"","mainTitleBorderBottomWidthTablet":"","mainTitleBorderTopLeftRadiusTablet":"","mainTitleBorderTopRightRadiusTablet":"","mainTitleBorderBottomLeftRadiusTablet":"","mainTitleBorderBottomRightRadiusTablet":"","mainTitleBorderRadiusUnitTablet":"px","mainTitleBorderTopWidthMobile":"","mainTitleBorderLeftWidthMobile":"","mainTitleBorderRightWidthMobile":"","mainTitleBorderBottomWidthMobile":"","mainTitleBorderTopLeftRadiusMobile":"","mainTitleBorderTopRightRadiusMobile":"","mainTitleBorderBottomLeftRadiusMobile":"","mainTitleBorderBottomRightRadiusMobile":"","mainTitleBorderRadiusUnitMobile":"px","mainTitleBorderStyle":"","mainTitleBorderColor":"","mainTitleBorderHColor":""}, '.uagb-block-d9e298ac', {"lazy":true,"slidesPerView":1,"navigation":{"nextEl":".uagb-block-d9e298ac+.spectra-image-gallery__control-lightbox .swiper-button-next","prevEl":".uagb-block-d9e298ac+.spectra-image-gallery__control-lightbox .swiper-button-prev"},"keyboard":{"enabled":true}}, [] );
								UAGBImageGalleryMasonry.initByOffset( element, isotope );
							}, 500 );
						}
					}
				});
							window.addEventListener( 'DOMContentLoaded', () => {
					const blockScope = document.querySelector( '.uagb-block-d9e298ac' );
					if ( ! blockScope ) {
						return;
					}

					let lightboxSwiper = null;
					let thumbnailSwiper = null;

										let lightboxSettings = {"lazy":true,"slidesPerView":1,"navigation":{"nextEl":".uagb-block-d9e298ac+.spectra-image-gallery__control-lightbox .swiper-button-next","prevEl":".uagb-block-d9e298ac+.spectra-image-gallery__control-lightbox .swiper-button-prev"},"keyboard":{"enabled":true}};
															lightboxSwiper = new Swiper( ".uagb-block-d9e298ac+.spectra-image-gallery__control-lightbox .spectra-image-gallery__control-lightbox--main",
						{"lazy":true,"slidesPerView":1,"navigation":{"nextEl":".uagb-block-d9e298ac+.spectra-image-gallery__control-lightbox .swiper-button-next","prevEl":".uagb-block-d9e298ac+.spectra-image-gallery__control-lightbox .swiper-button-prev"},"keyboard":{"enabled":true}}					);
					loadLightBoxImages( blockScope, lightboxSwiper, null, {"block_id":"d9e298ac","classMigrate":true,"readyToRender":true,"tileSize":149,"mediaGallery":[{"sizes":{"thumbnail":{"height":150,"width":150,"url":"http:\/\/localhost\/wordpress\/wp-content\/uploads\/2024\/06\/IMG_5703-150x150.jpg","orientation":"landscape"},"medium":{"height":300,"width":300,"url":"http:\/\/localhost\/wordpress\/wp-content\/uploads\/2024\/06\/IMG_5703-300x300.jpg","orientation":"landscape"},"large":{"height":1024,"width":1024,"url":"http:\/\/localhost\/wordpress\/wp-content\/uploads\/2024\/06\/IMG_5703-1024x1024.jpg","orientation":"landscape"},"vp_sm":{"height":500,"width":500,"url":"http:\/\/localhost\/wordpress\/wp-content\/uploads\/2024\/06\/IMG_5703-500x500.jpg","orientation":"landscape"},"vp_md":{"height":800,"width":800,"url":"http:\/\/localhost\/wordpress\/wp-content\/uploads\/2024\/06\/IMG_5703-800x800.jpg","orientation":"landscape"},"vp_lg":{"height":1280,"width":1280,"url":"http:\/\/localhost\/wordpress\/wp-content\/uploads\/2024\/06\/IMG_5703-1280x1280.jpg","orientation":"landscape"},"vp_xl":{"height":1920,"width":1920,"url":"http:\/\/localhost\/wordpress\/wp-content\/uploads\/2024\/06\/IMG_5703-1920x1920.jpg","orientation":"landscape"},"full":{"url":"http:\/\/localhost\/wordpress\/wp-content\/uploads\/2024\/06\/IMG_5703.jpg","height":2000,"width":2000,"orientation":"landscape"}},"mime":"image\/jpeg","type":"image","subtype":"jpeg","id":1091,"url":"http:\/\/localhost\/wordpress\/wp-content\/uploads\/2024\/06\/IMG_5703.jpg","alt":"","link":"https:\/\/localhost\/wordpress\/img_5703\/","caption":""},{"sizes":{"thumbnail":{"height":150,"width":150,"url":"http:\/\/localhost\/wordpress\/wp-content\/uploads\/2024\/06\/IMG_5723-150x150.jpg","orientation":"landscape"},"medium":{"height":300,"width":300,"url":"http:\/\/localhost\/wordpress\/wp-content\/uploads\/2024\/06\/IMG_5723-300x300.jpg","orientation":"landscape"},"large":{"height":1024,"width":1024,"url":"http:\/\/localhost\/wordpress\/wp-content\/uploads\/2024\/06\/IMG_5723-1024x1024.jpg","orientation":"landscape"},"vp_sm":{"height":500,"width":500,"url":"http:\/\/localhost\/wordpress\/wp-content\/uploads\/2024\/06\/IMG_5723-500x500.jpg","orientation":"landscape"},"vp_md":{"height":800,"width":800,"url":"http:\/\/localhost\/wordpress\/wp-content\/uploads\/2024\/06\/IMG_5723-800x800.jpg","orientation":"landscape"},"vp_lg":{"height":1280,"width":1280,"url":"http:\/\/localhost\/wordpress\/wp-content\/uploads\/2024\/06\/IMG_5723-1280x1280.jpg","orientation":"landscape"},"vp_xl":{"height":1920,"width":1920,"url":"http:\/\/localhost\/wordpress\/wp-content\/uploads\/2024\/06\/IMG_5723-1920x1920.jpg","orientation":"landscape"},"full":{"url":"http:\/\/localhost\/wordpress\/wp-content\/uploads\/2024\/06\/IMG_5723.jpg","height":2000,"width":2000,"orientation":"landscape"}},"mime":"image\/jpeg","type":"image","subtype":"jpeg","id":1092,"url":"http:\/\/localhost\/wordpress\/wp-content\/uploads\/2024\/06\/IMG_5723.jpg","alt":"","link":"https:\/\/localhost\/wordpress\/img_5723\/","caption":""},{"sizes":{"thumbnail":{"height":150,"width":150,"url":"http:\/\/localhost\/wordpress\/wp-content\/uploads\/2024\/06\/IMG_5701-150x150.jpg","orientation":"landscape"},"medium":{"height":300,"width":300,"url":"http:\/\/localhost\/wordpress\/wp-content\/uploads\/2024\/06\/IMG_5701-300x300.jpg","orientation":"landscape"},"large":{"height":1024,"width":1024,"url":"http:\/\/localhost\/wordpress\/wp-content\/uploads\/2024\/06\/IMG_5701-1024x1024.jpg","orientation":"landscape"},"vp_sm":{"height":500,"width":500,"url":"http:\/\/localhost\/wordpress\/wp-content\/uploads\/2024\/06\/IMG_5701-500x500.jpg","orientation":"landscape"},"vp_md":{"height":800,"width":800,"url":"http:\/\/localhost\/wordpress\/wp-content\/uploads\/2024\/06\/IMG_5701-800x800.jpg","orientation":"landscape"},"vp_lg":{"height":1280,"width":1280,"url":"http:\/\/localhost\/wordpress\/wp-content\/uploads\/2024\/06\/IMG_5701-1280x1280.jpg","orientation":"landscape"},"vp_xl":{"height":1920,"width":1920,"url":"http:\/\/localhost\/wordpress\/wp-content\/uploads\/2024\/06\/IMG_5701-1920x1920.jpg","orientation":"landscape"},"full":{"url":"http:\/\/localhost\/wordpress\/wp-content\/uploads\/2024\/06\/IMG_5701.jpg","height":2000,"width":2000,"orientation":"landscape"}},"mime":"image\/jpeg","type":"image","subtype":"jpeg","id":1090,"url":"http:\/\/localhost\/wordpress\/wp-content\/uploads\/2024\/06\/IMG_5701.jpg","alt":"","link":"https:\/\/localhost\/wordpress\/img_5701\/","caption":""},{"sizes":{"thumbnail":{"height":150,"width":150,"url":"http:\/\/localhost\/wordpress\/wp-content\/uploads\/2024\/06\/IMG_5686-150x150.jpg","orientation":"landscape"},"medium":{"height":300,"width":300,"url":"http:\/\/localhost\/wordpress\/wp-content\/uploads\/2024\/06\/IMG_5686-300x300.jpg","orientation":"landscape"},"large":{"height":1024,"width":1024,"url":"http:\/\/localhost\/wordpress\/wp-content\/uploads\/2024\/06\/IMG_5686-1024x1024.jpg","orientation":"landscape"},"vp_sm":{"height":500,"width":500,"url":"http:\/\/localhost\/wordpress\/wp-content\/uploads\/2024\/06\/IMG_5686-500x500.jpg","orientation":"landscape"},"vp_md":{"height":800,"width":800,"url":"http:\/\/localhost\/wordpress\/wp-content\/uploads\/2024\/06\/IMG_5686-800x800.jpg","orientation":"landscape"},"vp_lg":{"height":1280,"width":1280,"url":"http:\/\/localhost\/wordpress\/wp-content\/uploads\/2024\/06\/IMG_5686-1280x1280.jpg","orientation":"landscape"},"vp_xl":{"height":1920,"width":1920,"url":"http:\/\/localhost\/wordpress\/wp-content\/uploads\/2024\/06\/IMG_5686-1920x1920.jpg","orientation":"landscape"},"full":{"url":"http:\/\/localhost\/wordpress\/wp-content\/uploads\/2024\/06\/IMG_5686.jpg","height":2000,"width":2000,"orientation":"landscape"}},"mime":"image\/jpeg","type":"image","subtype":"jpeg","id":1089,"url":"http:\/\/localhost\/wordpress\/wp-content\/uploads\/2024\/06\/IMG_5686.jpg","alt":"","link":"https:\/\/localhost\/wordpress\/img_5686\/","caption":""},{"sizes":{"thumbnail":{"height":150,"width":150,"url":"http:\/\/localhost\/wordpress\/wp-content\/uploads\/2024\/06\/IMG_5726-150x150.jpg","orientation":"landscape"},"medium":{"height":300,"width":300,"url":"http:\/\/localhost\/wordpress\/wp-content\/uploads\/2024\/06\/IMG_5726-300x300.jpg","orientation":"landscape"},"large":{"height":1024,"width":1024,"url":"http:\/\/localhost\/wordpress\/wp-content\/uploads\/2024\/06\/IMG_5726-1024x1024.jpg","orientation":"landscape"},"vp_sm":{"height":500,"width":500,"url":"http:\/\/localhost\/wordpress\/wp-content\/uploads\/2024\/06\/IMG_5726-500x500.jpg","orientation":"landscape"},"vp_md":{"height":800,"width":800,"url":"http:\/\/localhost\/wordpress\/wp-content\/uploads\/2024\/06\/IMG_5726-800x800.jpg","orientation":"landscape"},"vp_lg":{"height":1280,"width":1280,"url":"http:\/\/localhost\/wordpress\/wp-content\/uploads\/2024\/06\/IMG_5726-1280x1280.jpg","orientation":"landscape"},"vp_xl":{"height":1920,"width":1920,"url":"http:\/\/localhost\/wordpress\/wp-content\/uploads\/2024\/06\/IMG_5726-1920x1920.jpg","orientation":"landscape"},"full":{"url":"http:\/\/localhost\/wordpress\/wp-content\/uploads\/2024\/06\/IMG_5726.jpg","height":2000,"width":2000,"orientation":"landscape"}},"mime":"image\/jpeg","type":"image","subtype":"jpeg","id":1093,"url":"http:\/\/localhost\/wordpress\/wp-content\/uploads\/2024\/06\/IMG_5726.jpg","alt":"","link":"https:\/\/localhost\/wordpress\/img_5726\/","caption":""},{"sizes":{"thumbnail":{"height":150,"width":150,"url":"http:\/\/localhost\/wordpress\/wp-content\/uploads\/2024\/06\/Lecollage-150x150.webp","orientation":"landscape"},"medium":{"height":300,"width":300,"url":"http:\/\/localhost\/wordpress\/wp-content\/uploads\/2024\/06\/Lecollage-300x300.webp","orientation":"landscape"},"large":{"height":1024,"width":1024,"url":"http:\/\/localhost\/wordpress\/wp-content\/uploads\/2024\/06\/Lecollage-1024x1024.webp","orientation":"landscape"},"vp_sm":{"height":500,"width":500,"url":"http:\/\/localhost\/wordpress\/wp-content\/uploads\/2024\/06\/Lecollage-500x500.webp","orientation":"landscape"},"vp_md":{"height":800,"width":800,"url":"http:\/\/localhost\/wordpress\/wp-content\/uploads\/2024\/06\/Lecollage-800x800.webp","orientation":"landscape"},"vp_lg":{"height":1280,"width":1280,"url":"http:\/\/localhost\/wordpress\/wp-content\/uploads\/2024\/06\/Lecollage-1280x1280.webp","orientation":"landscape"},"vp_xl":{"height":1920,"width":1920,"url":"http:\/\/localhost\/wordpress\/wp-content\/uploads\/2024\/06\/Lecollage-1920x1920.webp","orientation":"landscape"},"full":{"url":"http:\/\/localhost\/wordpress\/wp-content\/uploads\/2024\/06\/Lecollage-scaled.webp","height":2560,"width":2560,"orientation":"landscape"}},"mime":"image\/webp","type":"image","subtype":"webp","id":1076,"url":"http:\/\/localhost\/wordpress\/wp-content\/uploads\/2024\/06\/Lecollage-scaled.webp","alt":"","link":"https:\/\/localhost\/wordpress\/lecollage\/","caption":""}],"mediaIDs":[1091,1092,1090,1089,1093,1076],"feedLayout":"masonry","imageDisplayCaption":false,"galleryImageSize":"vp_xl","imageClickEvent":"lightbox","columnsDesk":2,"columnsTab":4,"columnsMob":1,"gridPages":3,"paginateUseLoader":false,"paginateLimit":12,"focusList":[],"focusListObject":[],"galleryImageSizeTablet":"large","galleryImageSizeMobile":"medium","disableLazyLoad":false,"lightboxDisplayCaptions":false,"lightboxThumbnails":false,"lightboxDisplayCount":false,"lightboxCloseIcon":"xmark","lightboxCaptionHeight":50,"lightboxCaptionHeightTablet":"","lightboxCaptionHeightMobile":"","lightboxIconSize":24,"lightboxIconSizeTablet":"","lightboxIconSizeMobile":"","captionVisibility":"hover","captionDisplayType":"overlay","imageCaptionAlignment":"center center","imageCaptionAlignment01":"center","imageCaptionAlignment02":"center","imageDefaultCaption":"No Caption","captionPaddingTop":8,"captionPaddingRight":8,"captionPaddingBottom":8,"captionPaddingLeft":8,"captionPaddingTopTab":8,"captionPaddingRightTab":8,"captionPaddingBottomTab":8,"captionPaddingLeftTab":8,"captionPaddingTopMob":8,"captionPaddingRightMob":8,"captionPaddingBottomMob":8,"captionPaddingLeftMob":8,"captionPaddingUnit":"px","captionPaddingUnitTab":"px","captionPaddingUnitMob":"px","captionPaddingUnitLink":true,"captionGap":0,"captionGapUnit":"px","gridImageGap":8,"gridImageGapTab":"","gridImageGapMob":"","gridImageGapUnit":"px","gridImageGapUnitTab":"px","gridImageGapUnitMob":"px","feedMarginTop":"","feedMarginRight":"","feedMarginBottom":"","feedMarginLeft":"","feedMarginTopTab":"","feedMarginRightTab":"","feedMarginBottomTab":"","feedMarginLeftTab":"","feedMarginTopMob":"","feedMarginRightMob":"","feedMarginBottomMob":"","feedMarginLeftMob":"","feedMarginUnit":"px","feedMarginUnitTab":"px","feedMarginUnitMob":"px","feedMarginUnitLink":true,"carouselStartAt":0,"carouselSquares":false,"carouselLoop":true,"carouselAutoplay":true,"carouselAutoplaySpeed":2000,"carouselPauseOnHover":true,"carouselTransitionSpeed":500,"gridPageNumber":1,"feedPagination":false,"paginateUseArrows":true,"paginateUseDots":true,"paginateButtonAlign":"center","paginateButtonText":"Load More Images","paginateButtonPaddingTop":"","paginateButtonPaddingRight":"","paginateButtonPaddingBottom":"","paginateButtonPaddingLeft":"","paginateButtonPaddingTopTab":"","paginateButtonPaddingRightTab":"","paginateButtonPaddingBottomTab":"","paginateButtonPaddingLeftTab":"","paginateButtonPaddingTopMob":"","paginateButtonPaddingRightMob":"","paginateButtonPaddingBottomMob":"","paginateButtonPaddingLeftMob":"","paginateButtonPaddingUnit":"px","paginateButtonPaddingUnitTab":"px","paginateButtonPaddingUnitMob":"px","paginateButtonPaddingUnitLink":true,"imageEnableZoom":true,"imageZoomType":"zoom-in","captionBackgroundEnableBlur":false,"captionBackgroundBlurAmount":0,"captionBackgroundBlurAmountHover":5,"lightboxEdgeDistance":10,"lightboxEdgeDistanceTablet":"","lightboxEdgeDistanceMobile":"","lightboxBackgroundEnableBlur":true,"lightboxBackgroundBlurAmount":5,"lightboxBackgroundColor":"rgba(0,0,0,0.75)","lightboxIconColor":"rgba(255,255,255,1)","lightboxCaptionColor":"rgba(255,255,255,1)","lightboxCaptionBackgroundColor":"rgba(0,0,0,1)","captionLoadGoogleFonts":false,"captionFontFamily":"Default","captionFontWeight":"","captionFontStyle":"normal","captionTransform":"","captionDecoration":"none","captionFontSizeType":"px","captionFontSize":"","captionFontSizeTab":"","captionFontSizeMob":"","captionLineHeightType":"em","captionLineHeight":"","captionLineHeightTab":"","captionLineHeightMob":"","loadMoreLoadGoogleFonts":false,"loadMoreFontFamily":"Default","loadMoreFontWeight":"","loadMoreFontStyle":"normal","loadMoreTransform":"","loadMoreDecoration":"none","loadMoreFontSizeType":"px","loadMoreFontSize":"","loadMoreFontSizeTab":"","loadMoreFontSizeMob":"","loadMoreLineHeightType":"em","loadMoreLineHeight":"","loadMoreLineHeightTab":"","loadMoreLineHeightMob":"","lightboxLoadGoogleFonts":false,"lightboxFontFamily":"Default","lightboxFontWeight":"","lightboxFontStyle":"normal","lightboxTransform":"","lightboxDecoration":"none","lightboxFontSizeType":"px","lightboxFontSize":"","lightboxFontSizeTab":"","lightboxFontSizeMob":"","lightboxLineHeightType":"em","lightboxLineHeight":"","lightboxLineHeightTab":"","lightboxLineHeightMob":"","captionBackgroundEffect":"none","captionBackgroundEffectHover":"none","captionBackgroundEffectAmount":100,"captionBackgroundEffectAmountHover":0,"captionColor":"rgba(255,255,255,1)","captionColorHover":"rgba(255,255,255,1)","captionBackgroundColor":"rgba(0,0,0,0.75)","captionBackgroundColorHover":"rgba(0,0,0,0.75)","overlayColor":"rgba(0,0,0,0)","overlayColorHover":"rgba(0,0,0,0)","captionSeparateColors":false,"paginateArrowDistance":-24,"paginateArrowDistanceUnit":"px","paginateArrowSize":24,"paginateDotDistance":8,"paginateDotDistanceUnit":"px","paginateLoaderSize":18,"paginateButtonTextColor":"","paginateButtonTextColorHover":"","paginateColor":"","paginateColorHover":"","imageBoxShadowColor":"","imageBoxShadowHOffset":0,"imageBoxShadowVOffset":0,"imageBoxShadowBlur":"","imageBoxShadowSpread":"","imageBoxShadowPosition":"outset","imageBoxShadowColorHover":"","imageBoxShadowHOffsetHover":0,"imageBoxShadowVOffsetHover":0,"imageBoxShadowBlurHover":"","imageBoxShadowSpreadHover":"","imageBoxShadowPositionHover":"outset","arrowBorderTopWidth":4,"arrowBorderLeftWidth":4,"arrowBorderRightWidth":4,"arrowBorderBottomWidth":4,"arrowBorderTopLeftRadius":50,"arrowBorderTopRightRadius":50,"arrowBorderBottomLeftRadius":50,"arrowBorderBottomRightRadius":50,"arrowBorderRadiusUnit":"px","arrowBorderTopWidthTablet":"","arrowBorderLeftWidthTablet":"","arrowBorderRightWidthTablet":"","arrowBorderBottomWidthTablet":"","arrowBorderTopLeftRadiusTablet":"","arrowBorderTopRightRadiusTablet":"","arrowBorderBottomLeftRadiusTablet":"","arrowBorderBottomRightRadiusTablet":"","arrowBorderRadiusUnitTablet":"px","arrowBorderTopWidthMobile":"","arrowBorderLeftWidthMobile":"","arrowBorderRightWidthMobile":"","arrowBorderBottomWidthMobile":"","arrowBorderTopLeftRadiusMobile":"","arrowBorderTopRightRadiusMobile":"","arrowBorderBottomLeftRadiusMobile":"","arrowBorderBottomRightRadiusMobile":"","arrowBorderRadiusUnitMobile":"px","arrowBorderStyle":"none","arrowBorderColor":"","arrowBorderHColor":"","btnBorderTopWidth":"","btnBorderLeftWidth":"","btnBorderRightWidth":"","btnBorderBottomWidth":"","btnBorderTopLeftRadius":"","btnBorderTopRightRadius":"","btnBorderBottomLeftRadius":"","btnBorderBottomRightRadius":"","btnBorderRadiusUnit":"px","btnBorderTopWidthTablet":"","btnBorderLeftWidthTablet":"","btnBorderRightWidthTablet":"","btnBorderBottomWidthTablet":"","btnBorderTopLeftRadiusTablet":"","btnBorderTopRightRadiusTablet":"","btnBorderBottomLeftRadiusTablet":"","btnBorderBottomRightRadiusTablet":"","btnBorderRadiusUnitTablet":"px","btnBorderTopWidthMobile":"","btnBorderLeftWidthMobile":"","btnBorderRightWidthMobile":"","btnBorderBottomWidthMobile":"","btnBorderTopLeftRadiusMobile":"","btnBorderTopRightRadiusMobile":"","btnBorderBottomLeftRadiusMobile":"","btnBorderBottomRightRadiusMobile":"","btnBorderRadiusUnitMobile":"px","btnBorderStyle":"","btnBorderColor":"","btnBorderHColor":"","imageBorderTopWidth":"","imageBorderLeftWidth":"","imageBorderRightWidth":"","imageBorderBottomWidth":"","imageBorderTopLeftRadius":"","imageBorderTopRightRadius":"","imageBorderBottomLeftRadius":"","imageBorderBottomRightRadius":"","imageBorderRadiusUnit":"px","imageBorderTopWidthTablet":"","imageBorderLeftWidthTablet":"","imageBorderRightWidthTablet":"","imageBorderBottomWidthTablet":"","imageBorderTopLeftRadiusTablet":"","imageBorderTopRightRadiusTablet":"","imageBorderBottomLeftRadiusTablet":"","imageBorderBottomRightRadiusTablet":"","imageBorderRadiusUnitTablet":"px","imageBorderTopWidthMobile":"","imageBorderLeftWidthMobile":"","imageBorderRightWidthMobile":"","imageBorderBottomWidthMobile":"","imageBorderTopLeftRadiusMobile":"","imageBorderTopRightRadiusMobile":"","imageBorderBottomLeftRadiusMobile":"","imageBorderBottomRightRadiusMobile":"","imageBorderRadiusUnitMobile":"px","imageBorderStyle":"","imageBorderColor":"","imageBorderHColor":"","mainTitleBorderTopWidth":2,"mainTitleBorderLeftWidth":0,"mainTitleBorderRightWidth":0,"mainTitleBorderBottomWidth":2,"mainTitleBorderTopLeftRadius":"","mainTitleBorderTopRightRadius":"","mainTitleBorderBottomLeftRadius":"","mainTitleBorderBottomRightRadius":"","mainTitleBorderRadiusUnit":"px","mainTitleBorderTopWidthTablet":"","mainTitleBorderLeftWidthTablet":"","mainTitleBorderRightWidthTablet":"","mainTitleBorderBottomWidthTablet":"","mainTitleBorderTopLeftRadiusTablet":"","mainTitleBorderTopRightRadiusTablet":"","mainTitleBorderBottomLeftRadiusTablet":"","mainTitleBorderBottomRightRadiusTablet":"","mainTitleBorderRadiusUnitTablet":"px","mainTitleBorderTopWidthMobile":"","mainTitleBorderLeftWidthMobile":"","mainTitleBorderRightWidthMobile":"","mainTitleBorderBottomWidthMobile":"","mainTitleBorderTopLeftRadiusMobile":"","mainTitleBorderTopRightRadiusMobile":"","mainTitleBorderBottomLeftRadiusMobile":"","mainTitleBorderBottomRightRadiusMobile":"","mainTitleBorderRadiusUnitMobile":"px","mainTitleBorderStyle":"","mainTitleBorderColor":"","mainTitleBorderHColor":""}, thumbnailSwiper );
									} );
			 });