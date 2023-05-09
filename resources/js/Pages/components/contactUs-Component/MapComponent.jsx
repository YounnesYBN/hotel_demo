import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet"
import LocalHotelRoundedIcon from '@mui/icons-material/LocalHotelRounded';

const MapComponent = ({ zoom }) => {
    return (
        <MapContainer style={{ width: "100%", height: "100%", zIndex: 0, borderRadius: "5px" }} center={[30.987464054535906, -8.182425564904193]} zoom={zoom} scrollWheelZoom={true}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[30.987464054535906, -8.182425564904193]}>
                <Popup>
                    <div style={{ display: "flex" }}>
                        CHEZ IMNIR
                        <LocalHotelRoundedIcon color="primary" />
                    </div>
                </Popup>
            </Marker>
        </MapContainer>
    )
}

export default MapComponent