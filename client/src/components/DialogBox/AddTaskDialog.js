import React from "react";

const AddTaskDialog = ({
  project,
  taskDetails,
  setTaskDetails,
  handleAddTaskSubmit,
  setShowAddTaskDialog,
}) => {
  return (
    <>
      <div>
        <div>
          <div>
            <h3>Add New Task</h3>
            <form
              onSubmit={(e) => {
                handleAddTaskSubmit(e);
              }}
            >
              <div>
                <label>Task Title</label>
                <input
                  type="text"
                  value={taskDetails.title}
                  onChange={(e) =>
                    setTaskDetails({ ...taskDetails, title: e.target.value })
                  }
                  required
                />
              </div>
              <div>
                <label>Description</label>
                <textarea
                  value={taskDetails.description}
                  onChange={(e) =>
                    setTaskDetails({
                      ...taskDetails,
                      description: e.target.value,
                    })
                  }
                />
              </div>

              <div>
                <label>Status</label>
                <select
                  value={taskDetails.status}
                  onChange={(e) =>
                    setTaskDetails({ ...taskDetails, status: e.target.value })
                  }
                >
                  <option value="to-do">To-do</option>
                  <option value="in-progress">In-progress</option>
                  <option value="completed">Completed</option>
                </select>
              </div>
              <div>
                <label>Priority</label>
                <select
                  value={taskDetails.priority}
                  onChange={(e) =>
                    setTaskDetails({
                      ...taskDetails,
                      priority: e.target.value,
                    })
                  }
                >
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                </select>
              </div>

              <div>
                <label>Due Date</label>
                <input
                  type="date"
                  value={taskDetails.dueDate}
                  onChange={(e) =>
                    setTaskDetails({
                      ...taskDetails,
                      dueDate: e.target.value,
                    })
                  }
                />
              </div>

              {/* 
          <div >
            <label >
              Assign To
            </label>
            <select
              multiple
              value={taskDetails.assignedTo}
              onChange={(e) =>
                setTaskDetails({
                  ...taskDetails,
                  assignedTo: Array.from(
                    e.target.selectedOptions,
                    (option) => option.value
                  ),
                })
              }
              
            >
              {project.members.map((member) => (
                <option key={member.userId._id} value={member.userId._id}>
                  {member.userId.name}
                </option>
              ))}
            </select>
          </div> */}

              <div>
                <button
                  type="button"
                  onClick={() => setShowAddTaskDialog(false)}
                >
                  Cancel
                </button>
                <button type="submit">Add Task</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddTaskDialog;
