import { Item } from "../../../types/item";
import { Menu } from "../../../types/menu";

export interface MenuState {
  menu: {
    currency: string;
    menus: Array<Menu>,
  };
  modalValue: Item | null;
}