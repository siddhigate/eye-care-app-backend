const client = require("../db/db_config");


const getSpecificUser = async (req, res) => {
    const course = await client.query(`SELECT * FROM user.userinfo WHERE id="${req.params.id}"`);

    res.send({ course });
};

const getUsers = async (req, res) => {
    const allUsers = await client.query('SELECT * FROM user.userinfo');

    res.send({ allUsers });
};

const addUser = async (req, res) => {
    const allProperties = Object.keys(req.body).length;

    if (allProperties !== 3) {
        res.code(400).send({ 
            error: 'Some properties are missing! Add the name, description, author and link!' 
        });

        return;
    }

    try {
        const newUser = await client.insert({
            table: 'userinfo',
            records: [
                {
                    name: req.body.name,
                    password: req.body.password,
                    score: req.body.score
                }
            ]
        });

        res.send({ newUser });

    } catch (error) {
        res.send({ error });
    }
};

const updateUser = async (req, res) => {
    const updates = Object.keys(req.body);
    const allowedUpdates = ['name', 'password', 'score' , "id"];
    const isValidOperation = updates.every((update) => allowedUpdates.includes(update));

    if (!isValidOperation) {
        res.code(400).send({ error: 'Not a valid operation! '});

        return;
    }

    try {
        const updatedUser = await client.update({
            table: 'userinfo',
            records: [
                {
                    id: req.body.id,
                    name: req.body.name,
                    password: req.body.password,
                    score: req.body.score
                }
            ]
        });

        res.send({ updatedUser });
    } catch (error) {
        res.send({ error });
    }
};

module.exports = {
    getUsers,
    addUser,
    updateUser,
    getSpecificUser
}
