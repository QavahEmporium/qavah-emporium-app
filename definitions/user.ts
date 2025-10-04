// src/definitions/IUser.ts
export type IUser = {
  name: string;
  email: string;
  contactNumber: string;
  role: "customer" | "admin";
  authType: string;
  avatarUrl?: string;
};
export interface IAddress {
  id: string;
  name: string;
  email: string;
  address: string;
  city: string;
  postalCode: string;
  country: string;
  isDefault: boolean;
}
