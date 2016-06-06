import * as express from 'express';
import {players, remove as removePlayer} from './model';

export function getOne(req: express.Request, res: express.Response, next) {
  let player = players.filter((item) =>
   item.id == req.params['id'])[0]
   if(player) {
    res.json(player);
   } else {
    res.sendStatus(404);
   }
}

export function getAll(req: express.Request, res: express.Response, next) {
  res.json(players);
}

export function remove(req: express.Request, res: express.Response, next) {
  removePlayer(parseInt(req.params['id']))
  res.end();
}

export function create(req: express.Request, res: express.Response, next) {
  let id = players[players.length - 1].id + 1;
  req.body.id = id;
  players.push(req.body);
  res.json(req.body);
}

export function update(req: express.Request, res: express.Response, next) {
  for (let i = 0; i< players.length; i++) {
    if(players[i].id == req.params["id"]) {
      players[i] = req.body;
      break;
    }
  }
  res.end();
}
