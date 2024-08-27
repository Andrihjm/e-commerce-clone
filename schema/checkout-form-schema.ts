import { z } from "zod";

export const checkoutFormSchema = z.object({
  firstName: z
    .string()
    .min(2, { message: "Nama harus mengandung minimal 2 karakter" }),
  lastName: z
    .string()
    .min(2, { message: "Nama belakang harus mengandung minimal 2 karakter" }),
  email: z.string().email({ message: "Masukkan email yang benar" }),
  phone: z.string().min(10, { message: "Masukkan nomor telepon yang benar" }),
  address: z.string().min(5, { message: "Silakan masukkan alamat yang valid" }),
  comment: z.string().optional(),
});

export type CheckoutFormValues = z.infer<typeof checkoutFormSchema>;
