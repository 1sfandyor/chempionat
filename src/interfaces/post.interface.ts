// Adjust the TPost type definition
export type TPost = {
  key: string
  profile_photo: string;
  user_name: string;
  recently: string;
  posted_date: string;
  description: string;
  post_img: string;
  stats?: {
    comment: number;
    like: number;
  }
};
