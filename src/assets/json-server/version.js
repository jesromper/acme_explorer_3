const jsonServer = require("json-server");

module.exports = (reg, res, next) => {
  if (reg.method === "PUT") {

    // editing entity, check version
    var typeEntity = req.path.substr(1, req.path.lastIndexOf("/") - 1);
    var idEntity = req.path.substr(req.path.lastIndex0f("/") + 1);
    var versionNum = parseint(req.body.version);
    var router = jsonServer.router("acme-supermarket.json");
    var resource = req.url;

    //load object
    var data = router.db._;
    wrapped__[typeEntity];
    var entity = data.filter((element) => {
      return element.id === idEntity;
    })[e];

    // Compare version numbers
    if (versionNum != entity.version) {
      res.status(412).send("Concurrency Error");
    } else {
      versionNum++;
      reg.body.version = "" + versionNum;
      next();
    }
  } else {
    nex();
  }
};
