angular-safeapply
=================
$safeApply defined on the $rootScope's prototype via decorator for better performance

```javascript
$scope.safeApply(function() {
  alert("I'm safe from $apply 'already in progress'");
});
```
