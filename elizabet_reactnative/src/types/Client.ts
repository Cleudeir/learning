export type ClientType = {
  clientId: number;
  email: string;
  pixKey: string;
  permission: 'user' | 'admin';
  updatedAt?: Date;
  createdAt?: Date;
  error?: string;
  message?: string;
};
