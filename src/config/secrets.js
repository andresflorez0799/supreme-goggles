require('dotenv').config();

const secrets = {
    DB_URL: process.env.DB_URL,
    DB_PORT: process.env.DB_PORT || 3000,
    JWT_SECRET: process.env.JWT_SECRET,
};

exports.secrets = secrets;
