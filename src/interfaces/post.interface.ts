// Import StaticImageData from next/image
import { StaticImageData } from 'next/image';

// Adjust the TPost type definition
export type TPost = {
  profile_photo: StaticImageData;
  user_name: string;
  recently: string;
  posted_date: string;
  description: string;
  post: StaticImageData; // Assuming post is also an image
  stats: {
    coment: number;
    like: number;
  }
};
