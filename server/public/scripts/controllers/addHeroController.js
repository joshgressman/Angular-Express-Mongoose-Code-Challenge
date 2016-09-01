heroTracker.controller('AddHeroController', ['$scope','$http', function($scope, $http) {
  console.log("addHero controller running");

$scope.heros = [];
$scope.newHero = {
           aliase: $scope.aliase,
           first_name: $scope.first_name,
           last_name: $scope.last_name,
           city: $scope.city,
           power_name: $scope.power_name

};






$scope.submitNewHero = function () {
  var data = $scope.newHero;
  $http.post('/books', data)
  .then(function(){
    console.log('POST /books', data);
  });
};

}]);
