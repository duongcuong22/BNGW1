const checkAdmin = (req, res, next) => {
  let token = req.headers;
  res.token = token;
  if (token) {
    jwt.verify(token, "nodemy", (err, data) => {
      if (err) {
        res.json({
          message: "fake token",
          err: err,
        });
      } else if (data) {
        console.log(data);
        if (data.type === 1) {
          next();
        } else {
          res.json({
            message: "Not admin",
          });
        }
      } else {
        res.json({
          message: "token err",
          err: err,
        });
      }
    });
  }
};

module.exports = { checkAdmin }
