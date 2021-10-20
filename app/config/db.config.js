module.exports = {
  HOST: "us-cdbr-east-04.cleardb.com",
  USER: "b6499fe3dd63a6",
  PASSWORD: "e2843d03",
  DB: "heroku_04a381fdd3ebe66",
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};
