const bcrypt = require('bcrypt');

/**
 * Rounds to hash string
 */
const saltOrRounds = 10;

/**
 * Encrypt text
 * @param {string} text The data to be encrypted
 * @returns A promise to be either resolved with the encrypted data salt or rejected with an Error
 */
const encrypt = async (text) => bcrypt.hash(text, saltOrRounds);

/**
 * Validate text hash versus original text not hash
 * @param {*} text The data to be encrypted.
 * @param {*} hash hash to compare
 * @returns A promise to be either resolved with the comparison result salt or rejected with an Error
 */
const validate = async (text, hash) => bcrypt.compare(text, hash);

/**
 * export as module encrypt and validate function
 */
module.exports = { encrypt, validate };
