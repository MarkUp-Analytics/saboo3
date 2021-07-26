const Users = require("../models/Users");
const passport = require('passport');

exports.login = (req, res, next) => {
    const user = req.body;

  if(!user.email) {
    return res.status(400).json({
      message: "Email is required",
    });
  }

  if(!user.password) {
    return res.status(400).json({
      message: "Password is required",
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
    if(info.errors){
      return res.status(400).json({
        status: false,
        message: "Invalid username/password!"
      });
    }
  })(req, res, next);
}

exports.signup = async (req, res) => {
    const user = req.body;

  if(!user.name) {
    return res.status(400).json({
      errors: {
        message: "Name is required",
      },
    });
  }  

  if(!user.email) {
    return res.status(400).json({
      errors: {
        message: "Email is required",
      },
    });
  }

  if(!user.password) {
    return res.status(400).json({
      errors: {
        message: "Password is required",
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