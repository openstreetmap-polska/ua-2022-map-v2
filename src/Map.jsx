import { useEffect, useState } from 'react';
import { MapContainer, TileLayer, GeoJSON, useMap, Marker } from 'react-leaflet';
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
    <Marker position={position} />
  );
}

const onHandleFeaturePopup = (feature = {}, layer) => {
  const { properties = {} } = feature;
  const { Name } = properties;
  if (!Name) return;
  layer.bindPopup(`<p>${Name}</p>`);
}

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
      <LayersControl.BaseLayer name="OSM Carto - international">
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" maxNativeZoom={19}
        />
      </LayersControl.BaseLayer>
      <LayersControl.BaseLayer checked name="OSM Carto - in ukrainian">
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://dopomoha.pl/hot/{z}/{x}/{y}.png" maxNativeZoom={19}
        />
      </LayersControl.BaseLayer>
      {data && <GeoJSON key='my-geojson' data={data} onEachFeature={onHandleFeaturePopup} />}
      <LocationMarker />
    </MapContainer>
  )
}

export default Map;
