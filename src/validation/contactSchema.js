import { z } from 'zod'
export const contactSchema = z.object({
  name:z.string().trim().min(2,'Please enter at least 2 characters.'),
  email:z.string().trim().email('Enter a valid email address.'),
  company:z.string().trim().optional(),
  phone:z.string().trim().regex(/^[+()\d\s-]*$/,'Use only numbers and common phone symbols.').optional().or(z.literal('')),
  service:z.string().min(1,'Choose the service you are interested in.'),
  message:z.string().trim().min(20,'Tell us a little more—at least 20 characters.')
})