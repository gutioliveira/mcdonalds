import { Item } from "../../../types/item";
import { MenuItem } from "../../../types/menu";

export interface Menu {
  currency: string;
  menus: Array<MenuItem>;
}

export interface MenuState {
  menu: Menu;
  modalValue: Item | null;
}