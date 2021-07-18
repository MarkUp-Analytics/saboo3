const Test = require("../models/Test");

exports.testOne = (req, res) => {
    // Not to write this way....check testTwo
    res.status(200).json({
        status: true,
        message: "Test One Route"
    })
}

exports.testTwo = async (req, res) => {
    try {
        const data = await Test.find({})
        if(data)
        {
            res.status(200).json({
                status: true,
                message: "Test Two Route",
                data: data
            })
        }
        else
        {
            res.status(500).json({
                status: false,
                message: "Failed to retrive data."
            })
        }
    }
    catch (err) {
        return next(err)
    }
}

exports.testInsert = (req, res) => {
    Test.create(req.body)
        .then(result => {
                console.log(result)
                res.status(200).json({
                status: true,
                message: "Test Insert Route",
                data: result
            });
            
          })
          .catch(error => {
            console.error(error);
            return next(error);
          })
}

exports.testDeleteAll = async (req, res) => {
    try {
        const data = await Test.deleteMany();
        if(data)
        {
            console.log('All Test Data successfully deleted');
            res.status(200).json({
                status: true,
                message: "All Test Data successfully deleted",
                data: data
            })
        }
        else
        {
            res.status(500).json({
                status: false,
                message: "Failed to delete data."
            })
        }
        
      } catch (err) {
        console.log(err);
      }
}