import { GeoJsonObject } from 'geojson';
export interface MapComponentProps {
  currentLevel: 'regions' | 'departments' | 'arrondissements';
  selectedRegion: string | null;
  selectedDepartment: string | null;
  setCurrentGeoData: React.Dispatch<React.SetStateAction<GeoJsonObject>>;
  currentGeoData: GeoJsonObject;
  setCurrentLevel: React.Dispatch<
    React.SetStateAction<'regions' | 'departments' | 'arrondissements'>
  >;
  setSelectedRegion: React.Dispatch<React.SetStateAction<string | null>>;
  setSelectedDepartment: React.Dispatch<React.SetStateAction<string | null>>;
}
