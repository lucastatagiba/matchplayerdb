const errors = require("../errors/errors");

class CustomMiddlewares {
  static register(req, res, next) {
    if ("name" in req.body && "email" in req.body) {
      req.body.profileIMG = "";
      req.body.posts = [];
      req.body.friendList = [];
      req.body.gameList = [];
      req.body.plataformList = [];
      req.body.timeAvailability = [];
      next();
    } else {
      res.status(400).jsonp(errors.signup);
    }
  }

  static posts(req, res, next) {
    if (req.method === "POST") {
      if ("photo" in req.body && "description" in req.body) {
        req.body.createdAt = new Date().toUTCString();

        next();
      } else {
        res.status(400).jsonp(errors.todos.post);
      }
    } else if (req.method === "PATCH") {
      if ("id" in req.body || "userId" in req.body || "createdAt" in req.body) {
        res.status(400).jsonp(errors.todos.patch);
      } else {
        next();
      }
    } else {
      next();
    }
  }
}

module.exports = CustomMiddlewares;
