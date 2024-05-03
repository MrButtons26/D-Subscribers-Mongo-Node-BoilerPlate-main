const express=require(`express`)
const controller=require('../controllers/controller')
const router=express.Router()

router.
route(`/`)
.get(controller.getAllSubs)

router.
route(`/names`)
.get(controller.getNames)
router.
route('/:id')
.get(controller.getId)







module.exports=router;