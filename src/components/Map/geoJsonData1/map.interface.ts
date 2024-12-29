
// Define types for the CRS (Coordinate Reference System)
interface CrsProperties {
  name: string;
}

interface Crs {
  type: string;
  properties: CrsProperties;
}

// Define properties for each region in the GeoJSON features
interface RegionProperties {
  GID_1: string;
  GID_0: string;
  COUNTRY: string;
  NAME_1: string;
  VARNAME_1: string;
  NL_NAME_1: string;
  TYPE_1: string;
  ENGTYPE_1: string;
  CC_1: string;
  HASC_1: string;
  ISO_1: string;
}

// Define geometry for the features (MultiPolygon in this case)
interface Geometry {
  type: 'MultiPolygon';
  coordinates: number[][][][]; // Coordinates for MultiPolygon
}

// Define the structure of each feature in the GeoJSON
export interface Feature1 {
  type: 'Feature';
  properties: RegionProperties;
  geometry: Geometry;
}

// Define the top-level structure for the GeoJSON
export interface GeoJsonObject1 {
  type: 'FeatureCollection';
  name: string;
  crs: Crs;
  features: Feature1[];
}
