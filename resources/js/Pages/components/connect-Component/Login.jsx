
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import LockRoundedIcon from '@mui/icons-material/LockRounded';
import {  TextField, InputAdornment, Button } from "@mui/material";
import { useState } from 'react';

export default function Login({ IsSmallLaptop, IsSmallPhone, IsTablet }) {

    const [email, SetEmail] = useState("");
    const [password, SetPassword] = useState("");

    const EmailChange = (e) => {
        SetEmail(e.target.value);
    }
    const PasswordChange = (e) => {
        SetPassword(e.target.value)
    }
    return (
        <div
            role="tabpanel"

            style={{
                width: "100%",
                maxHeight: "fit-content",
                minHeight: "300px",
                display: "flex",
                justifyContent: "center",
            }}
        >
            <form style={{
                width: IsTablet ? "100%" : IsSmallLaptop ? "80%" : "70%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "5%",
            }}>
                <TextField
                    label={<h3 style={{ fontWeight: IsSmallPhone ? "normal" : "bold" }}>Email</h3>}
                    sx={{ width: "100%" }} variant="outlined"
                    InputProps={{
                        endAdornment: <InputAdornment position="end"><EmailRoundedIcon fontSize='large' color='primary' /></InputAdornment>
                    }}
                    helperText="enter your valid Email"
                    onChange={(e) => EmailChange(e)}
                    value={email}
                />

                <TextField
                    label={<h3 style={{ fontWeight: IsSmallPhone ? "normal" : "bold" }}>password</h3>}
                    sx={{ width: "100%" }} variant="outlined"
                    InputProps={{
                        endAdornment: <InputAdornment position="end"><LockRoundedIcon fontSize='large' color='primary' /></InputAdornment>
                    }}
                    helperText="enter your valid password"
                    onChange={(e) => PasswordChange(e)}
                    value={password}
                    type='password'
                />
                <Button variant='contained' sx={{ width: IsSmallPhone ? "85%" : "50%" }}>Log in</Button>
            </form>
        </div>

    )
}