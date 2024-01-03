export class Customer {
  private name: string;
  private lastName: string;
  private city: string;
  private address: string;
  private complement: string;
  private code:string

  constructor(name: string, lastName: string, city: string, address: string, complement: string, code:string) {
    this.name = name;
    this.lastName = lastName;
    this.city = city;
    this.address = address;
    this.complement = complement;
    this.code = code
  }

  // Métodos específicos para uso após obter os dados da requisição
  getFullName(): string {
    return `${this.name} ${this.lastName}`;
  }

  getCustomerCode(): string {
    return `${this.code}`;
  }

  getAddressDetails(): string {
    return `${this.address}, ${this.city}, ${this.complement}`;
  }
}
