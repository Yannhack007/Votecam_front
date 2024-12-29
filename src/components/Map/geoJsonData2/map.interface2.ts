
// Define types for the CRS (Coordinate Reference System)
interface CrsProperties {
  name: string;
}

interface Crs {
  type: string;
  properties: CrsProperties;
}

// Define properties for each feature in the GeoJSON
interface DepartmentProperties {
  GID_2: string;
  GID_0: string;
  COUNTRY: string;
  GID_1: string;
  NAME_1: string;
  NL_NAME_1: string;
  NAME_2: string;
  VARNAME_2: string;
  NL_NAME_2: string;
  TYPE_2: string;
  ENGTYPE_2: string;
  CC_2: string;
  HASC_2: string;
}

// Define geometry for the features (Polygon in this case)
interface Geometry {
  type: 'Polygon';
  coordinates: number[][][]; // Coordinates for Polygon
}

// Define the structure of each feature in the GeoJSON
export interface Feature2 {
  type: 'Feature';
  properties: DepartmentProperties;
  geometry: Geometry;
}

// Define the top-level structure for the GeoJSON
export interface GeoJsonObject2 {
  type: 'FeatureCollection';
  name: string;
  crs: Crs;
  features: Feature2[];
}
