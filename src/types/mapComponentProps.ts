import { GeoJsonObject } from 'geojson';
export interface MapComponentProps {
  currentLevel: 'regions' | 'departments' | 'arrondissements';
  selectedRegion: string;
  selectedDepartment: string;
  setCurrentGeoData: React.Dispatch<React.SetStateAction<GeoJsonObject>>;
  currentGeoData: GeoJsonObject;
  setCurrentLevel: React.Dispatch<
    React.SetStateAction<'regions' | 'departments' | 'arrondissements'>
  >;
  setSelectedRegion: React.Dispatch<React.SetStateAction<string>>;
  setSelectedDepartment: React.Dispatch<React.SetStateAction<string>>;
  handleFilterByRegion: (regionName: string) => void;
  handleFilterByDepartment: (departmentName: string) => void;
  handleBackToDepartments: () => void;
  handleBackToRegions: () => void;
}
