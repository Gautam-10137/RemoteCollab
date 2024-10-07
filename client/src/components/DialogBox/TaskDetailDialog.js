import React from 'react'

const TaskDetailDialog = ({ task, onClose }) => {
    return (
        <div >
          <div >
            <h3 >{task.title}</h3>
            <p><strong>Description:</strong></p>
            <p>{task.description}</p>
            <p><strong>Priority:</strong> {task.priority}</p>
            <p ><strong>Status:</strong> {task.status}</p>
            <p ><strong>Assigned To:</strong></p>
            <ul >
              {task.assignedTo.map((user, index) => (
                <li key={index}>
                  {user.name}
                </li>
              ))}
            </ul>
            <p ><strong>Due Date:</strong> {task.dueDate}</p>
            <div >
              <button
                onClick={onClose}
                
              >
                Close
              </button>
            </div>
          </div>
        </div>
      );
}

export default TaskDetailDialog