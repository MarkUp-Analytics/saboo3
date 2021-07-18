const Users = require("../models/Users");
const passport = require('passport');

exports.login = (req, res, next) => {
    const user = req.body;

  if(!user.email) {
    return res.status(400).json({
      errors: {
        email: 'is required',
      },
    });
  }

  if(!user.password) {
    return res.status(400).json({
      errors: {
        password: 'is required',
      },
    });
  }

  return passport.authenticate('local', { session: false }, (err, passportUser, info) => {
    if(err) {
      return next(err);
    }

    if(passportUser) {
      const user = passportUser;
      user.token = passportUser.generateJWT();

      return res.json(user.toAuthJSON());
    }

    return res.status(400).json({
        status: false,
        message: info.errors
      });
  })(req, res, next);
}

exports.signup = async (req, res) => {
    const user = req.body;

  if(!user.email) {
    return res.status(400).json({
      errors: {
        email: 'is required',
      },
    });
  }

  if(!user.password) {
    return res.status(400).json({
      errors: {
        password: 'is required',
      },
    });
  }

  const finalUser = new Users(user);

  finalUser.setPassword(user.password);

  try {
    const data = await finalUser.save();
    if(data)
    {
        res.status(200).json({
            status: true,
            message: "All Test Data successfully deleted",
            data: { user: finalUser.toAuthJSON() }
        })
    }
    
  } catch (err) {
    console.log(err);
    let err_msg = "Unable to signup";
    if(err.code === 11000){
        err_msg = "User name already exists"
    }

    res.status(400).json({
        status: false,
        message: err_msg
    });
  }
}