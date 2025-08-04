import React, { useState } from "react";
import { Button, Switch, FormControlLabel, Typography } from "@mui/material";

const Settings: React.FC = () => {
  const [settings, setSettings] = useState({
    revenue: true,
    profit: true,
    orders: true,
    customers: true,
  });

  const handleToggle = (key: keyof typeof settings) => {
    setSettings((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const handleSave = () => {
    console.log("Saved settings:", settings);
    alert("Settings saved!");
    // ✅ اینجا میتونی درخواست به سرور بفرستی
  };

  return (
    <div style={{ maxWidth: 400, margin: "40px auto", textAlign: "center" }}>
      <Typography variant="h4" gutterBottom>
        Settings
      </Typography>

      {Object.keys(settings).map((key) => (
        <FormControlLabel
          key={key}
          control={
            <Switch
              checked={settings[key as keyof typeof settings]}
              onChange={() => handleToggle(key as keyof typeof settings)}
            />
          }
          label={key.charAt(0).toUpperCase() + key.slice(1)}
        />
      ))}

      <div style={{ marginTop: 20 }}>
        <Button variant="contained" color="primary" onClick={handleSave}>
          Save Settings
        </Button>
      </div>
    </div>
  );
};

export default Settings;
