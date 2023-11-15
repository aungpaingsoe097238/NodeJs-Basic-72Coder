const all = async (req, res, next) => {
  res.json({
    msg: `All Posts`,
  });
};

const post = async (req, res, next) => {
  res.json({
    msg: `Create Post`,
    data: req.body,
  });
};

const get = async (req, res, next) => {
  res.json({
    msg: `Get Post ${req.params.id}`,
  });
};

const patch = async (req, res, next) => {
  res.json({
    msg: `Update Post ${req.params.id}`,
    data: req.body
  });
};

const drop = async (req, res, next) => {
  res.json({
    msg: `Delete Post ${req.params.id}`,
  });
};

module.exports = {
  all,
  post,
  get,
  patch,
  drop,
};
