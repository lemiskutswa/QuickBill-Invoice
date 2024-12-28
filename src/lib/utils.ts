import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { z } from "zod"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const authformSchema = (type : string) => z.object({
  email: z.string().email({message: 'Enter your company email'}).min(3,
    {message: 'Email must be atleast 3characters'}),
  password: z.string().min(8),
  firstName: type === 'sign-in' ? z.string().optional() : z.string().min(3),
  lastName: type === 'sign-in' ? z.string().optional() : z.string().min(3),
  employeeId: type === 'sign-in' ? z.string().optional() : z.string().min(3).max(9),
  department: type === 'sign-in' ? z.string().optional() : z.string().min(3),
  tel: type === 'sign-in' ? z.string().optional() : z.string().min(3).max(10),
})
