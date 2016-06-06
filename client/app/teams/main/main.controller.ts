namespace app {
  export class TeamMainController {
    public teams: ITeam[];

    constructor(
      private TeamService: app.TeamService
    ) {
      this.teams = TeamService.getAll();
    }
  }
  angular.module('app').controller('TeamMainController', TeamMainController);
}
