
import EmailRoundedIcon from '@mui/icons-material/EmailRounded';
import LockRoundedIcon from '@mui/icons-material/LockRounded';
import { TextField, InputAdornment, Button, CircularProgress, Alert, Snackbar } from "@mui/material";
import { useState } from 'react';
import { useForm, usePage } from '@inertiajs/react';

export default function Login({ IsSmallLaptop, IsSmallPhone, IsTablet }) {
    const [SnakeBareState, setSnakeBare] = useState({ open: false, message: "" })
    const [prograssing, setProgresse] = useState(false)
    // const 
    const { data, post, errors, processing, setData } = useForm({
        email: "",
        password: "",
    })
    const { Flash } = usePage().props;



    const EmailChange = (e) => {
        setData("email", e.target.value);
    }
    const PasswordChange = (e) => {
        setData("password", e.target.value)
    }
    const onSubmit = (e) => {
        e.preventDefault()

        post('/Login', {
            preserveState: true,
            preserveScroll: true,
            onError: () => {
                OpenSnakeBar(true, "login failed")
            },
            onSuccess: () => {

                OpenSnakeBar(Flash.error, Flash.message)


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
                <h3 style={{ fontWeight: "normal" }}> {message}</h3>
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
                onSubmit={onSubmit}
                style={{
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
                    error={errors.email ? true : false}
                    helperText={errors.email ? errors.email : "enter your valid Email"}
                    onChange={(e) => EmailChange(e)}
                    value={data.email}
                />

                <TextField
                    label={<h3 style={{ fontWeight: IsSmallPhone ? "normal" : "bold" }}>password</h3>}
                    sx={{ width: "100%" }} variant="outlined"
                    InputProps={{
                        endAdornment: <InputAdornment position="end"><LockRoundedIcon fontSize='large' color='primary' /></InputAdornment>
                    }}
                    error={errors.password ? true : false}

                    helperText={errors.password ? errors.password : "enter your valid password"}
                    onChange={(e) => PasswordChange(e)}
                    value={data.password}
                    type='password'
                />
                <Button type='submit' disabled={processing} variant='contained' sx={{ width: IsSmallPhone ? "85%" : "50%" }}>{prograssing ? <CircularProgress size={"2rem"} /> : " Log In"}</Button>

                {Flash.error ? (
                    <Alert sx={{ display: "flex", justifyContent: "center" }} severity='error'>
                        {Flash.message}
                    </Alert>
                ) : null}
            </form>

            {/* /---------------uniffective code------------------ */}
            <Snackbar
                open={SnakeBareState.open}
                autoHideDuration={6000}
                onClose={CloseSnakeBar}
                anchorOrigin={{ vertical: 'top', horizontal: IsSmallPhone ? 'center' : "right" }}
            >
                {SnakeBareState.message}
            </Snackbar>
        </div>

    )
}