;(function(module, angular, undefined) {
'use strict';

angular.module('ngSafeapply', ['angular-safeapply']);

module.config(['$provide', function($provide) {
  $provide.decorator('$rootScope', ['$delegate', function($delegate) {

    Object.defineProperty($delegate.constructor.prototype, '$safeApply', {
      value: function(scopeOrFunc, func, forceApply) {
        var $scope, fn, force = false;
        if (arguments.length == 1) {
          if (angular.isFunction(scopeOrFunc)) {
            fn = scopeOrFunc;
          } else {
            $scope = scopeOrFunc;
          }
        } else {
          $scope = scopeOrFunc;
          fn = func;
          if (arguments.length == 3) {
            force = !!forceApply;
          }
        }
        $scope = $scope || this;
        fn = fn || function() { };
        if (force || !$scope.$$phase) {
          $scope.$apply ? $scope.$apply(fn) : $scope.apply(fn);
        } else {
          fn();
        }
      },
      enumerable: false
    });

    return $delegate;
  }]);
}]);

}(angular.module('angular-safeapply', []), angular));
