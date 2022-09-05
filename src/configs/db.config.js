const db = {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    document: process.env.DB_DOCUMENT,
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD
};

module.exports = db;
