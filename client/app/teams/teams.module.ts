namespace app {
  angular.module('app').config((
    $stateProvider: ng.ui.IStateProvider
  ) => {
    $stateProvider.state('team main', {
      url: '/teams',
      templateUrl: '/client/app/teams/main/main.jade',
      controller: 'TeamMainController as vm'
    })
  })
}
