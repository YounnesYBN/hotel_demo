import LocalPhoneRoundedIcon from '@mui/icons-material/LocalPhoneRounded';
import MapRoundedIcon from '@mui/icons-material/MapRounded';
import AttachEmailRoundedIcon from '@mui/icons-material/AttachEmailRounded';
import FacebookSVG from "../../icons/facebookSVG.jsx"
import BookingSVG from '../../icons/bookingSVG.jsx';
import { Divider, Tooltip } from '@mui/material';
export default function Footer({ isSmall ,disactivatMargin}) {

    return (
        <footer style={{
            width: "100%",
            height: "fit-content",
            marginTop: disactivatMargin?"0px":"30px",
            background: "#232e39"
        }}>
            <div style={{ maxHeight: "fit-content", minHeight: !isSmall ? "fit-content" : "201px", display: !isSmall ? null : "flex", width: "100%", justifyContent: !isSmall ? null : "space-around" }}>
                {/* info---------socials------------} */}
                <div style={{ minHeight: "100%", maxHeight: "fit-content", width: !isSmall ? "100%" : "40%", display: "flex", flexDirection: "column", justifyContent: "center", padding: "5px 50px", gap: "5px" }}>
                    {/* info */}
                    <h3 style={{ fontWeight: "normal", color: "rgba(255,255,255,.5)" }}>CHEZ IMNIR</h3>
                    <div style={{ color: "white", display: "flex", alignItems: "flex-start", gap: "10px" }}><LocalPhoneRoundedIcon />0666-025512</div>
                    <div style={{ color: "white", display: "flex", alignItems: "flex-start", gap: "10px" }}><MapRoundedIcon />Talat N'Yaaqoub Ijoukak, 42155 Ijjoukak, Morocco</div>
                    <div style={{ color: "white", display: "flex", alignItems: "flex-start", gap: "10px" }}><AttachEmailRoundedIcon />chezimnir@gmail.com</div>

                </div>
                {!isSmall ? <Divider sx={{backgroundColor:"white"}} variant='middle'/> : null}
                <div style={{ minHeight: "100%", maxHeight: "fit-content", width:!isSmall?"100%": "40%", display: "flex", flexDirection: "column", padding: "5px 50px", alignItems:!isSmall?null: "flex-end" }}>
                    {/* socials */}
                    <h3 style={{ fontWeight: "normal", color: "rgba(255,255,255,.5)", paddingTop: "5px" }}>Social Media</h3>
                    <div style={{ display: "flex" }}>
                        <Tooltip title="Facebook.com/chezimnir" arrow>
                            <a href="https://web.facebook.com/chezimnir">
                                <FacebookSVG />
                            </a>
                        </Tooltip>
                        <Tooltip title="booking.com/chezimnir" arrow>
                            <a href="https://www.booking.com/hotel/ma/chez-imnir.en-gb.html?dist=0&highlighted_blocks=784007305_339583631_2_1_0&sid=e055ce78d9ca90cf71ded0fde40aaace&sb_price_type=total&hpos=1&group_children=0&sr_pri_blocks=784007305_339583631_2_1_0__2430&ucfs=1&label=metagha-link-MRMA-hotel-7840073_dev-desktop_los-1_bw-1_dow-Tuesday_defdate-1_room-0_gstadt-2_rateid-dg_aud-0_gacid-_mcid-10_ppa-0_clrid-0_ad-0_gstkid-0_checkin-20230502_&req_children=0&matching_block_id=784007305_339583631_2_1_0&dest_id=-35281&activeTab=main&srpvid=b48c4e9fea680089&checkout=2023-05-03&room1=A%2CA&all_sr_blocks=784007305_339583631_2_1_0&hapos=1&aid=2127708&group_adults=2&srepoch=1683025857&dest_type=city&type=total&checkin=2023-05-02&sr_order=popularity&no_rooms=1&req_adults=2#map_closed">
                                <BookingSVG />
                            </a>
                        </Tooltip>
                    </div>

                </div>
            </div>
            {!isSmall ? <Divider sx={{backgroundColor:"white"}} variant='middle'/> : null}
            <div style={{ maxHeight: "fit-content", minHeight: !isSmall ? "fit-content":"71px", width: "100%", textAlign:!isSmall?"start":"center", color: "white", padding: "20px 0 0 50px" }}>
                {/* //rights----------------------- */}
                ©2023 All rights reserved
            </div>
        </footer>
    )
}