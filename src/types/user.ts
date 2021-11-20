interface User {
  id: number;
  username: string;
  name: string;
  email: string;
  profilePic: string;
}
interface AuthInfo {
  token?: string;
  name?: string;
  username?: string;
  email?: string;
}
export type { User, AuthInfo };
