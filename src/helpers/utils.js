/**
 * Remove property from object by key name
 * @param {*} Object Object to remove property
 * @param {*} key key name
 * @returns new object without key (if present)
 */
const removeProperty = (Object, key) => {
    const isArray = Array.isArray(Object);

    if (isArray) {
        let outputObject = [];
        Object.forEach((element) => {
            outputObject.push(getObjectNormalized(element, key));
        });
        return outputObject;
    } else {
        return getObjectNormalized(Object, key);
    }
};

const getObjectNormalized = (Object, key) => {
    Object = JSON.parse(JSON.stringify(Object));
    let outputObject = {};
    for (let inKey in Object) {
        if (key !== inKey) {
            outputObject[inKey] = Object[inKey];
        }
    }
    return outputObject;
};

module.exports = { removeProperty };
