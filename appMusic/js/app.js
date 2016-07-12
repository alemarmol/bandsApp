var app = angular.module('bandApp',["ngRoute"]);

app.config(['$routeProvider', function ($routeProvider) {
	$routeProvider
		.when('/', {
			templateUrl: 'views/artists.html',
			controller: 'artistsController'
		})

		.when('/artists', {
			templateUrl: 'views/artists.html',
			controller: 'artistsController'
		})

		.when('/artists/single/:name', {
			templateUrl: 'views/singleArtist.html',
			controller: 'artistsController'
		})

		.otherwise({
			redirectTo: "/"
		})
}]);



//Controlador para artistas
app.controller("artistsController",["$scope", "$http", "$routeParams", function($scope, $http, $routeParams){
	$scope.name = $routeParams.name;

	$http.get("js/Bands.json").success(function(data) {
		$scope.artists = data;
	});
}]);

app.directive('bappHeader', function () {
	return {
		restrict: 'E',
		templateUrl: 'views/header.html'			
	};
})

app.directive('bappFooter', function () {
	return {
		restrict: 'E',
		templateUrl: 'views/footer.html'			
	};
})
