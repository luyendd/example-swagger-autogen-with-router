const express = require('express');
const ToolsController = require('./controllers/ToolsController');

const router = express.Router();

const apiV1 = require('./controllers/ApiRoute1');
const requestApiV2 = require('./controllers/ApiRoute2');
const requestRouter = requestApiV2.requestRouter;

router.use(apiV1);
router.use('/v2', requestRouter);

router.get('/test-get', ToolsController.show);
router.post('/test-post', store);
router.delete('/test-delete/:id', ToolsController.delete);

function store(req, res) {
  const tools = {};
  return res.status(201).send({});
}

module.exports = router;
