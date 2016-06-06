namespace app {
  angular.module('app').config((
        $stateProvider: ng.ui.IStateProvider
      ) => {
        $stateProvider.state('home', {
            url: '/home',
            templateUrl: '/client/app/home/home.html',
            controller: 'HomeController as vm'
        });
    });
}
