const express= require('express');
const TaskController=require('../controller/TaskController');

const router=express();


router.post('/:taskId/assignee',TaskController.addAssignee);
router.delete('/:taskId/assignee',TaskController.removeAssignee);
router.get('/assigned-to/:userId',TaskController.fetchTasks);
router.put('/update/:taskId',TaskController.updateTask);
router.delete('/:taskId',TaskController.removeTask);

module.exports=router;