
export interface Service {
  id: string;
  name: string;
  description: string;
  price: string;
  duration: string;
}

export interface Barber {
  id: string;
  name: string;
  specialty: string;
  imageUrl: string;
}

export interface StyleRecommendation {
  styleName: string;
  description: string;
  maintenanceLevel: 'Low' | 'Medium' | 'High';
  suitability: string;
}
