angular.module("rockPaperScissors").controller("MainController",['$scope', function($scope){
    $scope.choices = ['Grass', 'Water', 'Fire'];
    $scope.pick = {choice: ''};

    $scope.results = "";
    $scope.computerChoice = "None";
    $scope.wins = 0;
    $scope.losses = 0;
    $scope.playGame = function(){
      var ryan = new Controller();
      stopper = 0;
      $scope.results = ryan.play($scope.pick.choice);
      $scope.computerChoice = ryan.computersPick;
      if ($scope.results === "You Win"){
        $scope.wins += 1;
      }
      else if($scope.results == "Gendelman Wins"){
        $scope.losses += 1;
      }

      if ($scope.wins === 10 ){
        $scope.wins += 1
        swal("Congrats!!!", "You Defeated the Evil Gendelman!", "success")
      }
    }

    $scope.resetStats = function(){
      $scope.results = "";
      $scope.wins = 0;
      $scope.losses = 0;
      $scope.computerChoice = "None";
    }
}]);

