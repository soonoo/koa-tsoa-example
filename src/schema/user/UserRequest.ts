export interface UserPostRequest {
  name: string;
  email?: string;
  avatarUrl?: string;
  token?: string;
};

export interface UserPutRequest {
  email?: string;
  avatarUrl?: string;
  token?: string;
};

