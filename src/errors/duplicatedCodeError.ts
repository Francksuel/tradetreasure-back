import { ApplicationError } from "@/protocols";

export function duplicatedCodeError(): ApplicationError {
  return {
    name: "DuplicatedCodeError",
    message: "There is already an user with given nickname",
  };
}