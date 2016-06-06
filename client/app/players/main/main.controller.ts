namespace app {
  export class PlayerMainController {
    public players: IPlayer[];
    public remove(p: IPlayer) {
      this.PlayerService.remove(p.id).then(() => {
      this.players.splice(this.players.indexOf(p), 1);
      }, () => {
        console.error("error!!!!")
      })
    }

    constructor(
      private PlayerService: app.PlayerService
    ) {
      this.players = PlayerService.getAll();
    }
  }
  angular.module('app').controller('PlayerMainController', PlayerMainController);
}
