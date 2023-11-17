import menuData from "@/components/layouts/Navigations/SidebarMenu/data";
import { type StateCreator } from "zustand";

type OpenMenuType = Record<string, boolean>

type InitialState = Record<string, boolean>;

export const initialStateMenu: InitialState = Object.fromEntries(
  menuData.map((i) => [i.url, false])
);

export type DeletingStatusType = "idle" | "running" | "done" | "stopped"

export type DeletingType = {
  procedure: string[],
  masterItem: string[],
};

const defaultDeleting: DeletingType = {
  procedure: [],
  masterItem: [],
}

export interface IAppPersistSlice {
  density: "compact" | "standard" | "comfortable";
  openMenu: OpenMenuType;
  setOpenMenu: (url: string, check?: boolean) => void;
  notificationMessage: string | null;
  setNotificationMessage: (message: string) => void;
  deletingIds: DeletingType;
  setDeletingIds: (route: keyof DeletingType, ids: string[]) => void;
}

export const appPersistSlice: StateCreator<IAppPersistSlice> = (set) => ({
  density: "standard",
  openMenu: initialStateMenu,
  setOpenMenu: ((url, check) => set((state) => ({ ...state, openMenu: { ...state.openMenu, [url]: check === true ? (state.openMenu[url] ? true : !state.openMenu[url]) : !state.openMenu[url] } }))),
  notificationMessage: null,
  setNotificationMessage: ((message) => set(state => ({ ...state, message: message }))),
  deletingIds: defaultDeleting,
  setDeletingIds: ((route, ids) => set((state) => ({ ...state, deletingIds: ({ ...state.deletingIds, [route]: ids }) }))),
});