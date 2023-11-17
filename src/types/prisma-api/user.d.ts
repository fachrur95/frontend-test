export declare interface IUser {
  id: string;
  email: string;
  name: string | null;
  password: string;
  createdAt: Date;
  updatedAt: Date;
}

export declare type IUserMutation = Pick<IUser,
  | "email"
  | "name"
  | "password"
> & {
  userUnits: UserUnitType[],
}

export declare type IUserAccountUpdateMutation = Pick<IUser,
  | "email"
  | "name"
  | "password"
> & {
  newPassword: string;
}