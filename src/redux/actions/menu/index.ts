// import { rest } from "../../../rest";
import axios from "axios";
import { Item } from "../../../types/item";
import { Menu } from "../../reducers/menu/types";

export enum MenuActions {
  SET_MODAL_VALUE = 'SET_MODAL_VALUE',
  SET_MENU = 'SET_MENU',
  SET_LOADING_MENU = 'SET_LOADING_MENU',
}

export const setModalValue = (payload: Item | null) => ({
  type: MenuActions.SET_MODAL_VALUE,
  payload
});

export const setMenu = (payload: Menu) => ({
  type: MenuActions.SET_MENU,
  payload
});

export const setLoadingMenu = (payload: boolean) => ({
  type: MenuActions.SET_LOADING_MENU,
  payload
});

export const fetchMenu = (): any =>
  (dispatch: any) => {
    dispatch(setLoadingMenu(true));
    axios.get('https://mcdonalds.trio.dev/menu').then(({data}) => {
      dispatch(setMenu(data));
      dispatch(setLoadingMenu(false));
    }).catch((e) => {
      dispatch(setLoadingMenu(false));
    });
  }