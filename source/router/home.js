const {Router} = require(`express`);
const router = Router();

const sendMail = require('../sendMail');

router.get(`/`, (req, res) => {
  res.render(`index`);
});

router.post(`/`, (req, res) => {
  sendMail(req.body.name, req.body.email, req.body.phone, req.body.description);
  res.sendStatus(200);
});

module.exports = router;
