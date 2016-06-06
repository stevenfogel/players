namespace app {
  angular.module('app').config((
    $stateProvider: ng.ui.IStateProvider
  ) => {
    $stateProvider.state('players main', {
      url: '/players',
      templateUrl: '/client/app/players/main/main.jade',
      controller: 'PlayerMainController as vm'
    });
    $stateProvider.state('players details', {
      url: '/details/:id',
      templateUrl: '/client/app/players/details/details.jade',
      controller: 'PlayerDetailsController as vm'
    });
    $stateProvider.state('players create', {
      url: '/create',
      templateUrl: '/client/app/players/create/create.jade',
      controller: 'PlayerCreateController as vm'
    });
  });
}
