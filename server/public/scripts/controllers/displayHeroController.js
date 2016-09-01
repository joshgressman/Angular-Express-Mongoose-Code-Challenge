heroTracker.controller('DisplayHeroController', ['$scope', '$http', function($scope, $http) {

console.log('display hero controller running');
$scope.heros = [];
getHeros();
$scope.newHero = {
           aliase: $scope.aliase,
           first_name: $scope.first_name,
           last_name: $scope.last_name,
           city: $scope.city,
           power_name: $scope.power_name

};

function getHeros(){
  $http.get('/heros')
  .then(function (response){
    console.log("get heros", response.data);
    var heroDataArray = response.data;
    $scope.heros.push(heerosDataArray);
  });
}




}]);
