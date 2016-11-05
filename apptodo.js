angular.module('TDApp', [])
  .service('TodoController', function () {
    var kero = this
    kero.myTexts = [{mytext:''}]
    kero.list = function () {
      return kero.myTexts
    }
    kero.add = function(contact) {
      return kero.myTexts.push(contact)
    }
  })
  .controller('ListData', function ($scope, TodoController) {
     $scope.myTexts = TodoController.list()
  })
  .controller('CheckBox', function ($scope) {
    $scope.Check = {
      check : ''
    }
  })
  .controller('AddmyTexts', function($scope, TodoController) {
    $scope.save = function() {
      var word = {
        mytext: $scope.mytext
      }
      TodoController.add(word)
      $scope.mytext = ''
    }
  })
