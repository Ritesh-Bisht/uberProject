const userModel = require('../models/user.model');


module.exports.createUser = async ({
    // accept these 4 things as object
    firstname, lastname, email, password
}) => {
    if (!firstname || !email || !password) {
        // if one of these 3 is missing then throw an error
        throw new Error('All fields are required');
    }
    const user = userModel.create({
        fullname: {
            firstname,
            lastname
        },
        email,
        password
    })

    return user;
}