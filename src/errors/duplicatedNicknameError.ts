import { ApplicationError } from "@/protocols";

export function duplicatedNicknameError(): ApplicationError {
  return {
    name: "DuplicatedNicknameError",
    message: "There is already an user with given nickname",
  };
}