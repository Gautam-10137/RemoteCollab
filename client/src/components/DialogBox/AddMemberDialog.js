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
    <>
      <div>
        <h3>Add New Member</h3>
        <form onSubmit={handleAddMemberSubmit}>
          <div>
            <label>Member Email</label>
            <input
              type="email"
              value={newMemberEmail}
              onChange={(e) => setNewMemberEmail(e.target.value)}
              required
            />
          </div>
          <div>
            <label>Member Role</label>
            <select
              value={newMemberRole}
              onChange={(e) => setNewMemberRole(e.target.value)}
            >
              <option value="admin">Admin</option>
              <option value="manager">Manager</option>
              <option value="member">Member</option>
            </select>
          </div>
          <div>
            <button type="button" onClick={() => setShowAddMemberDialog(false)}>
              Cancel
            </button>
            <button type="submit">Add Member</button>
          </div>
        </form>
      </div>
    </>
  );
};


export default AddMemberDialog;