const errors = require("../errors/errors");

class CustomMiddlewares {
  static register(req, res, next) {
    if ("name" in req.body && "email" in req.body) {
      req.body.profileIMG =
        "https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png";
      req.body.profileBackgroundIMG =
        "https://wallpapercave.com/wp/wp7373530.jpg";
      req.body.posts = [];
      req.body.friendList = [];
      req.body.gameList = [];
      req.body.plataformList = [];
      req.body.timeAvailability = [];
      next();
    } else {
      res.status(400).jsonp(errors.register);
    }
  }

  static posts(req, res, next) {
    if (req.method === "POST") {
      if ("photo" in req.body && "description" in req.body) {
        req.body.createdAt = new Date().toUTCString();

        next();
      } else {
        res.status(400).jsonp(errors.posts.post);
      }
    } else if (req.method === "PATCH") {
      if ("id" in req.body || "userId" in req.body || "createdAt" in req.body) {
        res.status(400).jsonp(errors.posts.patch);
      } else {
        next();
      }
    } else {
      next();
    }
  }
}

module.exports = CustomMiddlewares;
