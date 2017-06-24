var goalbar = angular.module('goalbar', []);

goalbar.controller('GoalBarController', function($scope) {
  $scope.values = [95, 97.5, 100, 102, 105];
  $scope.current = 98;
  $scope.goal = 105;
  $scope.goalFixed = 500;
  
  $scope.infoAbove = false;

  var calculateBarPercent = function() {
    var percent = ($scope.current / $scope.goal) * 100;
//var percent = ($scope.current / 250) * 100;
    if (percent > 100) {
      percent = 100;
    }
    if (percent < 15) {
      $scope.infoAbove = true;
    }

    return percent;
  };
  
 
  $scope.$watch('current', function() {
    $scope.barPercent = 100 - calculateBarPercent();
    
    //$scope.barPercent = ($scope.barPercent2/$scope.goal)/500
    $scope.barStyle = 'transform: translateY(' + $scope.barPercent + '%)';
    //$scope.barStyle = 'transform: translateY(' + (500 - 98) + 'px)';
  });
});