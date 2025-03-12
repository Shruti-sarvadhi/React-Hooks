import React, { useState, useRef } from "react";
import { Container, Typography, Paper, Box, Button, TextField } from "@mui/material";
import { useAppSelector } from "@/store";
import { useOutsideClick } from "@/hooks/useOutsideClick";
import { useNotificationContext } from "@/context/NotificationContext";

const Profile: React.FC = () => {
  // Get user details from Redux (if available)
  const user = useAppSelector((state) => state.user.auth.user);

  // Local state to hold displayed profile info, initially from Redux
  const [localUser, setLocalUser] = useState(user);

  // State to toggle edit mode
  const [isEditing, setIsEditing] = useState(false);

  // Local state for editable fields, pre-filled with current user values
  const [editData, setEditData] = useState({
    username: user?.username || "",
    email: user?.email || "",
  });

  // Ref for the editing area to detect outside clicks
  const editRef = useRef<HTMLDivElement>(null);

  // Use the custom hook to exit edit mode when clicking outside
  useOutsideClick(editRef, () => {
    if (isEditing) {
      setIsEditing(false);
    }
  });

  // Get addNotification function from NotificationContext
  const { addNotification } = useNotificationContext();

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditData({
      ...editData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    // Simulate updating the profile by updating the local state
    setLocalUser({
      ...localUser!,
      username: editData.username,
      email: editData.email,
    });
    setIsEditing(false);
    // Show a success notification using the NotificationContext
    addNotification({ type: "success", message: "Profile updated successfully!" });
  };

  const handleCancel = () => {
    setIsEditing(false);
    // Optionally, reset the edit data to the current profile values
    setEditData({
      username: localUser?.username || "",
      email: localUser?.email || "",
    });
  };

  return (
    <Container maxWidth="sm">
      <Paper sx={{ p: 4, mt: 4 }}>
        <Typography variant="h4" gutterBottom>
          Profile
        </Typography>
        {localUser ? (
          <Box>
            {!isEditing ? (
              <>
                <Typography variant="body1">
                  <strong>Username:</strong> {localUser.username}
                </Typography>
                <Typography variant="body1">
                  <strong>Email:</strong> {localUser.email}
                </Typography>
                <Button variant="contained" color="primary" sx={{ mt: 2 }} onClick={handleEditClick}>
                  Edit Profile
                </Button>
              </>
            ) : (
              // Editing mode: fields become editable. Wrapped in a container with a ref for outside click detection.
              <Box ref={editRef}>
                <TextField
                  name="username"
                  label="Username"
                  fullWidth
                  margin="normal"
                  value={editData.username}
                  onChange={handleChange}
                />
                <TextField
                  name="email"
                  label="Email"
                  fullWidth
                  margin="normal"
                  value={editData.email}
                  onChange={handleChange}
                />
                <Box sx={{ mt: 2, display: "flex", justifyContent: "space-between" }}>
                  <Button variant="contained" color="primary" onClick={handleSave}>
                    Save
                  </Button>
                  <Button variant="outlined" color="secondary" onClick={handleCancel}>
                    Cancel
                  </Button>
                </Box>
              </Box>
            )}
          </Box>
        ) : (
          <Typography variant="body1">No user information available.</Typography>
        )}
      </Paper>
    </Container>
  );
};

export default Profile;
