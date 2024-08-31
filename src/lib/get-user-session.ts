import { authOptions } from "./authOptions";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export const getUserSession = async () => {
  const session = await getServerSession(authOptions);


  return session?.user || null;
};
