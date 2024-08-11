import { z } from "zod";
interface RetVal<T> {
  error?: string;
  data?: T;
} 

const subscribeSchema = z.object({
  email: z.string().email(),
});

export const subscribe = async (formData: FormData):Promise<RetVal<string>> => {
  const email  = formData.get("email");
  const parsed = subscribeSchema.safeParse({ email });
  if (!parsed.success) {
    return { error: "Invalid email" };
  }
  return {};
}