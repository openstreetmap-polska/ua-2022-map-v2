import L from "leaflet";
import GithIcon from "../img/github.svg";

const icon = new L.Icon({
    iconUrl: GithIcon,
    iconRetinaUrl: GithIcon,
    iconAnchor: null,
    popupAnchor: null,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: new L.Point(30, 30),
    className: "leaflet-div-icon"
});

export { icon };