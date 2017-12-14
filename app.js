
var app = angular.module('myApp', []);
app.controller('myCtrl', function($scope, $http) {


    function eventFire(el, etype){
      if (el.fireEvent) {
        el.fireEvent('on' + etype);
      } else {
        var evObj = document.createEvent('Events');
        evObj.initEvent(etype, true, false);
        el.dispatchEvent(evObj);
      }
    }

    $scope.startChat = function() {
        eventFire(document.getElementById('bottr-snippet-dp'), 'click');
    }


/*

	// AI used to check NSFW photos
	const clarifaiApp = new Clarifai.App({
 		apiKey: 'a5de44cbbda24e4c9da2d050806d195f'
	});

	$scope.hideListUsersFound = false;
	$scope.searchName = null;
	$scope.listUsersFound = [];
	$scope.listNSFWPhotos = [];

	const urlInstagramSearch = 'https://www.instagram.com/web/search/topsearch/?context=blended&query=';

	// WARNING - the number 17888483320059182 may change in the future
	const urlUserMedia = 'https://www.instagram.com/graphql/query/?query_id=17888483320059182';

    $scope.searchPerson = function(searchName) {
    	$http.get(urlInstagramSearch + searchName).then(function(res) {
    		console.log(res.data);
    		$scope.listUsersFound = res.data.users;
    	}, function(error) {
    		console.log(error);
    	});
    }

    // Load all photos and videos
    $scope.loadUserMediaProfile = function(userId) {
    	$scope.listNSFWPhotos = true;
    	//TODO - show a loading

    	let query = '&variables={"id":"' + userId + '","first":20,"after":null}';
    	$http.get(urlUserMedia + query).then(function(res) {
    		//console.log(res.data);
    		var listNodeMedias = res.data.data.user.edge_owner_to_timeline_media.edges;

    		for(var i = 0; i < listNodeMedias.length; i++) {
    			var listResources = listNodeMedias[i].node.thumbnail_resources;
    			if(listResources[1]) {
    				var urlPhoto240x240 = listResources[1].src;
    				//Check the 240x240 photo with AI
    				checkNSFW(listResources[1].src);
    			}
    		}

       	}, function(error) {
    		console.log(error);
    	});
    }

    // Check if the photo is NOT SAFE FOR WORK, if it is them will be shown
    function checkNSFW(photoUrl) {
    	clarifaiApp.models.predict(Clarifai.NSFW_MODEL, photoUrl).then(
		  function(response) {
		    // do something with response
		    console.log(response);
		    let ntfwValue, sfwValue = null;

		    if(response.outputs[0].data.concepts[0].name === 'nsfw') {
		    	ntfwValue = response.outputs[0].data.concepts[0].value;
		    	sfwValue = response.outputs[0].data.concepts[1].value;
		    } else {
		    	ntfwValue = response.outputs[0].data.concepts[1].value;
		    	sfwValue = response.outputs[0].data.concepts[0].value;
		    }

		    if(ntfwValue >= sfwValue || (sfwValue - ntfwValue) <= 0.3) {
		    	$scope.listNSFWPhotos.push(photoUrl);
		    }
		  },
		  function(err) {
		    // there was an error
		    console.log(err);
		  }
		);
    }*/
});

/*
// You can also use the SDK by adding this script to your HTML:


// initialize with your api key. This will also work in your browser via http://browserify.org/

const app = new Clarifai.App({
 apiKey: 'a5de44cbbda24e4c9da2d050806d195f'
});

app.models.predict(Clarifai.NSFW_MODEL, "http://ancensored.com/files/images/vthumbs/b/3df1ac2bb0208445adfa3c48a6150361_full.jpg").then(
  function(response) {
    // do something with response
    console.log(response);
  },
  function(err) {
    // there was an error
    console.log(err);
  }
);*/