const router = require("express").Router();

const { register, login, getUserInfo } = require("../services/user");
const { getById } = require("../services/listing");

router.post("/register", async (req, res) => {
  const { username, email, password } = req.body;

  try {
    if (!username) {
      throw new Error("Username is required!");
    }
    if (!email) {
      throw new Error("Email is required!");
    }
    if (password.trim().length < 4) {
      throw new Error("Password must be at least 4 characters!");
    }
    const userData = await register(username, email, password);
    res.status(200).json(userData);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    const userData = await login(email, password);
    res.status(200).json(userData);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

router.get("/logout", (req, res) => {
  res.status(204).end();
});

router.get("/profile/:id", async (req, res) => {
  try {
    const user = await getUserInfo(req.params.id); 
    res.status(200).json(user);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});



module.exports = router;
