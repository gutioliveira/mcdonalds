import { MenuState } from "../../reducers/menu/types";

export const selectModalValue = ({ menu: { modalValue } }: { menu: MenuState }) => modalValue;

export const selectMenu = ({ menu: { menu } }: { menu: MenuState }) => menu;

export const selectLoading = ({ menu: { loading } }: { menu: MenuState }) => loading;