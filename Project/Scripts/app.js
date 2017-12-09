var myApp = angular.module('myApp', []);

myApp.config(['$sceDelegateProvider',
    function ($sceDelegateProvider) {
        $sceDelegateProvider.resourceUrlWhitelist(['self']);
    }
]);
