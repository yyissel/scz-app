const participantController = require("../controllers").participant;

module.exports = app => {
  app.get("/api", (req, res) =>
    res.status(200).send({
      message: "Welcome to the API!"
    })
  );

  app.post("/api/participant", participantController.create);

  // POST participant
  app.post("/api/participant", participantController.create);
  
  // GET list of all participants
  app.get("/api/participant", participantController.list);
  
  // GET a single participant by user_id
  app.get("/api/participant/:user_id", participantController.retrieve);
  
  // UPDATE a single participant by user_id
  app.put("/api/participant/:user_id", participantController.update);
  
  // DELETE a single participant by user_id
  app.delete("/api/participant/:participantId", participantController.delete);
};