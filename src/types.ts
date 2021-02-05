export type Comment = { userName: string; comment: string };

export type PostData = {
  id: number;
  imageUrl: string;
  likes: number;
  date: string;
  caption: string;
  user: UserData;
  comments: Comment[];
};

export type UserData = {
  id: number;
  imageUrl: string;
  name: string;
};

export interface PostsResponseData {
  posts: PostData[];
}

export interface State {
  posts: PostData[];
  page: number;
}
