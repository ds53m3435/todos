angular.module('TDApp', [])
  .service('TodoController', function () {
    var kero = this
    kero.myTexts = []
    kero.list = function () {
      return kero.myTexts
    }
    kero.add = function(word) {
      if(word.mytext !== null && word.mytext != ''){
        return kero.myTexts.push(word)
      }
    }
  })
  .controller('ListData', function ($scope, TodoController) {
     $scope.myTexts = TodoController.list()
  })
  .controller('CheckBox', function ($scope) {
    $scope.Check = { check : '' }
  })
  .controller('AddmyTexts', function($scope, TodoController) {
    $scope.save = function() {
      var word = { mytext: $scope.mytext }
      TodoController.add(word)
      $scope.mytext = null
    }
  })
