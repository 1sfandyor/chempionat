// Adjust the TPost type definition
export type TPost = {
  id?: string;
  profile_photo: string;
  user_name: string;
  recently: string;
  posted_date: string;
  description: string;
  post: string; // Assuming post is also an image
  stats: {
    coment: number;
    like: number;
  }
};
