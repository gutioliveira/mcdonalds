import { Item } from "../../../types/item";
import { Menu } from "../../reducers/menu/types";

export enum MenuActions {
  SET_MODAL_VALUE = 'SET_MODAL_VALUE',
  SET_MENU = 'SET_MENU',
}

export const setModalValue = (payload: Item | null) => ({
  type: MenuActions.SET_MODAL_VALUE,
  payload
});

export const setMenu = (payload: Menu) => ({
  type: MenuActions.SET_MENU,
  payload
});

export const fetchMenu = (): any =>
  (dispatch: any) => {
    fetch('https://mcdonalds.trio.dev/menu').then((res) => {
      res.json().then((r) => {
        dispatch(setMenu(r));
      });
    })
  }