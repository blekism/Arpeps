import { AuthError, Session, User } from "@supabase/auth-js";

export type Server_Res = {
  code: number;
  data?: {
    user: User | null;
    session: Session | null;
  };
  error?: AuthError | null;
};

export type Session_Response = {
  code: number;
  message: string;
  session?: Session | null;
};
