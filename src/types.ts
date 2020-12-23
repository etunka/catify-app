export type PostData = {
  id: number;
  imageUrl: string;
  likes: number;
  date: string;
  caption: string;
  user: UserData;
};

export type UserData = {
  id: number;
  imageUrl: string;
  name: string;
};

export interface PostsResponseData {
  posts: PostData[];
}
