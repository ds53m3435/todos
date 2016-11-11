angular.module('TDApp', [])
  .service('TodoService', function () {
    var text = this
    text.titles = [
    {title : 'Kantapon',done : true},
    {title : 'Surapong',done : false}
    ]
    text.list = function () {
        return text.titles
    }
    text.add = function(word) {
      if(word.title != null && word.title != ''){
        return text.titles.push(word)
      }
    }
    text.ch = function(ch) {
      if(ch == true)
        return 'Complete'
      else
        return ''
    }
  })
  .controller('ListData', function ($scope, TodoService) {
     $scope.titles = TodoService.list()
  })
  .controller('CheckBox', function ($scope,TodoService) {
    $scope.checktf = function(ch){
      if(ch.done == true)
        ch.done = false;
      else
        ch.done = true 
      }
    })
  .controller('AddmyTexts', function($scope, TodoService) {
    $scope.save = function() {
      var word = { title: $scope.title ,done : false}
      TodoService.add(word)
      $scope.title = null
    }
  })
