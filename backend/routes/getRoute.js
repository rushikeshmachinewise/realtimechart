const express =require('express');
const UserModel=require('../models/Chart')
const router=express.Router();
const {getchartController,
        postchartController,
        postrealchartController,
        postrealchartController2
}=require('../controllers/getChartcontroller')


// router.get("/charts", (req, res) => {
//     UserModel.find().then(
//         charts => res.json(charts)
//     ).catch(
//         (err) => {
//             console.log(err);
//         }
//     )
// });
router.get("/charts",getchartController);
router.post("/chartsend",postchartController );
router.post("/sendrealchart",postrealchartController)
router.post("/sendrealchart2",postrealchartController2)

module.exports=router;