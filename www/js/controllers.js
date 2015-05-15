angular.module('myWeatherApp.controllers', [])
    .controller('CurrentCtrl', function($scope, $http, $ionicLoading, $timeout, $location) {
            console.log("You are on current Controller");


        $scope.groups = [{name: 'Currently'}, {name: 'Hourly'}, {name: 'Daily'}];
            var url = "https://api.forecast.io/forecast/0ef17b0eba286f81dbde403ca9456f32/38.854681,-77.165222";
            $http.get(url).success(function(data) {
                    $scope.weatherData = data;
                    console.log($scope.weatherData);
                }).
                error(function(data, status) {
                    console.log("Error has occurred: " + status);
                    console.log(data);
                });

        $scope.toggleGroup = function(group) {
            if ($scope.isGroupShown(group)) {
                $scope.shownGroup = null;
            } else {
                $scope.shownGroup = group;
            }
        };

        $scope.isGroupShown = function(group) {
            return $scope.shownGroup === group;
        };

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

