export declare interface ITodo {
  id: string;
  title: string;
  description: string;
  isCompleted: boolean;
  entryDate: Date;
  createdAt: Date;
  updatedAt: Date;
}

export declare type ITodoMutation = Pick<ITodo,
  | "title"
  | "description"
  | "isCompleted"
  | "entryDate"
>