import { Button, Drawer, IconButton, useMediaQuery, Avatar, Menu, MenuItem, Typography, Box, Divider } from "@mui/material";
import { useState } from "react";
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import NavBar from "./home-Component/navBar";
import { Link, usePage } from "@inertiajs/react";
import LogoutIcon from '@mui/icons-material/Logout';


export default function Header({ selected }) {

    const [openSidBar, setOpenSideBar] = useState(false);
    const [anchorEl, setAnchorEl] = useState(null);
    const [openMenu, setOpenMenu] = useState(false);
    const IsPhone = useMediaQuery('(max-width:767px)');
    const { user } = usePage().props.Auth
    const handleClose = () => {
        setAnchorEl(null);
        setOpenMenu(false)
    };

    return (
        <div style={
            {
                width: "100%",
                height: "fit-content",
                position: "fixed",
                top: "0",
                zIndex: 2,
                backgroundColor: "white"
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
                        <div style={{ display: "flex", alignItems: "center", gap: "5px" }}>

                            <IconButton onClick={() => { setOpenSideBar(true) }}>
                                <MenuRoundedIcon fontSize="large" />
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
                    {
                        user.email
                            ?   //on login
                            <>
                                <IconButton onClick={(e) => {
                                    setAnchorEl(e.currentTarget)
                                    setOpenMenu(true)
                                }}>
                                    <Avatar />
                                </IconButton>
                                {/* //--------------------------unifective code */}
                                <Menu
                                    id="basic-menu"
                                    anchorEl={anchorEl}
                                    open={openMenu}
                                    onClose={handleClose}
                                    MenuListProps={{
                                        'aria-labelledby': 'basic-button',
                                    }}
                                >
                                    <MenuItem onClick={handleClose}>
                                        <Box sx={{ my: 1.5, px: 2.5 }} >
                                            <Typography variant="subtitle2" noWrap>
                                                {user.username}
                                            </Typography>
                                            <Typography variant="body2" sx={{ color: 'gray' }} noWrap>
                                                {user.email}

                                            </Typography>
                                        </Box>
                                    </MenuItem>
                                    <Divider sx={{ borderStyle: 'dashed', backgroundColor: "rgb(239, 239, 244)" }} variant="middle"/>
                                    <MenuItem sx={{display:"flex",justifyContent:"center",gap:"5%"}}>
                                        Logout <LogoutIcon color="error"/>
                                    </MenuItem>

                                </Menu>
                            </>
                            : //on not login
                            <Button
                                variant="text"
                            >
                                <Link href="/Connect" style={{ textDecoration: "none", color: "#2196f3" }}>
                                    {
                                        IsPhone
                                            ? <h4 style={{ fontWeight: "normal" }} >Connect</h4>
                                            : <h3 style={{ fontWeight: "bold" }} >Connect</h3>
                                    }
                                </Link>
                            </Button>
                    }
                    <Button sx={{ backgroundColor: "#06D6A0", "&:hover": { backgroundColor: "#00F5D4" } }} variant="contained">

                        {
                            IsPhone
                                ? <h4 style={{ fontWeight: "normal" }} >Book now !</h4>
                                : <h3 style={{ fontWeight: "bold" }} >Book now !</h3>
                        }
                    </Button>


                </div>

            </div>
            {
                IsPhone ? (
                    <Drawer
                        open={openSidBar}
                        onClose={() => { setOpenSideBar(false) }}
                    >
                        <NavBar isSmall={IsPhone} selected={selected} CloseDrawer={setOpenSideBar} />

                    </Drawer>
                ) : (

                    <NavBar isSmall={IsPhone} selected={selected} />
                )
            }




        </div >
    )
}