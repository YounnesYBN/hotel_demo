

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import { useState } from "react";
import { Typography, useMediaQuery } from "@mui/material";
import Login from './components/connect-Component/Login';
import Singup from './components/connect-Component/Singup';

const getSelectedPart =()=>{
    return localStorage.getItem("selected");
}

export default function Connect() {
    const [value, setValue] = useState(getSelectedPart()==null?"login":getSelectedPart());
    const IsTablet = useMediaQuery('(max-width:767px)');
    const IsSmallPhone = useMediaQuery('(max-width:459px)');
    const IsMoreSmallPhone = useMediaQuery('(max-width:321px)');
    const smallLaptop = useMediaQuery('(max-width:1018px)');

    const handleChange = (event, newValue) => {

        setValue(newValue);
        localStorage.setItem("selected",newValue)
    };

    const tapStyle = {
        width: "50%",

    }

    return (
        <div
            style={{
                width: "100%",
                minHeight: "100vh",
                maxHeight: "fit-content",
                display: "flex",
                alignItems: "center",
                backgroundColor: IsSmallPhone ? "white" : "rgb(239, 239, 244)"

            }}>

            <section style={
                {
                    width: "100%",
                    height: "fit-content",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    paddingBlock: "2%"
                }
            }>
                <div style={
                    {
                        width: IsSmallPhone ? "100%" : IsTablet ? "80%" : smallLaptop ? "65%" : "50%",
                        height: "fit-content",
                        paddingTop: "2%",
                        backgroundColor: "white",
                        borderRadius: "5px",
                        boxShadow: IsSmallPhone ? null : "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"
                    }
                }>
                    <div style={{            //brand
                        width: "100%",
                        display: "flex",
                        justifyContent: "center"
                    }}>
                        <Typography variant={IsMoreSmallPhone ? "h6" : IsTablet ? "h4" : smallLaptop ? "h4" : "h3"} >CHEZ IMNIR</Typography>

                    </div>


                    <Tabs
                        sx={{
                            width: "100%",
                            margin: "1%"
                        }}
                        value={value}
                        onChange={handleChange}
                        aria-label="basic tabs example"
                        centered
                    >
                        <Tab
                            label="login"
                            id="loginButton"
                            aria-controls="loginComponent"
                            value="login"
                            style={{ ...tapStyle }}
                        />
                        <Tab
                            label="singup"
                            id="singupButton"
                            aria-controls="SingupComponent"
                            value="singup"
                            style={{ ...tapStyle }}

                        />
                    </Tabs>
                    <div style={{
                        width: "100%",
                        height: "fit-content",
                        marginTop: "2%",
                        padding: "5%"

                    }}>
                        {
                            value == "login" ? <Login IsTablet={IsTablet} IsSmallPhone={IsSmallPhone} IsSmallLaptop={smallLaptop} /> : <Singup IsTablet={IsTablet} IsSmallPhone={IsSmallPhone} IsSmallLaptop={smallLaptop} />
                        }


                    </div>

                </div>
            </section>
        </div>
    )

}