module.exports = app => {
  const pills = require("../controllers/pills.controller.js");

  var router = require("express").Router();

  // Create a new Tutorial
  router.post("/create", pills.create);

  // Retrieve a single Tutorial with id
  router.get("/all", pills.findAll);

  // Update a Tutorial with id
  router.put("/:id", pills.update);

  // Delete a Tutorial with id
  router.delete("/delete/:id", pills.delete);

  app.use('/api/pills', router);
};
