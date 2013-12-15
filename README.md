angular-safeapply
=================
$safeApply defined on the $rootScope's prototype via decorator for better performance

```javascript
$scope.safeApply(function() {
  alert("I'm safe from $apply 'already in progress'");
});
```


```javascript
//use by itself
$scope.$safeApply();

//tell it which scope to update
$scope.$safeApply($scope);
$scope.$safeApply($anotherScope);

//pass in an update function that gets called when the digest is going on...
$scope.$safeApply(function() {

});

//pass in both a scope and a function
$scope.$safeApply($anotherScope,function() {

});

//call it on the rootScope
$rootScope.$safeApply();
$rootScope.$safeApply($rootScope);
$rootScope.$safeApply($scope);
$rootScope.$safeApply($scope, fn);
$rootScope.$safeApply(fn);
```
