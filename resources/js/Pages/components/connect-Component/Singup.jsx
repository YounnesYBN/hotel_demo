
import { useState } from "react";
import {  TextField, InputAdornment, Button } from "@mui/material";
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import LockRoundedIcon from '@mui/icons-material/LockRounded';
import LockResetIcon from '@mui/icons-material/LockReset';
import PersonIcon from '@mui/icons-material/Person';
export default function Singup({ IsSmallLaptop, IsSmallPhone, IsTablet }) {

    const [email, SetEmail] = useState("");
    const [username, SetUsername] = useState("");
    const [password, SetPassword] = useState("");
    const [validatePassword, SetValidatePassword] = useState("");

    const EmailChange = (e) => {
        SetEmail(e.target.value);
    }
    const UsernameChange = (e) => {
        SetUsername(e.target.value);
    }
    const PasswordChange = (e) => {
        SetPassword(e.target.value)
    }

    const ValidatePasswordChange = (e) => {
        SetValidatePassword(e.target.value)
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
                height: "fit-content",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                gap: "30px",
            }}>
                <TextField
                    label={<h3 style={{ fontWeight: IsSmallPhone ? "normal" : "bold" }}>User Name</h3>}
                    sx={{ width: "100%" }} variant="outlined"
                    InputProps={{
                        endAdornment: <InputAdornment position="end"><PersonIcon fontSize='large' color='primary' /></InputAdornment>
                    }}
                    helperText="enter your user name"
                    onChange={(e) => UsernameChange(e)}
                    value={username}
                />
                <TextField
                    label={<h3 style={{ fontWeight: IsSmallPhone ? "normal" : "bold" }}>Email</h3>}
                    sx={{ width: "100%" }} variant="outlined"
                    InputProps={{
                        endAdornment: <InputAdornment position="end"><EmailRoundedIcon fontSize='large' color='primary' /></InputAdornment>
                    }}
                    helperText="enter your Email"
                    onChange={(e) => EmailChange(e)}
                    value={email}
                />

                <TextField
                    label={<h3 style={{ fontWeight: IsSmallPhone ? "normal" : "bold" }}>password</h3>}
                    sx={{ width: "100%" }} variant="outlined"
                    InputProps={{
                        endAdornment: <InputAdornment position="end"><LockRoundedIcon fontSize='large' color='primary' /></InputAdornment>
                    }}
                    helperText="enter your password"
                    onChange={(e) => PasswordChange(e)}
                    value={password}
                />

                <TextField
                    label={<h3 style={{ fontWeight: IsSmallPhone ? "normal" : "bold" }}>confirm password</h3>}
                    sx={{ width: "100%" }} variant="outlined"
                    InputProps={{
                        endAdornment: <InputAdornment position="end"><LockResetIcon fontSize='large' color='primary' /></InputAdornment>
                    }}
                    helperText=" confirm  your  password"
                    onChange={(e) => ValidatePasswordChange(e)}
                    value={validatePassword}
                />
                <Button variant='contained' sx={{ width: IsSmallPhone ? "85%" : "50%" }}>Sing up</Button>
            </form>
        </div>

    )
}
