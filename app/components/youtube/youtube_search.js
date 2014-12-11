'use strict';

angular.module('bobApp.youtube.search', ["bobApp", "bobApp.youtube"])
	.service("YouTubeSearchService",['$rootScope', "$http", "$httpBackend", "$q", "$state", "$window", "$timeout",
		 function($rootScope, $http, $httpBackend, $q, $state, $window, $timeout) {
			var _service={
				videos:[],
				init:function(_context){
					$window.updateFormFieldHints();
					this._context=_context;
				},
				search_update:function(data, scope){
					$window._data=data;
					scope.currentData=data;
					$timeout(function(){
						$("#sectionBody").html(scope.getContextHTML());
					}, 1000);
				},
				currentVideo:-1,
				getCurrentVideo:function(){
					return (this.currentVideo!=-1) ? this.getVideo(this.currentVideo) : null;
				},
				getVideo:function(which){
					var rtn=null;
					for(var v in this.videos){
						if(this.videos[v].id==which){
							rtn=this.videos[v];
							break;
						}
					}
					return rtn;
				},
				findVideos:function(searchTerm, scopeArg, callback){
					var timeoutLength=500, me=this, scope=scopeArg, beginString='https://query.yahooapis.com/v1/public/yql?format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&q=select%20*%20from%20youtube.search%20where%20query%3D"',
					endString='"&callback=';
					var fullString=beginString + searchTerm + endString;
					console.log("fullString=" + fullString);
					$http({method: 'GET', url: fullString}).
						success(function(data, status, headers, config) {
							if(data && data.query && data.query.results && data.query.results.video && data.query.results.video.length>0){
								scope.currentData=data;
								$rootScope.currentData=data;
								// console.log("inner.success" + searchTerm + ":" +  scopeArg + ":" + callback);
								try{
									me.videos=data.query.results.video;
									callback();
								}
								catch(oops){}
								$rootScope.$broadcast("youtube_search_update", data, scope);
					//		}else{
					//			$timeout(me.findVideos(searchTerm, scopeArg, callback),timeoutLength)
							}
						})
						.error(function(data, status, headers, config) {
							console.log("data=" + data);
							console.log("status=" + status);
							console.log("headers=" + headers);
							scope.currentData=null;
						});
				}
			}
			return _service;
		}
	])

	.controller('YouTubeSearchController', ["$window", "$scope", "$rootScope", "$state", "$stateParams", "YouTubeSearchService", "threeCSSService", "$timeout",
		function YouTubeSearchController($window, $scope, $rootScope, $state, $stateParams, YouTubeSearchService, threeCSSService, $timeout) {
 			$scope.currentData=null;
			$scope._service=YouTubeSearchService;
			$scope.name='YouTubeSearchController';
			$scope.activeAnimations=[];
			$scope.activeParams={};
			$scope._dir=-1;
			$scope.incr=.01;
			$scope.currentRotate=180;
			$scope.maxRotate=200;
			$scope.minRotate=160;
			$scope._position={
				x:($scope._width/4),
				y:0,
				z:-120
			};
			$scope._rotation={
				x:0,
				y:threeCSSService.radianCalculator(180),
				z:threeCSSService.radianCalculator(180)
			};
			$scope.animate=function(){
				$scope.currentRotate+=($scope._dir * $scope.incr);
				if($scope.currentRotate<$scope.maxRotate){
					if($scope.currentRotate<$scope.minRotate){
						$scope._dir=-$scope._dir;
						$scope.currentRotate+=$scope._dir;
					}
				}else{
					$scope._dir=-$scope._dir;
					$scope.currentRotate+=$scope._dir;
				}
				$scope.css3DObject.rotation.y=threeCSSService.radianCalculator($scope.currentRotate)
				$scope.css3DObject.position.z=$scope.css3DObject.position.z + ($scope._dir * $scope.incr * 10);
				$scope.renderer.render($scope.scene, $scope.camera);
			}
			$scope.findVideos=function(searchTerm, callback){
				console.log("controller.searchForFeed=" + searchTerm);
				YouTubeSearchService.findVideos(searchTerm, this, callback);
			
			}
			$scope.search_update=function(data){
				console.log("search_update")
				$rootScope._context=$("#"+ YouTubeSearchService._context).html(data);
			}
			$scope.getContextHTML=function(){
				return(this._context.html())
			}
			$scope.callback=function(){
				threeCSSService.init(
					this.elem,
					this._scope, 
					this._content);
				render();
				
			}
			$scope.setCallback=function(elem, _scope, _content){
				this.elem=elem;
				this._scope=_scope;
				this._content=_content;
			}
			$scope.control=this;
			$scope.init=function(elem, _content, _context){
				$scope.ytSearchText="Enter keyword";
				YouTubeSearchService.init(_context);
				this._context=$("#"+ _context);
				var me=this;
				$rootScope._context=this.getContextHTML();
				if(!this.isInited){
					this.isInited=true;
					this.setCallback(elem, $scope, _content)
					var callback=function(){
						threeCSSService.init(elem, $scope, _content);
					}
					console.log("scop.init.$stateParams=" + $stateParams)
					if($stateParams && $stateParams.video){
						this.findVideos($stateParams.video, callback);
					}else{
						callback();
					}
					console.log("PRE callback.created by findVideos");
				//	this.findVideos("Kings of Leon", callback);
			//	http://localhost/bobAngular/bestOfBreed/app/?v=Enter+keyword#/video $stateParams
				}
			}
			$scope.testKeys=function(item){
				console.log("testKeys.");
				for(var z in what){
					console.log("testKeys." + z + "=" + what[z]);
					// event.keyCode }}</p> event.altKey }}</p>
				}
					var callback=function(){
						console.log("callback.created by findVideos");
				 		render();
					};
					console.log("PRE callback.created by findVideos");
					callback();
					this.findVideos("Kings of Leon", callback);

			}
			$scope.getItemValue = function (item){
			      return("getItemState(" + item)
			};
			$scope.handshake=function(palm){
				console.log("handshake with palm=" + palm);
			}
			$scope.searchForFeed=function(feed, callback){
				console.log("controller.searchForFeed=" + feed);
				return $scope._service.searchForFeed(feed, callback, $scope);
				console.log("controller.afTER=");
			}
			var render=function(scopeArg) {
				$scope.renderer.render($scope.scene, $scope.camera);
				threeCSSService.render($scope);
			}
		}
	])
	.directive( "youTubSearchResults", function() {
		return function (scope, element, attrs) {
			var restrict="EA";
			element.bind("keydown keypress", function (event) {
				console.log("event.which=" + event.which);
			if(event.which === 13) {
				scope.$apply(function (){
					// 
					scope.$eval(attrs.youTubSearchResults);
					console.log("apply");
				});e
				event.preventDefault();
			}
			});
		}
	});

	/*
	.directive( "youTubeSearch", [function($scope) {
		$scope.name="youTubeSearch";
		var ytSearch={
			link:function(scope, elem, attrs, ctrl){
				scope.currentData=null
			},
			restrict: 'EA',
			replace:false,
	        transclude: true,
			scope: true,
			controller: "YouTubeSearchController",
			_scope: {
				"id":"@",
				currentData:null
			},
			template: "<div class='youtubeSearch'></div>"
		};
		return ytSearch;
	}]);



'use strict';

angular.module('bobApp.youtube', ["bobApp"])

	.service("YouTubeService",['$rootScope', "$http", "$q", "$state", "$window",
		 function($rootScope, $http, $q, $state, $window) {
			var _service={
				feedStart:"https://query.yahooapis.com/v1/public/yql?q=select%20*%20from%20youtube.search%20where%20query%3D%22",
				feedEnd:"%22&format=json&diagnostics=true&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys&callback=JSON_CALLBACK",
				query:["query","results","video"],
				returnObj:null,
				searchVideos:function(searchTerm){
					fields
				}
			}
			return _service;
		}
	])

	.controller('YouTubeCtrl', ["$rootScope", "$scope", 
		function YouTubeCtrl($rootScope, $scope) {
		// footer
		}
	]);


	.controller('ThreeYouTubeController', ["$window", "$scope", "$rootScope", "$state", "$stateParams", "threeCSSService", "$timeout",
		function ThreeYouTubeController($window, $scope, $rootScope, $state, $stateParams, threeCSSService, $timeout) {
			$scope.name='ThreeYouTubeController';
			$scope._position={
				z:20
			};
			$scope._rotation={
				x:0,
				y:threeCSSService.radianCalculator(200),
				z:threeCSSService.radianCalculator(180)
			};
			$scope.activeAnimations=["animate"];
			$scope.activeParams={};
			$scope.count=0;
			$scope.youtubeId="afBm0Dpfj_k";// "Pkaq0_qOx0E" "RF0HhrwIwp0"; 
			$scope.youtubeURL="";
			$scope._dir=-1;
			$scope.incr=.01;
			$scope.currentRotate=199;
			$scope.maxRotate=200;
			$scope.minRotate=160;

			$scope.init=function(elem, _content, _context){
				$scope.youtubeURL="http://www.youtube.com/embed/" + $scope.youtubeId + "?autoplay=1&html5=1&autostart=1&enablejsapi=1&";
				$rootScope._context=$("#"+ _context).html();
				if(!this.isInited){
					threeCSSService.init(elem, $scope, _content);
					this.isInited=true;
					render();
					try{
						$scope.startMedia($scope.youtubeId);
					}catch(oops){
						$timeout(function(){$scope.startMedia($scope.youtubeId);},1000)
					}
				}
			}
			$scope.startMedia=function(which){
				var me=$scope;
				$scope.player = new $window.YT.Player('ytplayer', {
			      height: $scope._height,
			      width: $scope._width,
			      videoId: which  + "?autoplay=1&html5=1&autostart=1&enablejsapi=1&",
                events: {
                        'onReady': me.onPlayerReady,
                        'onStateChange': me.onPlayerStateChange
                }});
			    /*
    function onYouTubePlayerReady(playerId) {
      ytplayer = document.getElementById("myytplayer");
    }

			    $scope.player.
			    * /
			}
			$scope.onPlayerReady=function(evt){
				console.log("onPlayerReady=" + evt);
			}
			$scope.onPlayerStateChange=function(evt){
				console.log("onPlayerStateChange=" + evt);
			}
			$scope.animate=function(){
				try{console.log("$scope.player.currentTime=" + $scope.player.currentTime);}catch(oops){console.log("no available test")}
				$scope.currentRotate+=($scope._dir * $scope.incr);
				if($scope.currentRotate<$scope.maxRotate){
					if($scope.currentRotate<$scope.minRotate){
						$scope._dir=-$scope._dir;
						$scope.currentRotate+=$scope._dir;
					}
				}else{
					$scope._dir=-$scope._dir;
					$scope.currentRotate+=$scope._dir;
				}
				$scope.css3DObject.rotation.y=threeCSSService.radianCalculator($scope.currentRotate)
				$scope.css3DObject.position.z=$scope.css3DObject.position.z + ($scope._dir * $scope.incr * 10);
				$scope.renderer.render($scope.scene, $scope.camera);
			}
			var render=function() {
				$scope.renderer.render($scope.scene, $scope.camera);
				threeCSSService.render($scope);
			}
		}
	])

	.directive( "threeYouTube", [function( ) {
		var threeObj = {
			restrict: 'EA',
			replace:false,
	        transclude: true,
			scope: true,
			controller: "ThreeYouTubeController",
			_scope: {
				"id":"@",
				"eventHandler": '&ngClick'
			},
			template: "<div class='threeYouTube'></div>"
		};
		return threeObj;
	}
	]);


handleClientLoad displayResult

				var vector = new THREE.Vector3();

				for ( var i = 0, l = objects.length; i < l; i ++ ) {

					var phi = Math.acos( -1 + ( 2 * i ) / l );
					var theta = Math.sqrt( l * Math.PI ) * phi;

					var object = new THREE.Object3D();

					object.position.x = 800 * Math.cos( theta ) * Math.sin( phi );
					object.position.y = 800 * Math.sin( theta ) * Math.sin( phi );
					object.position.z = 800 * Math.cos( phi );

					vector.copy( object.position ).multiplyScalar( 2 );

					object.lookAt( vector );

					targets.sphere.push( object );

				}


*/



