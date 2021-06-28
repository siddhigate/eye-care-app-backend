
const userController = require('../controllers/user');


async function routes(app, opts) {

    // Get all users
    app.route({
        method: 'GET',
        url: '/users',
        handler: userController.getUsers
    });

    // Get a specific user
    app.route({
        method: 'GET',
        url: '/user/:id',
        handler: userController.getSpecificUser
    });


    // Add a user
    app.route({
        method: 'POST',
        url: '/user',
        handler: userController.addUser
    });

    // Edit a user
    app.route({
        method: 'PUT',
        url: '/user/:id',
        handler: userController.updateUser
    });

}



module.exports = routes;
