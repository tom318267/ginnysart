export interface Painting {
  id: string;
  title: string;
  artist: string;
  description: string;
  price: number;
  imageUrl: string;
  dimensions: string;
  medium: string;
  available: boolean;
}

export interface User {
  uid: string;
  email: string;
  displayName: string;
}
