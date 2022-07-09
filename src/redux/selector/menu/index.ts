import { MenuState } from "../../reducers/menu/types";

export const selectModalValue = ({ menu: { modalValue } }: { menu: MenuState }) => modalValue;