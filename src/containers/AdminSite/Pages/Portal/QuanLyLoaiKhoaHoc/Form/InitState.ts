import { Guid } from "common/Enums";
import { IControlOptions } from "common/Models";

export interface IModelItem {
  Id: String;
  TieuDe: String;
  TrangThaiBanGhi: String;
}
export interface IState {
  DataItem: IModelItem;
}
export const InitState: IState = {
  DataItem: {
    Id: Guid.Empty,
    TieuDe: "",
    TrangThaiBanGhi: "",
  },
};
