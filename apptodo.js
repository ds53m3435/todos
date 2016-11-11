angular.module('TDApp', [])
  .service('TodoService', function () {
    var text = this
    text.myTexts = []
    text.list = function () {
        return text.myTexts
    }
    text.add = function(word) {
      if(word.mytext != null && word.mytext != ''){
        return text.myTexts.push(word)
      }
    }
  })
  .controller('ListData', function ($scope, TodoService) {
     $scope.myTexts = TodoService.list()
  })
  .controller('CheckBox', function ($scope) {
    $scope.Check = { check : '' }
  })
  .controller('AddmyTexts', function($scope, TodoService) {
    $scope.save = function() {
      var word = { mytext: $scope.mytext }
      TodoService.add(word)
      $scope.mytext = null
    }
  })
