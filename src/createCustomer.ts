import { Customer } from "./class/Customer"

export const createCustomer =(name:string, lastName:string, city:string, address:string, complement:string, code:string):Customer =>{
  const newCustomer = new Customer(
    name,
    lastName,
    city,
    address,
    complement,
    code
  )
  return newCustomer
}