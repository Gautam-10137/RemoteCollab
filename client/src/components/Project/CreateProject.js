import React from "react";
import { useState } from "react";
import { useProjects } from "../context/ProjectContext";
import { useNavigate } from "react-router-dom";
import axiosApi from "../../axios/api";
import AddTaskDialog from "../DialogBox/AddTaskDialog";
import AddMemberDialog from "../DialogBox/AddMemberDialog";

const CreateProject = () => {
  const { addProject } = useProjects();
  const [projectDetails, setProjectDetails] = useState({
    name: "",
    description: "",
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
    <div className="conatiner mx-auto mt-8 ">
      <h2 className="text-3xl font-semibold mb-4 text-center ">Create Project</h2>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 font-medium mb-2">Project Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={projectDetails.name}
            onChange={handleInputChange}
            className="w-full border border-gray-300 rounded-md p-2 focus:border-blue-500 focus:ring-blue-500"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block text-gray-700 font-medium mb-2">Description</label>
          <textarea
            id="description"
            name="description"
            value={projectDetails.description}
            onChange={handleInputChange}
            className="w-full border border-gray-300 rounded-md p-2 focus:border-blue-500 focus:ring-blue-500"
          />
        </div>

        <div className="flex justify-between">
          <button type="button" onClick={handleAddMember} className="bg-slate-600 text-white px-4 py-2 rounded hover:bg-black">
            Add Member
          </button>
          <button type="button" onClick={handleAddTask} className="bg-slate-600 text-white px-4 py-2 rounded hover:bg-black">
            Add Task
          </button>
        </div>
        <div className="flex justify-end mt-4">
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">Create Project</button>
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
    </div>
  );
};

export default CreateProject;
