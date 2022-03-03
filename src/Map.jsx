import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, GeoJSON, useMap, LayersControl, CircleMarker } from 'react-leaflet';
import MarkerClusterGroup from 'react-leaflet-markercluster';
import L from "leaflet";

const position = [51.505, -0.09];

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
  iconUrl: require('leaflet/dist/images/marker-icon.png'),
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});

function LocationMarker() {
  const [position, setPosition] = useState(null);

  const map = useMap();

  useEffect(() => {
    map.locate().on("locationfound", function (e) {
      setPosition(e.latlng);
      map.flyTo(e.latlng, map.getZoom());
    });
  }, [map]);

  return position === null ? null : (
    <CircleMarker
      center={position}
      pathOptions={{ color: 'red' }}
      radius={10}>
    </CircleMarker>
  );
}

const onHandleFeaturePopup = (feature = {}, layer) => {
  const { properties = {} } = feature;
  const { Name } = properties;
  if (!Name) return;
  layer.bindPopup(`<p>${Name}</p>`);
}

var markers = L.markerClusterGroup({
  spiderfyOnMaxZoom: false,
  showCoverageOnHover: false,
  zoomToBoundsOnClick: false
});

const Map = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/data/zbiorki.geojson').then(async (res) => {
      const json = await res.json();
      console.log(json);
      setData(json);
    });
  }, []);

  return (
    <MapContainer center={position} zoom={6} style={{ height: '100vh', width: '100%' }}>
      <LayersControl position="topright">
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        <LayersControl.Overlay checked name="Layer group with circles">
          {/* <MarkerClusterGroup> */}
          {data && <GeoJSON key='my-geojson' data={data} onEachFeature={onHandleFeaturePopup} />}
          {/* </MarkerClusterGroup> */}
        </LayersControl.Overlay>

        <LocationMarker />
      </LayersControl>
    </MapContainer>
  )
}

export default Map;
