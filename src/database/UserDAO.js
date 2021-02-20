import User from "../models/UserModel";

function findAll() {
  return User.findAll();
}

function findById(id) {
  return User.findByPk(id);
}

function deleteById(id) {
  return User.destroy({ where: { id: id } });
}

function create(user) {
  let newUser = new User(user);
  return newUser.save();
}

function updateById(user, id) {
  let newUser = {
    name: user.name,
    email: user.email,
  };
  return User.update(newUser, { where: { id: id } });
}

export default {
  findAll,
  create,
  findById,
  deleteById,
  updateById,
};
