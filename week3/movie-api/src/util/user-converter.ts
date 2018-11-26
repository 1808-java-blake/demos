import { User } from "../model/user";
import { SqlUser } from "../dto/sql-user";

/**
 * This is used to convert a sql movie into an actual movie
 */
export function userConverter(user: SqlUser) {
  return new User(user.user_id, user.username, undefined, user.role);
}