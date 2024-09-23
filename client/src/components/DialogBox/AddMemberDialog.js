import React from "react";

const AddMemberDialog = ({
  handleAddMemberSubmit,
  newMemberEmail,
  setNewMemberEmail,
  newMemberRole,
  setNewMemberRole,
  setShowAddMemberDialog,
}) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50 bg-black bg-opacity-50 ">

      <div className="bg-slate-100 p-8 rounded-xl shadow-lg ">
        <h3 className="text-2xl font-semibold mb-4 text-center ">Add New Member</h3>
        <form onSubmit={handleAddMemberSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium  mb-2">Member Email</label>
            <input
              type="email"
              value={newMemberEmail}
              onChange={(e) => setNewMemberEmail(e.target.value)}
              className="w-full border border-gray-400 rounded-md p-2 focus:border-blue-500 focus:ring-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Member Role</label>
            <select
              value={newMemberRole}
              onChange={(e) => setNewMemberRole(e.target.value)}
              className="w-full border border-gray-400 rounded-md p-2 focus:border-blue-500 focus:ring-blue-500"
            >
              <option value="admin">Admin</option>
              <option value="manager">Manager</option>
              <option value="member">Member</option>
            </select>
          </div>
          <div className="flex justify-end mt-11 space-x-4">
            <button type="button" onClick={() => setShowAddMemberDialog(false)} className="bg-red-500 text-white px-4 py-2 rounded mr-2 hover:bg-red-800">
              Cancel
            </button>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-800">Add Member</button>
          </div>
        </form>
      </div>
    </div>
  );
};


export default AddMemberDialog;