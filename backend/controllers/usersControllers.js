const User = require("./../models/User");
const bcrypt = require("bcrypt")

exports.createUser = async (req, res) => {

    console.log(req)

    console.log(req.body)

    const { username, name, password } = req.body;

    const saltRounds = 10;
    const passwordHash = await bcrypt.hash(password, saltRounds);

    const user = new User({
        username,
        name,
        passwordHash
    })

    const savedUser = await user.save();

    res.status(201).json(savedUser);
}

exports.getUsers = async (req, res) => {

    const users = await User.find({})  //why is empty object passed here?

    res.json(users);
}

exports.authenticateUser = async (req, res) => {


    const { username, password } = req.body;

    console.log("Authenticate controller called")
    console.log(req.body);

    const user = await User.findOne({ username });

    if( !user ) {
        console.log("user not found")
        return { error : 'User not found'};
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.passwordHash);

    if( !isPasswordCorrect ) {
        console.log("wrong password")
        return { error : 'Invalid password'};
    }

    console.log("correct password");
    return { success : 'Authentication successful', user };
}