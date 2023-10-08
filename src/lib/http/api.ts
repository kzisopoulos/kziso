import * as z from "zod";

// ***************************************** Contact form schema and type ****************************
export const contactFormSchema = z.object({
  name: z.string().min(1, { message: "This is a required field." }),
  email: z.string().email({ message: "Email is not valid." }),
  message: z.string().min(1, { message: "This is a required field." }),
});

export type ContactFormInputs = z.infer<typeof contactFormSchema>;
// ****************************************************************************************************
