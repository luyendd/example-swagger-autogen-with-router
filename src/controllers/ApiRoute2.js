const express = require('express');

const requestRouter = express.Router();
const authorize = require('../middlewares/auth');

requestRouter.route('/test-get').get(authorize, (req, res, next) => {
  // #swagger.description = "Description here..."
  // #swagger.tags = ["Request V2"]
  res.status(200).json({
    data: [],
    message: 'Successfully found',
  });
});

requestRouter.route('/test-delete/:id').delete(authorize, async (req, res, next) => {
  // #swagger.tags = ["Request V2"]
  res.status(200).json({
    msg: [],
    message: 'Delete!',
  });
});

module.exports = { requestRouter };
