import { Button, TextField, Typography } from "@mui/material"


const MessageComponent = () => {
    return (
        <div style={{
            width: "100%",
            minHeight: "100%",
            maxHeight: "fit-content",
            padding: "20px 20px 20px 20px ",

        }}>
            <Typography variant="h6" sx={{ marginBottom: "15px" }}>Send an Enquiry</Typography>
            <div style={{ width: "100%", marginBottom: "15px" }}>
                <TextField id="outlined-basic" label="Name" variant="outlined" sx={{ width: "100%" }} color="" />

            </div>
            <div style={{ width: "100%", marginBottom: "15px" }}>
                <TextField id="outlined-basic" label="telephon" variant="outlined" sx={{ width: "100%" }} />

            </div>
            <div style={{ width: "100%", marginBottom: "15px" }}>
                <TextField id="outlined-basic" label="Email" variant="outlined" sx={{ width: "100%" }} />

            </div>

            <div style={{ width: "100%", marginBottom: "15px" }}>
                <TextField id="outlined-basic" label="Message" variant="outlined" sx={{ width: "100%" }}
                    multiline={true}
                    rows={8}
                    maxRows={8}

                />
            </div>
            <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>

                <Button sx={{ width: "80%" }} variant="contained">SEND</Button>
            </div>
        </div>
    )
}



export default MessageComponent;