import * as mongoose from "mongoose";
import * as express from 'express';
import * as Player from './api/players/model'
import { config } from '../config';
const MONGO_URL = "mongodb://localhost/team-manager";
let app = express();

mongoose.connect(MONGO_URL, function(err){
  if(err) console.log(err)
  else console.log(`connected to ${MONGO_URL}`)})

app.get(/\/client.{0,}\/.+\.jade/, (req, res, next) => {
  res.render(config.root + req.path);
})

// access bower_components via /scripts/...
app.use('/scripts', express.static('bower_components'));
// access the client->app->home folder via /app/home
app.use('/client', express.static('client'));

app.get('/', (req, res, next) => {
  res.sendFile(config.client + '/index.html');
});

app.use(require('body-parser')());

let teams: ITeam[] = [{
  id: 1,
  city: 'New York',
  teamName: 'Giants'
},
{
    id: 2,
    city: 'Dallas',
    teamName: 'Cowboys'
}]

app.get('/api/v1/teams', (req, res, next) => {
  res.json(teams);
});

app.use('/api/v1/players', require('./api/players/routes'))

app.use(/\/(client|scripts|api).{0,}/, (req, res, next) => {
  res.sendStatus(404);
});

app.get('/*', (req, res, next) => {
  res.sendFile(config.client + '/index.html');
});

app.use((req, res, next) => {
  res.sendStatus(404);
});

app.listen(3000, () => {
  console.log('Server is listening on localhost:3000');
});
