import { Button, Chip, Divider, Drawer, IconButton, Menu, useMediaQuery } from "@mui/material";
import { useState } from "react";
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import NavBar from "./home-Component/navBar";

export default function Header({selected}) {
    
    const [anchorEl, setAnchorEl] = useState(null);
    const [openSidBar,setOpenSideBar] = useState(false);
    const IsPhone = useMediaQuery('(max-width:600px)');
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div style={
            {
                width: "100%",
                height: "fit-content",
                position : "fixed",
                top:"0",
                zIndex : 2,
                backgroundColor : "white"
            }
        } >
            {/* parent one  */}
            <div id="first-con" style={
                {
                    width: "100%",
                    minHeight: "70px",
                    maxHeight: "fit-content",
                    padding: "4px 0px 4px 10px",
                    display: "flex",
                    justifyContent: "space-between",
                    borderBottom: "1px solid #efeff4",
                    alignItems: "center",

                }
            }>
                {/* chiled one  */}
                {
                    IsPhone ? (
                        <div style={{ display: "flex", alignItems: "center",gap:"5px" }}>

                            <IconButton onClick={()=>{setOpenSideBar(true)}}>
                                <MenuRoundedIcon fontSize="large"/>
                            </IconButton>
                            <h3 style={
                                {
                                    fontWeight: "normal",
                                    textTransform: "uppercase",
                                    textAlign: "center"

                                }}>
                                Chez Imnir

                            </h3>
                        </div>

                    ) : (

                        <h1 style={
                            {
                                fontWeight: "normal",
                                textTransform: "uppercase",
                                textAlign: "center"

                            }
                        }>
                            Chez Imnir
                        </h1>
                    )
                }
                {/* chiled two  */}

                <div style={
                    {
                        minHeight: "100%",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        padding: "0px 10px 0 0",
                        gap: "10px",
                        flexWrap: "wrap-reverse"

                    }
                }>
                    <Button
                        variant={open ? "contained" : "text"}
                        id="basic-button"
                        aria-haspopup="true"
                        onClick={handleClick}
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-expanded={open ? 'true' : undefined}

                    >
                        <h3 style={{ fontWeight: "bold" }} >Connect</h3>
                    </Button>
                    <Button sx={{ backgroundColor: "#06D6A0", "&:hover": { backgroundColor: "#00F5D4" } }} variant="contained"><h3 style={{ fontWeight: "bold" }}>Book now !</h3 ></Button>

                    <Menu
                        sx={{ marginTop: "10px" }}
                        id="basic-menu"
                        open={open}
                        onClose={handleClose}
                        anchorEl={anchorEl}

                    >
                        <div style={{ height: "100px", maxHeight: "fit-content", width: "fit-content", padding: "10px", display: "flex", gap: "5px", alignItems: "center", flexWrap: "wrap" }}>
                            <Button variant="outlined" id="test" sx={{ "&:hover": { transform: "translateY(-5px)", transition: "200ms" }, height: "fit-content" }}>LOGIN</Button>
                            <Divider orientation="vertical" flexItem variant="fullWidth" >or</Divider>
                            <Button variant="outlined" sx={{ "&:hover": { transform: "translateY(-5px)", transition: "200ms" }, height: "fit-content" }}>SINGUP</Button>
                        </div>

                    </Menu>
                </div>

            </div>
            {
                IsPhone ? (
                    <Drawer
                        open = {openSidBar}
                        onClose={()=>{setOpenSideBar(false)}}
                    >
                        <NavBar isSmall={IsPhone} selected={selected} />

                    </Drawer>
                ) : (

                    <NavBar isSmall={IsPhone} selected={selected} />
                )
            }

        </div >
    )
}