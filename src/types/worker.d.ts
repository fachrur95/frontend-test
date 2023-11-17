export declare interface IEventDeleteWorker {
  path: WorkerPathType | null;
  variant?: "default" | "success" | "error",
  id: string | null;
  message: string | null;
  progress?: number;
}
export declare interface IEventUpdateWorker {
  path: WorkerPathType | null;
  variant?: "default" | "success" | "error",
  id: string | null;
  message: string | null;
  progress?: number;
}

export declare type WorkerPathType = "todo" | "user";

export declare type DeleteWorkerEventType = {
  path: WorkerPathType;
  data: string[];
}

export declare type UpdateWorkerEventType = {
  path: WorkerPathType;
  data: string[];
}