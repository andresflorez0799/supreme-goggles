const model = require('./test.model');

const getAll = async () => model.find();

const getById = async (id) => {
    return {
        name: 'Andres',
        age: 25,
    };
    //model.find({ _id: id });
};

const deleteOne = async (id) => model.deleteOne({ _id: id });

const createOne = async (data) => {
    const { name, lastName, email } = data;
    return model.create({
        name,
        lastName,
        email,
    });
};

const updateOne = async (id, data) => {
    const { name, lastName, email } = data;

    const find = await model.findById(id);
    find.name = name;
    find.lastName = lastName;
    find.email = email;

    return find.save();
};

exports.store = { getAll, getById, createOne, deleteOne, updateOne };
