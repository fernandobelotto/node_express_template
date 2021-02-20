import UserDAO from '../database/UserDAO';

async function addUser(req, res) {
    
    const user = req.body;
    
    try {
        const result = await UserDAO.create(user)
        res.send({ status: 'success', content: result})
    } catch (err) {
        console.log(err)
        res.send({ status: 'error'})
    }
    
}
async function findUserById(req, res) {

    const id = req.params.id

    try {
        const result = await UserDAO.findById(id)
        res.send({ status: 'success', content: result})
    } catch (err) {
        console.log(err)
        res.send({ status: 'error'})
    }

}
async function findUsers(req, res) {

    try {
        const result = await UserDAO.findAll()
        res.send({ status: 'success', content: result})
    } catch (err) {
        console.log(err)
        res.send({ status: 'error'})
    }

} 
async function updateUser(req, res) {
    const id = req.params.id

    try {
        const result = await UserDAO.updateById(req.body, id)
        res.send({ status: 'success', content: result})
    } catch (err) {
        console.log(err)
        res.send({ status: 'error'})
    }

}
async function deleteUserById(req, res) {
    const id = req.params.id

    try {
        const result = await UserDAO.deleteById(id)
        res.send({ status: 'success', content: result})
    } catch (err) {
        console.log(err)
        res.send({ status: 'error'})
    }
}
export default {
    addUser,
    findUsers,
    findUserById,
    updateUser,
    deleteUserById
}

