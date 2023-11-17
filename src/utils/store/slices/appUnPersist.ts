import type { WorkerPathType } from "@/types/worker";
import type { VariantType } from "notistack";
import { type StateCreator } from "zustand";

type ToastType = { message: string | null, variant?: VariantType, path?: WorkerPathType };

const defaultToast: ToastType = {
  message: "",
  variant: "default",
}
export interface IAppUnPersistSlice {
  search: string;
  setSearch: (data: string) => void;
  toast: ToastType;
  setToast: (data: ToastType) => void;
  deletingProcess: number;
  setDeletingProcess: (value: number) => void;
  updatingProcess: number;
  setUpdatingProcess: (value: number) => void;
  isDeleting: boolean;
  setIsDeleting: (value: boolean) => void;
  isUpdating: boolean;
  setIsUpdating: (value: boolean) => void;
}

export const appUnPersistSlice: StateCreator<IAppUnPersistSlice> = (set) => ({
  search: "",
  setSearch: (data => set((state) => ({ ...state, search: data }))),
  toast: defaultToast,
  setToast: (data => set((state) => ({ ...state, toast: data }))),
  deletingProcess: 0,
  setDeletingProcess: ((value) => set((state) => ({ ...state, deletingProcess: value }))),
  updatingProcess: 0,
  setUpdatingProcess: ((value) => set((state) => ({ ...state, updatingProcess: value }))),
  isDeleting: false,
  setIsDeleting: ((value) => set((state) => ({ ...state, isDeleting: value }))),
  isUpdating: false,
  setIsUpdating: ((value) => set((state) => ({ ...state, isUpdating: value }))),
})