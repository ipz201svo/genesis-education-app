import { createRequest } from "./common";
import { AuthAnonimousResponse, AuthAnonimousResult } from "./types";

export const authAnonymous = async (): Promise<AuthAnonimousResult> => {
  const request = createRequest("/auth/anonymous?platform=subscriptions",);

  const response = await fetch(request);
  const { token }: AuthAnonimousResponse = await response.json();
  return token;
};
