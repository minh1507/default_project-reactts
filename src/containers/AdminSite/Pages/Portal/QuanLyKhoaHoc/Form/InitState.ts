import { Guid } from "common/Enums";
import { IControlOptions } from "common/Models";

export interface IModelItem {
  Id: String;
  TieuDe: String;
  MoTa: String;
  NoiDung: String;
  GiaoVien: String;
  URL_AnhDaiDien: String;
  NgayXuatBan: Date;
  HocPhiGoc: Number;
  HocPhiGiamGia: Number;
  ThoiGian: Number;
  IdMonHoc: String;
  TrangThaiBanGhi: Boolean;
  TrangThai: Boolean;
}
export interface IState {
  DataItem: IModelItem;
  Options: IControlOptions[];
}
export const InitState: IState = {
  DataItem: {
    Id: Guid.Empty,
    TieuDe: "",
    MoTa: "",
    NoiDung: "",
    GiaoVien: "",
    URL_AnhDaiDien: "",
    NgayXuatBan: new Date(),
    HocPhiGoc: 0,
    HocPhiGiamGia: 0,
    ThoiGian: 0,
    IdMonHoc: "",
    TrangThaiBanGhi: true,
    TrangThai: true,
  },
  Options: [],
};
