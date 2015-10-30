angular.module('shopListApp')

.factory("Lists", function($firebaseArray) {
  var lists = new Firebase("https://daychallenge28.firebaseio.com/lists");
  return $firebaseArray(lists);
});
