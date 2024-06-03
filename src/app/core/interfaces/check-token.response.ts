import { User } from "../../proxy/model/user";

export interface CheckTokenResponse {
  user:  User;
  token: string;
}
