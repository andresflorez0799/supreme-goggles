const responses = require('../../network/response');
const services = require('./test.service');

//... Display list of all.
const getAll = async (req, res) => {
    //console.log(req.query);
    //console.log(req.headers);
    try {
        const datos = await services.store.getAll();
        responses.success(req, res, datos);
    } catch (error) {
        responses.error(req, res, 'Bad request');
    }
};

//... Display detail test for a specific id.
const getOne = async (req, res) => {
    try {
        if (req.params.id == undefined) {
            responses.warning(req, res, 'param id not supplied');
        } else {
            const datos = await services.store.getById(req.params.id);
            responses.success(req, res, datos);
        }
    } catch (error) {
        responses.error(req, res, 'Bad request');
    }
};

//... create a new test data.
const createOne = async (req, res) => {
    try {
        const responseService = await services.store.createOne(req.body);
        responses.success(req, res, responseService);
    } catch (error) {
        responses.error(req, res, 'Bad request');
    }
};

//... delete test by id
const deleteOne = async (req, res) => {
    try {
        if (req.params.id == undefined) {
            responses.warning(req, res, 'param id not supplied');
        } else {
            const responseService = await services.store.deleteOne(req.params.id);
            responses.success(req, res, responseService);
        }
    } catch (error) {
        responses.error(req, res, 'Bad request');
    }
};

//... update one model
const updateOne = async (req, res) => {
    try {
        if (req.params.id == undefined) {
            responses.warning(req, res, 'param id not supplied');
        } else {
            const responseService = await services.store.updateOne(req.params.id, req.body);
            responses.success(req, res, responseService);
        }
    } catch (error) {
        responses.error(req, res, 'Bad request');
    }
};

//#region Handle for invalid REST Api method request
//... Display create on GET
const create_get = (req, res) => responses.invalid(req, res, 'NOT VALID REQUEST FOR GET');

//... Display delete on GET.
const delete_get = (req, res) => responses.invalid(req, res, 'NOT VALID REQUEST FOR GET');

//... Handle delete on POST.
const delete_post = (req, res) => responses.invalid(req, res, 'NOT VALID REQUEST FOR POST');

//... Display update on GET.
const update_get = (req, res) => responses.invalid(req, res, 'NOT VALID REQUEST FOR GET');

//... Handle update on POST.
const update_post = (req, res) => responses.invalid(req, res, 'NOT VALID REQUEST FOR POST');
//#endregion

module.exports = {
    getAll,
    getOne,
    createOne,
    deleteOne,
    updateOne,
    create_get,
    delete_get,
    delete_post,
    update_get,
    update_post,
};
