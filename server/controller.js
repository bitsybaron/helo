const bcrypt = require('bcrypt');

module.exports = {
    register: async (req, res) => {
        const {username, password} = req.body;
        const db = req.app.get('db');
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);
        const newUser = await db.add_user([username, hash]);
        res.status(200).send(newUser);
    },
    login: async (req, res) => {
        const {username, password} = req.body;
        const db = req.app.get('db');
        const user = await db.check_user(username);
        if (user[0]) {
            const authenticated = bcrypt.compareSync(password, user[0].password);
            if (authenticated) {
                res.status(200).send(user)
            }
        }
    }
    
}