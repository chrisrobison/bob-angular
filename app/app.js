'use strict';

var bobApp=angular.module("bobApp",  [
	'threeModule',
	'd3Module',
	'countryModule',
	'bobApp.svg',
	'bobApp.context',
	'bobApp.navigation',
	'bobApp.main',
	'bobApp.footer',
	'bobApp.leaflet',
	'bobApp.youtube',
	'bobApp.youtube.search',
	'ngRoute', 
	'localCRUD',
	'ui.router'
])
	.run(function ($rootScope, $state, $stateParams, $window, threeCSSService, YouTubeService, YouTubeSearchService, $location) {
		$rootScope.googleReady=false;
		$rootScope.sectionTitle="Testing";
		$rootScope.$state = $state;
		$rootScope.$stateParams = $stateParams;
		$rootScope.hasOpened=true;
		$rootScope.currentData=null;
		$rootScope.interstitialized={done:false};
		var redraw=function () {
			console.log('redraw');
			resize();
		};
		var resize=function (evt) {
			$window.changeSize(evt);
			try{
				$state.reload();
				console.log("$state.reload()");
			}catch(oops){}
		};
		$window.googleApiClientReady = function($rootScope) {
			$rootScope.googleReady=true;
			console.log("ggole googleReady");
		}
		$window.addEventListener('orientationchange', redraw, false);
		$window.addEventListener('resize', resize, false);
		$window.addEventListener('online', function(e) {
			$rootScope.$broadcast("onlineStatusUpdate");
		}, false);
		$window.addEventListener('offline',function(e) {
			$rootScope.$broadcast("onlineStatusUpdate");
		}, false);

 		$rootScope.$on('navigatingToSection',function(event, toWhich){
			$state.go(toWhich);
 		});
 		$rootScope.$on("youtube_search_update",function(event, data, scope){
 			console.log("youtube_search_update" + event + ":" + data)
			YouTubeSearchService.search_update(data, scope);
 		});
		$rootScope.$on('$stateChangeStart', 
		function(event, toState, toParams, fromState, fromParams){ 
			switch(toState.name){
				case "video":
					var q=$location.absUrl().indexOf("?");
					if(q!=-1){
						var cutString=$location.absUrl().substr(q),
						_start=cutString.indexOf("=")+1,_end=cutString.indexOf("#");
						console.log("going to cutString.substring(_start,_end)=" + cutString.substring(_start,_end));
						$window.location.href = $location.absUrl().substring(0,q) + "#/videofeed/" + cutString.substring(_start,_end) + "/0";
					}
					break;
				case "map":
					console.log("statechange.mapy=");
					var q=$location.absUrl().indexOf("?");
					if(q!=-1){
						var searchString="", searchObj=$window.location.search.substring(1).split("&");
						for(var s=0;s<searchObj.length;s++){
							if(
								searchObj[s].split("=")[1] &&
								searchObj[s].split("=")[1].length>0
								) {
								searchString+= 
									(searchObj[s].split("=")[0] == "geo-location" || searchObj[s].split("=")[0] == "latlong") ?
										"/"+ searchObj[s].split("=")[0] + "/" + searchObj[s].split("=")[1] : 
										"/" + searchObj[s].split("=")[1];

							// searchObj[s];
							}
						}
						$window.searchObj=searchObj;
						console.log("searchObj,=" + searchObj);				
					//	$state.go("videofeed",{videofeed:cutString.substring(_start,_end)})
						$window.location.href = $location.absUrl().substring(0,q) + "#/mapfeed" + searchString; // .substring(1);


						// var i="this and that and those";do{i=i.replace("h","k")}while(i.indexOf("h")!=-1);console.log(i);

					}
					break;
				case "mapfeed.latlong":
					if(toParams.latlong && toParams.latlong.length>0){
						console.log("toParams.latlong == " + toParams.latlong);
						rootScope.lat=36;
						rootScope.lon=126;
					}else{
						console.log("NO.latlong == ");
						rootScope.lat=46;
						rootScope.lon=126;
					}
					break;
				case "mapfeed":
					var prefix="http://nominatim.openstreetmap.org/search?format=json&limit=5";//  + $stateParams.details;
					console.log("mapfeed == " + prefix);
					break;
				case "home":
					break;
				case "svg":
					break;
			}
			$window['stated']=toState;
			console.log("toState=" + toState);
		})
		$rootScope.$on('$stateChangeSuccess', 
		function(event, toState, toParams, fromState, fromParams){
			console.log("CURRENT STEATE IS " + toState.name);
			switch(toState.name){
				case "video":
					break;
				case "videofeed.videofeed.index":
			//	console.log("toParams.idx=" + toParams.idx)
					YouTubeSearchService.currentVideo=toParams.idx;
					YouTubeService.startMedia(YouTubeSearchService.videos[YouTubeSearchService.currentVideo].id,YouTubeService);

					/*
				setCurrentVideo:function(toWhat, scope){
					console.log("setCurrentVideo:function("+toWhat +"; " + scope+")")
					_service.currentVideo=toWhat;
					threeCSSService.init('youtubeSearch', scope, "content");
					_service.render(scope);
					YouTubeService.activePlayer={height: scope._height,width: scope._width};
					var service=YouTubeService;
					YouTubeService.startMedia(_service.videos[_service.currentVideo].id,YouTubeService);
				},

					*/

					console.log("P{AST YouTubeService")
					break;
				case "mapfeed":

				//	$("#sectionTitle").html("Leaflet Map");
					break;
				case "home":
				//	$("#sectionTitle").html("About this App");
					break;
				case "svg":
				//	$("#sectionTitle").html("SVG Example");
					break;
			}
			$window['stated']=toState;
			$window['toParams']=toParams;

			console.log("stateChangeS000uccess=" + toState);
		});
		resize();
	})
	.config(function($stateProvider, $urlRouterProvider) {
		$urlRouterProvider.otherwise('/');
		$stateProvider
		  .state('home', {
			url: '/',
			views:{
				"axis2":{
					templateUrl: 'components/main/main.html',				controller: 'ThreeCSSController'
				},
				"axis3":{
					templateUrl: 'components/context/context.html',			controller: 'ThreeContextController'
				},
				"pageBottom":{
					templateUrl: 'components/footer/footer.html',			controller: 'ThreeFooterController'
				}
			}
		  })
		  .state('video', {
			url: '/video',
			views:{
				"axis2":{
					templateUrl: 'components/youtube/youtube.html',			controller: 'ThreeYouTubeController'
				},
				"axis3":{
 					templateUrl: 'components/context/context.html',			controller: 'ThreeContextController'
				},
				"pageBottom":{
					templateUrl: 'components/footer/footer.html',			controller: 'ThreeFooterController'
				}
			}
		  })
		  .state('videofeed', {
			url: '/videofeed',
			views:{
				"axis2":{
					templateUrl: 'components/youtube/youtube_search.html',	controller: 'YouTubeSearchController'
				},
				"axis3":{
					templateUrl: 'components/context/context.html',			controller: 'ThreeContextController'
				},
				"pageBottom":{
					templateUrl: 'components/footer/footer.html',			controller: 'ThreeFooterController'
				}
			}
		  })
		  .state('videofeed.videofeed', {
			url: '/:videofeed',
			views:{
				"axis2":{
					templateUrl: 'components/youtube/youtube.html',			controller: 'ThreeYouTubeController'
				},
				"axis3":{
					templateUrl: 'components/context/context.html',			controller: 'ThreeContextController'
				},
				"pageBottom":{
					templateUrl: 'components/footer/footer.html',			controller: 'ThreeFooterController'
				}
			}
		  })
		  .state('videofeed.videofeed.index', {
			url: '/:idx',
			views:{
				"axis2":{
					templateUrl: 'components/youtube/youtube.html',			controller: 'ThreeYouTubeController'
				},
				"axis3":{
					templateUrl: 'components/context/context.html',			controller: 'ThreeContextController'
				},
				"pageBottom":{
					templateUrl: 'components/footer/footer.html',			controller: 'ThreeFooterController'
				}
			}
		  })
		  .state('video.youtubeid', {
			url: '/:youtubeid',
			views:{
				"axis2":{
					templateUrl: 'components/youtube/youtube.html',			controller: 'ThreeYouTubeController'
				},
				"axis3":{
 					templateUrl: 'components/context/context.html',			controller: 'ThreeContextController'
				},
				"pageBottom":{
					templateUrl: 'components/footer/footer.html',			controller: 'ThreeFooterController'
				}
			}
		  })
		  .state('map', {
			url: '/map',
			views:{
				"axis2":{
					templateUrl: 'components/leaflet/leaflet.html',			controller: 'ThreeLeafletController'
				},
				"axis3":{
 					templateUrl: 'components/context/context.html',			controller: 'ThreeContextController'
				},
				"pageBottom":{
					templateUrl: 'components/footer/footer.html',			controller: 'ThreeFooterController'
				}
			}
		  })
		  .state('mapfeed', {
			url: '/mapfeed',
			views:{
				"axis2":{
					templateUrl: 'components/leaflet/leaflet.html',			controller: 'ThreeLeafletController'
				},
				"axis3":{
					templateUrl: 'components/context/context.html',			controller: 'ThreeContextController'
				},
				"pageBottom":{
					templateUrl: 'components/footer/footer.html',			controller: 'ThreeFooterController'
				}
			}
		  })
		  .state('mapfeed.latlong', {
			url: '/latlong/:latlong',
			views:{
				"axis2":{
					templateUrl: 'components/leaflet/leaflet.html',			controller: 'ThreeLeafletController'
				},
				"axis3":{
					templateUrl: 'components/context/context.html',			controller: 'ThreeContextController'
				},
				"pageBottom":{
					templateUrl: 'components/footer/footer.html',			controller: 'ThreeFooterController'
				}
			}
		  })
		  .state('mapfeed.geolocation', {
			url: '/geo-location/:geoLocation',
			views:{
				"axis2":{
					templateUrl: 'components/leaflet/leaflet.html',			controller: 'ThreeLeafletController'
				},
				"axis3":{
					templateUrl: 'components/context/context.html',			controller: 'ThreeContextController'
				},
				"pageBottom":{
					templateUrl: 'components/footer/footer.html',			controller: 'ThreeFooterController'
				}
			}
		  })
		  .state('svg', {
			url: '/svg',
			views:{
				"axis2":{
					templateUrl: 'components/svg/svg.html',					controller: 'ThreeSVGController'
				},
				"axis3":{
 					templateUrl: 'components/context/context.html',			controller: 'ThreeContextController'
				},
				"pageBottom":{
					templateUrl: 'components/footer/footer.html',			controller: 'ThreeFooterController'
				}
			}
		  });
      return $stateProvider;
    });
