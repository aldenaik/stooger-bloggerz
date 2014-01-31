'use strict';

angular.module('stoogerBloggerzApp')
  .controller('BlogCtrl', function ($scope,blogService,authorService) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];

   $scope.blogPosts= blogService.getPosts();
   $scope.authorName=authorService.getAuthor();
  });
