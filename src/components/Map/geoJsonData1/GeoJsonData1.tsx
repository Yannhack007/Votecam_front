/* eslint-disable @typescript-eslint/no-unused-vars */
import { GeoJsonObject1 } from './map.interface';
import geoJsonData from './gadmCMR.json';
import { GeoJSON } from 'react-leaflet';

export const cameroonGeoJsonData1: GeoJsonObject1 = geoJsonData as GeoJsonObject1;

// export default function CameroonMap() {
//   return <GeoJSON data={cameroonGeoJsonData} />;
// }
