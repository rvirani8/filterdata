var express = require('express');
var router = express.Router();

const User = require('../Models/userSchema')

/* GET home page. */


// router.get('/',async function (req,res) {
  
//   try {
//     const data = await User.find({ age: { $ne: 28 } } );
//     res.status(200).json({
//     data
//    })

//   } catch (error) {

//     console.log(error);
//   }
  
// })


// router.delete('/delete/:id',async function (req,res) {
  
//   try {
//     const data = await User.findByIdAndDelete(req.params.id);
//     console.log("delele data");
  
//   } catch (error) {

//     console.log(error);
//   }
  
// });

// router.patch('/edit/:id',async function (req,res) {
  
//   try {
//     const data = await User.findByIdAndUpdate(req.params.id,req.body);
//     res.status(202).json({
//       data
//     })
//   } catch (error) {

//     console.log(error);
//   }
  
// });


router.get('/',async function (req, res) {

  try {
    const data = await User.find( {age : { $lt : 30 } });
    res.status(202).json({
      data
    })
  } catch (error) {
    console.log(error);
  }
})




// router.post('/getdata', function (req, res) {

//   console.log(req.body);

//   const data = new User({
//     "fname" : req.body.fname,
//     "lname" : req.body.lname,
//     "age" : req.body.age,
//     "city":req.body.city,
//     "gender" : req.body.gender,
//     "hobby" : req.body.hobby,
    
//   });

//   const results = data.save();
//   res.send(results);

//   res.redirect('/');
// })


// console.log("Data Inserted");

module.exports = router;
