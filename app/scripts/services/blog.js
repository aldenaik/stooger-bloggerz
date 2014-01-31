'use strict';

angular.module('stoogerBloggerzApp')
  .service('blogService', function Blog() {
  	return{
		getPosts:function(){
			  			return  [
			  { title: 'Moe says...', body: '"Why I oughta..."', author: 'Moe'},
			  { title: 'Curly says...', body: '"Nyuk Nyuk Nyuk!"', author: 'Curly'},
			  { title: 'Moe says...', body: '"You nitwit!"', author: 'Moe'},
			  { title: 'Larry says...', body: '"What\'s the idea?"', author: 'Larry'}
			]
  		}
  	}
  	})
    .service('authorService', function Blog() {
  	return{
  		getAuthor:function(){
  					return [
					{author: 'Moe'},
					{author: 'Curly'},
					{author: 'Moe'},
					{author: 'Larry'}
  					];
	  		}
  			
  		}
  });
    // AngularJS will instantiate a singleton by calling "new" on this function



// angular.module("AngularFriends").factory("friendService", function($http){
// 	return {
// 		getFriends:function(){
// 			return $http.get("https://s3.amazonaws.com/intuiplan_company_files/production/files/public/FriendData.json")
// 		}
// 	}

// });