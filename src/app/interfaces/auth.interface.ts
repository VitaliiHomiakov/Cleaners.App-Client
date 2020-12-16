export interface Login {
  emailOrPhone: string;
  password: string;
}

export interface Tokens {
  token: string;
  refresh_token: string;
}

export interface SignUp {
  firstName: string;
  middleName?: string;
  lastName: string;
  email: string;
  phone?: string;
  password: string;
  confirmPassword: string;
}

export interface ResetPassword {
  confirmPassword: string;
  newPassword: string;
  token: string;
}

export interface SignedUp {
  id: number;
  status: string;
}
