
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
});