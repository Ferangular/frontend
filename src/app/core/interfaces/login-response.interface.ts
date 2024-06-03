import { User } from "../../proxy/model/user";

export interface LoginResponse{
  user:  User;
  token: string;
}
