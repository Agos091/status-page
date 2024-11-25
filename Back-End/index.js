const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { Service, sequelize } = require("./models/Service");

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send("API is running...");
});

sequelize.sync({ force: true }).then(() => {
  console.log("Database & tables created!");
});

app.get("/api/services", async (req, res) => {
  try {
    const services = await Service.findAll();
    res.json(services);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch services" });
  }
});

app.post("/api/services", async (req, res) => {
  const { name, description, status } = req.body;
  try {
    const service = await Service.create({ name, description, status });
    res.status(201).json(service);
  } catch (error) {
    res.status(500).json({ error: "Failed to create service" });
  }
});

app.put("/api/services/:id", async (req, res) => {
  const { id } = req.params;
  const { name, description, status } = req.body;
  try {
    const service = await Service.findByPk(id);
    if (!service) {
      return res.status(404).json({ error: "Service not found" });
    }
    await service.update({ name, description, status });
    res.json(service);
  } catch (error) {
    res.status(500).json({ error: "Failed to update service" });
  }
});

app.delete("/api/services/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const service = await Service.findByPk(id);
    if (!service) {
      return res.status(404).json({ error: "Service not found" });
    }
    await service.destroy();
    res.json({ message: "Service deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: "Failed to delete service" });
  }
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
