// Define types for the CRS (Coordinate Reference System)
interface CrsProperties {
  name: string;
}

interface Crs {
  type: string;
  properties: CrsProperties;
}

// Define properties for each feature in the GeoJSON
interface ArrondissementProperties {
  GID_3: string;
  GID_0: string;
  COUNTRY: string;
  GID_1: string;
  NAME_1: string;
  NL_NAME_1: string;
  GID_2: string;
  NAME_2: string;
  NL_NAME_2: string;
  NAME_3: string;
  VARNAME_3: string;
  NL_NAME_3: string;
  TYPE_3: string;
  ENGTYPE_3: string;
  CC_3: string;
  HASC_3: string;
}

// Define geometry for the features (Polygon in this case)
interface Geometry {
  type: 'Polygon';
  coordinates: number[][][]; // Coordinates for Polygon
}

// Define the structure of each feature in the GeoJSON
export interface Feature3 {
  type: 'Feature';
  properties: ArrondissementProperties;
  geometry: Geometry;
}

// Define the top-level structure for the GeoJSON
export interface GeoJsonObject3 {
  type: 'FeatureCollection';
  name: string;
  crs: Crs;
  features: Feature3[];
}
