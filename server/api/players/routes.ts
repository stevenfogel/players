import * as express from 'express';
import * as controller from './controller';
let router = express.Router();

// base URL----/api/v1/players

// GET: /api/v1/players/
router.get('/', controller.getAll);
// GET: /api/v1/players/:id
// :id -> unique player ID
router.get('/:id', controller.getOne);
// DELETE: /api/v1/players/:id
// id -> unique player ID
router.delete('/:id', controller.remove);
// POST: /api/v1/players
router.post('/', controller.create);
// PUT: /api/v1/players
router.put("/:id", controller.update);

export = router;
