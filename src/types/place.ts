interface IPlace {
  id: number;
  image?: any;
  title?: string;
  rating?: number;
  description?: string;
  category?: string[];
  latitude?: number;
  longitude?: number;
}

export default IPlace;
