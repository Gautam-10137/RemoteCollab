import React from "react";
import { useState } from "react";
import { useProjects } from "../context/ProjectContext";
import { useNavigate } from "react-router-dom";
import axiosApi from "../../axios/api";
import AddTaskDialog from "../DialogBox/AddTaskDialog";
import AddMemberDialog from "../DialogBox/AddMemberDialog";
import TaskDetailDialog from "../DialogBox/TaskDetailDialog";

const CreateProject = () => {
  const { addProject } = useProjects();
  const [projectDetails, setProjectDetails] = useState({
    name: "",
    description: "",
    category:"Technical",
    members: [],
    tasks: [],

  });

  const Navigate = useNavigate();

  const [showAddMemberDialog, setShowAddMemberDialog] = useState(false);
  const [showAddTaskDialog, setShowAddTaskDialog] = useState(false);
  const [newMemberEmail, setNewMemberEmail] = useState("");
  const [newMemberRole, setNewMemberRole] = useState("member");
  const [selectedTask, setSelectedTask] = useState(null);
  const [taskDetails, setTaskDetails] = useState({
    title: "",
    description: "",
    status: "to-do",
    priority: "medium",
    dueDate: "",
    assignedTo: [],
  });

  const handleSubmit = (e) => {
    e.preventDefault();
   
    try {
      addProject(projectDetails);
      Navigate("/dashboard");
    } catch (err) {
      console.error("Error creating project:", err.message);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProjectDetails({ ...projectDetails, [name]: value });
  };

  const handleTaskClick = (task) => {
    setSelectedTask(task);
  };

  const handleAddMember = () => {
    setShowAddMemberDialog(true);
  };

  const handleAddTask = () => {
    setShowAddTaskDialog(true);
  };

  const handleAddMemberSubmit = async (e) => {
    e.preventDefault();
    try {
      // here this below line is verifying the email
      const res = await axiosApi.get(`user/detail/${newMemberEmail}`);
      const newUser = res.data.user;
      projectDetails.members.push({ userId: newUser, role: newMemberRole });
      setProjectDetails({ ...projectDetails });
      setShowAddMemberDialog(false);
      setNewMemberEmail("");
      setNewMemberRole("member");
    } catch (err) {
      console.log("Error adding member");
    }
  };

  const handleAddTaskSubmit = async (e) => {
    e.preventDefault();
    try {
      const newTask = { ...taskDetails };
      projectDetails.tasks.push(newTask);
      setShowAddTaskDialog(false);
      setTaskDetails({
        title: "",
        description: "",
        status: "to-do",
        priority: "medium",
        dueDate: "",
        assignedTo: [],
      });
    } catch (err) {
      console.error("error adding task", err);
    }
  };

  const handleCloseDialog = () => {
    setSelectedTask(null);
  };

  return (
    <>
    <div className="flex items-center justify-center md:mt-[40px] sm:mt-[20px]">
    
    <div className=" w-[433px] h-[629px]" style={{backgroundColor: '#3f5b94'}}>
      <h2 className="text-4xl font-bold mb-4 text-center mt-14 p-4 text-white">Create Project</h2>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
        <div className="mb-4">
          <label htmlFor="name" className="block text-white font-medium mb-2 ml-4 ">Project Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={projectDetails.name}
            onChange={handleInputChange}
            className=" border border-gray-300 rounded-md p-2 ml-4 w-[400px]"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-white font-medium mb-2 ml-4">Description</label>
          <textarea
            id="description"
            name="description"
            value={projectDetails.description}
            onChange={handleInputChange}
            className="w-full border border-gray-300 rounded-md p-2 ml-4 w-[400px]"
          />
        </div>

        <div className="mb-4">
        <label className="block text-white font-medium mb-2 ml-4">Category</label>
            <select
              value={projectDetails.category}
              name="category"
              onChange={handleInputChange}
              className="ml-4 w-[400px] rounded-md"
            >
              <option value="Technical">Technical</option>
              <option value="Human Resource">Human Resource</option>
              <option value="Event Management">Event Management</option>
              <option value="Marketing & Sales">Marketing & Sales</option>
              <option value="Legal">Legal</option>
            </select>

        </div>

        <div className="flex justify-between  ml-4 w-[400px] mt-10">
          <button type="button" onClick={handleAddMember} className="text-black px-4 py-2 rounded hover:bg-black" style={{backgroundColor: '#FFDB58'}} >
            Add Member
          </button>
          <button type="button" onClick={handleAddTask} className="bg-slate-600 text-black px-4 py-2 rounded hover:bg-black" style={{backgroundColor: '#FFDB58'}}>
            Add Task
          </button>
        </div>
        <div className="flex justify-end mt-10 items-center justify-center">
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 rounded-">Create Project</button>
        </div>
      </form>

      {showAddMemberDialog && (
        <AddMemberDialog
          handleAddMemberSubmit={handleAddMemberSubmit}
          newMemberEmail={newMemberEmail}
          setNewMemberEmail={setNewMemberEmail}
          newMemberRole={newMemberRole}
          setNewMemberRole={setNewMemberRole}
          setShowAddMemberDialog={setShowAddMemberDialog}
        />
      )}
      {showAddTaskDialog && (
        <AddTaskDialog
          project={projectDetails}
          taskDetails={taskDetails}
          setTaskDetails={setTaskDetails}
          setShowAddTaskDialog={setShowAddTaskDialog}
          handleAddTaskSubmit={handleAddTaskSubmit}
        />
      )}
      {selectedTask && (
        <TaskDetailDialog task={selectedTask} onClose={handleCloseDialog} />
      )}
    </div>

    <div className="">
    <img
              className="bg-gradient-to-r from-pink-400 to-yellow-200 w-[433px] h-[629px]"
              src={require("../../asset/createProject.png")}
              alt="createProjectimage"
            />
    </div>
    </div>
    </>
  );
};

export default CreateProject;
