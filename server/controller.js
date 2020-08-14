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
            console.log(authenticated)
            if (authenticated) {
                res.status(200).send(user)
            }
        }
    },
    getPosts: (req, res) => {
        const db = req.app.get('db');
        const {search, showMyPosts} = req.body;
        const {id} = req.params;
        if (showMyPosts === true && search) {
            const allPosts = db.get_searched_posts(search);
            res.status(200).send(allPosts);
        } else if(showMyPosts === false && search) {
            const theirPosts = db.get_their_posts(search, id) 
            res.status(200).send(theirPosts)
        } else if(showMyPosts === false & !search) {
            const allPosts = db.get_all_posts();
            res.status(200).send(allPosts)
        }
    }
    
}