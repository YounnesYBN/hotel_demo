
import { useState } from "react";
import { TextField, InputAdornment, Button, Snackbar, Alert, CircularProgress } from "@mui/material";
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import LockRoundedIcon from '@mui/icons-material/LockRounded';
import LockResetIcon from '@mui/icons-material/LockReset';
import PersonIcon from '@mui/icons-material/Person';
import { useForm } from '@inertiajs/react'

export default function Singup({ IsSmallLaptop, IsSmallPhone, IsTablet }) {

    const [SnakeBareState, setSnakeBare] = useState({ open: false, message: "" })
    const [prograssing, setProgresse] = useState(false)
    const { data, setData, post, errors, processing ,clearErrors,reset} = useForm({
        email: "",
        password: "",
        username: "",
        validate_password: ""
    })

    const EmailChange = (e) => {
        setData("email", e.target.value);
    }
    const UsernameChange = (e) => {
        setData("username", e.target.value);
    }
    const PasswordChange = (e) => {
        setData("password", e.target.value)
    }

    const ValidatePasswordChange = (e) => {
        setData("validate_password", e.target.value)
    }
    const OnSumbit = (e) => {
        e.preventDefault()

        post('/Singup', {
            preserveState: true,
            preserveScroll: true,
            onError: () => {
                OpenSnakeBar(true, "singup failed")
            },
            onSuccess: () => {
                OpenSnakeBar(false, "you singed Up Successfully")
                

            },
            onStart: () => {
                setProgresse(true)
            },
            onFinish: () => {
                setProgresse(false)
            }

        })
    }
    const OpenSnakeBar = (error, message) => {
        setSnakeBare({
            open: true, message: <Alert severity={error ? "error" : "success"} sx={{ display: "flex", alignItems: "center" }}>
                 {IsSmallLaptop?<h3 style={{ fontWeight: "normal" }}> {message}</h3>:<h1 style={{ fontWeight: "normal" }}> {message}</h1>}
            </Alert>
        })
    }
    const CloseSnakeBar = () => {
        setSnakeBare({ open: false, message: "" })

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
            <form
                onSubmit={OnSumbit}
                style={{
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
                    helperText={errors.username ? errors.username : "enter your user name"}
                    onChange={(e) => UsernameChange(e)}
                    value={data.username}
                    error={errors.username ? true : false}
                />
                <TextField
                    label={<h3 style={{ fontWeight: IsSmallPhone ? "normal" : "bold" }}>Email</h3>}
                    sx={{ width: "100%" }} variant="outlined"
                    InputProps={{
                        endAdornment: <InputAdornment position="end"><EmailRoundedIcon fontSize='large' color='primary' /></InputAdornment>
                    }}
                    helperText={errors.email ? errors.email : "enter your Email"}
                    onChange={(e) => EmailChange(e)}
                    value={data.email}
                    error={errors.email ? true : false}
                />

                <TextField
                    label={<h3 style={{ fontWeight: IsSmallPhone ? "normal" : "bold" }}>password</h3>}
                    sx={{ width: "100%" }} variant="outlined"
                    InputProps={{
                        endAdornment: <InputAdornment position="end"><LockRoundedIcon fontSize='large' color='primary' /></InputAdornment>
                    }}
                    helperText={errors.password ? errors.password : "enter your password"}
                    onChange={(e) => PasswordChange(e)}
                    value={data.password}
                    type="password"
                    error={errors.password ? true : false}
                />

                <TextField
                    label={<h3 style={{ fontWeight: IsSmallPhone ? "normal" : "bold" }}>confirm password</h3>}
                    sx={{ width: "100%" }} variant="outlined"
                    InputProps={{
                        endAdornment: <InputAdornment position="end"><LockResetIcon fontSize='large' color='primary' /></InputAdornment>
                    }}
                    helperText={errors.validate_password ? errors.validate_password : " confirm  your  password"}
                    onChange={(e) => ValidatePasswordChange(e)}
                    value={data.validate_password}
                    type="password"
                    error={errors.validate_password ? true : false}
                />
                <Button type="submit" variant='contained' disabled={processing} sx={{ width: IsSmallPhone ? "85%" : "50%" }}>{prograssing ? <CircularProgress size={"2rem"} /> : " Sing up"}</Button>
            </form>

            {/* //-------------------uniffective code */}

            <Snackbar
                open={SnakeBareState.open}
                autoHideDuration={3000}
                onClose={CloseSnakeBar}
                anchorOrigin={{ vertical: 'top', horizontal: IsSmallPhone ? 'center' : "right" }}
            >
                {SnakeBareState.message}
            </Snackbar>
        </div >

    )
}
