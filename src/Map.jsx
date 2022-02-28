import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, GeoJSON, useMap, Marker, Popup } from 'react-leaflet';
import L from "leaflet";

const position = [51.505, -0.09];

function LocationMarker() {
  const [position, setPosition] = useState(null);
  const [bbox, setBbox] = useState([]);

  const map = useMap();

  useEffect(() => {
    map.locate().on("locationfound", function (e) {
      setPosition(e.latlng);
      map.flyTo(e.latlng, map.getZoom());
      const radius = e.accuracy;
      const circle = L.circle(e.latlng, radius);
      circle.addTo(map);
      setBbox(e.bounds.toBBoxString().split(","));
    });
  }, [map]);

  return position === null ? null : (
    <Marker position={position} />
  );
}

export default () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('/data/zbiorki.geojson').then(async (res) => {
      const json = await res.json();
      console.log(json);
      setData(json);
    });
  });

  return (
    <MapContainer center={position} zoom={13} style={{height: '100vh', width: '100%'}}>
      <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {data && <GeoJSON key='my-geojson' data={data} />}
      <LocationMarker />
    </MapContainer>
  )
}
