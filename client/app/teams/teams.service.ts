namespace app {

  interface ITeamResourceClass extends ng.resource.IResource<ITeamResourceClass>, ITeam{}
  interface ITeamResource extends ng.resource.IResourceClass<ITeamResourceClass>{}

  export class TeamService {
    private TeamResource: ITeamResource;

    public getAll() {
      return this.TeamResource.query();
    }

    constructor(
      $resource: ng.resource.IResourceService
    ) {
      this.TeamResource = <ITeamResource>$resource('api/v1/teams/:id');
    }
  }
  angular.module('app').service('TeamService', TeamService);
}
