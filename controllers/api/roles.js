const Role = require("../../models/roles");

async function index(req, res) {
  const user = req.user._id;
  const roles = await Role.find({ user });
  res.json(roles);
}

async function show(req, res) {
  try {
    const role = await Role.findById(req.params.id);
    res.json(role);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
}

async function create(req, res) {
  try {
    req.body.user = req.user._id;
    const role = await Role.create(req.body);
    res.json(role);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
}

async function update(req, res) {
  try {
    const role = await Role.findById(req.params.id);
    role.set(req.body);
    await role.save();
    res.json(role);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
}

async function deleteRole(req, res) {
  try {
    const role = await Role.findById(req.params.id);
    role.deleteOne();
    res.json(role);
  } catch (error) {
    console.log(error);
    res.status(400).json(error);
  }
}

module.exports = {
  index,
  show,
  create,
  update,
  deleteRole,
};
