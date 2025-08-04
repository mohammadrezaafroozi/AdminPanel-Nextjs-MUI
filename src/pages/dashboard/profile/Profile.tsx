import React, { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { Avatar, Box, Button, Checkbox, FormControlLabel, Paper, TextField, Typography } from "@mui/material";

const Profile: React.FC = () => {
  const { data: session } = useSession();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    receiveEmails: false,
  });

  useEffect(() => {
    if (session?.user) {
      const nameParts = session.user.name?.split(" ") || [];
      setFormData((prev) => ({
        ...prev,
        firstName: nameParts[0] || "",
        lastName: nameParts.slice(1).join(" ") || "",
        email: session.user.email || "",
      }));
    }
  }, [session]);

  const handleFormChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, checked, type } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Form submitted:", formData);
    setFormData((prev) => ({ ...prev, password: "", confirmPassword: "" }));
  };

  return (
    <div className="flex justify-center ml-[400px]">
      <Box  sx={{ height: 800, width: 800, }}>
      <Typography variant="h3" gutterBottom>Profile</Typography>
      <Typography variant="h5" gutterBottom>
        Hey {session?.user?.name || "User"}, welcome to your profile 👋
      </Typography>

      <Paper sx={{ padding: 3, maxWidth: 400 }}>
        <Box display="flex" flexDirection="column" alignItems="center" mb={2}>
          <Avatar
            sx={{ height: 100, width: 100, marginBottom: 2 }}
            src={session?.user?.image || "/default-avatar.png"}
          />
        </Box>

        <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
          <TextField label="First Name" name="firstName" value={formData.firstName} onChange={handleFormChange} />
          <TextField label="Last Name" name="lastName" value={formData.lastName} onChange={handleFormChange} />
          <TextField type="email" label="Email" name="email" value={formData.email} onChange={handleFormChange} />
          <TextField type="password" label="Password" name="password" value={formData.password} onChange={handleFormChange} />
          <TextField type="password" label="Confirm Password" name="confirmPassword" value={formData.confirmPassword} onChange={handleFormChange} />

          <FormControlLabel
            control={<Checkbox name="receiveEmails" checked={formData.receiveEmails} onChange={handleFormChange} />}
            label="Receive sales analytics emails"
          />

          <Button type="submit" variant="contained" color="primary">
            Save Changes
          </Button>
        </form>
      </Paper>
    </Box>
    </div>
  );
};

export default Profile;
