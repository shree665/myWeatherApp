angular.module('myWeatherApp.controllers', [])

.controller('CurrentCtrl', function($scope) {
      console.log("You are on current Controller");
    })

.controller('FavoriteCtrl', function($scope, Chats) {
        console.log("You are on favorite Controller");
        $scope.chats = Chats.all();
        $scope.remove = function(chat) {
        Chats.remove(chat);
        }
})

.controller('CityDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
});
