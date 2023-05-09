import { LocalPhoneRounded } from "@mui/icons-material";
import { Divider, IconButton, useMediaQuery } from "@mui/material";
import AttachEmailRoundedIcon from '@mui/icons-material/AttachEmailRounded';
import MapRoundedIcon from '@mui/icons-material/MapRounded';


const ContactComponent = () => {
    const IsPhone = useMediaQuery('(max-width:767px)');
    const contactChildrens = {
        minHeight: "33.33%",
        maxHeight: "fit-Content",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "10px 30px"

    }
    return (
        <div style={
            {
                minHeight: "100%",
                maxHeight: "fit-Content",
                width: "100%",

                // borderRadius: ContactBreakingPoint ? "5px 5px 0px 0px " : "5px 0 0 5px",
            }
        }>
            {/* //info : phone adress email */}
            <div style={{ ...contactChildrens, }}>
                <div>
                    {/* info phone */}
                    <h4 style={{ color: "#606060", fontWeight: "normal" }}>Telephone Number</h4>
                    <span style={{ color: "black" ,fontSize:IsPhone?"12px":null}}>0666-025512</span>
                </div>

                <IconButton>
                    <LocalPhoneRounded sx={{ color: "#06D6A0" }} fontSize={IsPhone ? "medium":"large"} />
                </IconButton>

            </div>
            <Divider variant="middle" />
            <div style={{ ...contactChildrens, }}>
                <div style={{ maxWidth: "80%" }}>
                    {/* info adress */}
                    <h4 style={{ color: "#606060", fontWeight: "normal" }}>Address</h4>
                    <span style={{ color: "black" ,fontSize:IsPhone?"12px":null}}>
                        Talat N'Yaaqoub Ijoukak, 42155 Ijjoukak, Morocco</span>
                </div>

                <IconButton>
                    <MapRoundedIcon sx={{ color: "#06D6A0" }} fontSize={IsPhone ? "medium":"large"} />
                </IconButton>

            </div>
            <Divider variant="middle" />
            <div style={{ ...contactChildrens, }}>
                <div >
                    {/* info email */}
                    <h4 style={{ color: "#606060", fontWeight: "normal" }}>Email</h4>
                    <span style={{ color: "black" ,fontSize:IsPhone?"12px":null}}>chezimnir@gmail.com</span>
                </div>

                <IconButton>
                    <AttachEmailRoundedIcon sx={{ color: "#06D6A0" }} fontSize={IsPhone ? "medium":"large"} />
                </IconButton>

            </div>
        </div>


    )
}


export default ContactComponent