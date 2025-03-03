import { InputLabel, FormControl, Input, FormHelperText, Container, Box, Typography, TextField, Button, Tabs, Tab } from '@mui/material';
import React, {useState} from "react";

export const RegisterPatient = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [firstName, setFirst] = useState("");
    const [lastName, setLast] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");
    const [otherMeds, setOtherMeds] = useState("");
    const [age, setAge] = useState("");
    const [insurance, setInsurance] = useState("");
    const [milestones, setMilestones] = useState("");
    const [error, setError] = useState("");
    const handleSubmit = (event: any) => {
        event.preventDefault();
        setError("");
        if (!email || !password || !firstName || !lastName || !age || !insurance || !phoneNumber ||
            !otherMeds || !milestones) {
          setError("All fields are required.");
          return;
        }
        console.log("Email:", email, "Password:", password, "FirstName", firstName, "LastName", 
            lastName, "age", age, "insurance", insurance, "phoneNumber", phoneNumber, "otherMeds", 
            otherMeds, "milestones", milestones);
      };
    return (
        <form onSubmit={handleSubmit}>
        <TextField
            fullWidth
            label="Email"
            variant="outlined"
            margin="normal"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
            fullWidth
            label="Password"
            type="password"
            variant="outlined"
            margin="normal"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
        />
        
          <TextField
            fullWidth
            label="First Name"
            type="firstName"
            variant="outlined"
            margin="normal"
            value={firstName}
            onChange={(e) => setFirst(e.target.value)}
        />

         <TextField
            fullWidth
            label="Last Name"
            type="lastName"
            variant="outlined"
            margin="normal"
            value={lastName}
            onChange={(e) => setLast(e.target.value)}
        />
        <TextField
            fullWidth
            label="Phone Number"
            type="phoneNumber"
            variant="outlined"
            margin="normal"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
        />
         <TextField
            fullWidth
            label="Age"
            type="age"
            variant="outlined"
            margin="normal"
            value={age}
            onChange={(e) => setAge(e.target.value)}
        />
        <TextField
            fullWidth
            label="Insurance"
            type="insurance"
            variant="outlined"
            margin="normal"
            value={insurance}
            onChange={(e) => setInsurance(e.target.value)}
        />

        <TextField
            fullWidth
            label="Current Medications"
            type="otherMeds"
            variant="outlined"
            margin="normal"
            value={otherMeds}
            onChange={(e) => setOtherMeds(e.target.value)}
        />
        <TextField
            fullWidth
            label="List of Milestones"
            type="milestones"
            variant="outlined"
            margin="normal"
            value={milestones}
            onChange={(e) => setMilestones(e.target.value)}
        />
        
        {error && <Typography color="error">{error}</Typography>}
        <Button type="submit" variant="contained" color="primary" fullWidth sx={{ mt: 2 }}>
            Register
        </Button>
        </form>
    )
}