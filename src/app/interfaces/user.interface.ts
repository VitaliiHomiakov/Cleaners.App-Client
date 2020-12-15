export interface User {
  balance: number;
  email: string;
  firstname: string;
  id: number;
  lastname: string;
  middlename: string;
  phone: string;
  roles?: string[];
}

export interface UserBarcode {
  barcode: string;
}
