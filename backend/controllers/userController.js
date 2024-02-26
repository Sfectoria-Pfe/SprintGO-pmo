//login user
const loginUser =  (req,res) => {
   // res.json({mssg: 'login user'})
   res.send('login msg')
}
//signup user
const signupUser = async (req,res) => {
    res.json({mssg: 'signup user'})
}

module.exports = {signupUser, loginUser}