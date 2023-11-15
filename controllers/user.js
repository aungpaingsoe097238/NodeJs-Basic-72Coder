const all = async (req, res, next) => {
  res.json({
    msg: `All Users`,
  });
};

const post = async (req, res, next) => {
  res.json({
    msg: `Create User`,
    data: req.body,
  });
};

const get = async (req, res, next) => {
  res.json({
    msg: `Get User ${req.params.id}`,
  });
};

const patch = async (req, res, next) => {
  res.json({
    msg: `Update User ${req.params.id}`,
    data: req.body,
  });
};

const drop = async (req, res, next) => {
  res.json({
    msg: `Delete User ${req.params.id}`,
  });
};

module.exports = {
  all,
  post,
  get,
  patch,
  drop,
};
