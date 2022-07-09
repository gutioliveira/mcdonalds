import { Item } from "../../../types/item";

export enum MenuActions {
  SET_MODAL_VALUE = 'SET_MODAL_VALUE'
}

export const setModalValue = (payload: Item | null) => ({
  type: MenuActions.SET_MODAL_VALUE,
  payload
});