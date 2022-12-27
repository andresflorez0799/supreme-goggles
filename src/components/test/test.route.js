const express = require('express');
const router = express.Router();
const controller = require('./test.controller');
const middleware = require('../../network/middleware'); //.. protect app by request

router.post('/', middleware.checkOrigin, middleware.checkToken, controller.createOne);

router.get('/', middleware.checkOrigin, middleware.checkToken, controller.getAll);

router.get('/:id', middleware.checkOrigin, middleware.checkToken, controller.getOne);

router.delete('/:id', middleware.checkOrigin, middleware.checkToken, controller.deleteOne);

router.put('/:id', middleware.checkOrigin, middleware.checkToken, controller.updateOne);

//#region routes for a invalid request
router.get('/create', controller.create_get);
router.get('/:id/delete', controller.delete_get);
router.get('/:id/update', controller.update_get);
router.post('/:id/delete', controller.delete_post);
router.post('/:id/update', controller.update_post);
//#endregion

module.exports = router;
