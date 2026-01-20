const router = require("express").Router();

router.post("/", (req, res) => {
  const { topic } = req.body;

  const caption = `Boost your ${topic} 🚀 Stay consistent & grow on Instagram!`;
  const hashtags = `#${topic} #instagramgrowth #socialmedia #reels`;

  res.json({ caption, hashtags });
});

module.exports = router;
