import { Item } from "../../../types/item";
import { Menu } from "../../../types/menu";

export interface MenuState {
  menuList: Array<Menu>;
  modalValue: Item | null;
}