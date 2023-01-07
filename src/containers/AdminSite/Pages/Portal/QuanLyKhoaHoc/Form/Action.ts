import { IResponseMessage } from "common/Models";
import { Guid } from "common/Enums";
import { IModelItem } from "./InitState";
import KhoaHocService from "services/KhoaHocService";

export const Actions: any = {
  GetItem: async (id: String, dispatch: any) => {
    if (id) {
      let res: IResponseMessage = await KhoaHocService.GetItem(id);
      if (res && res.Success) {
        dispatch({
          type: "GetItem",
          item: res.Data,
        });
      }
    } else {
      let itemNew: IModelItem = {
        Id: Guid.Empty,
        TieuDe: "",
        MoTa: "",
        NoiDung: "",
        GiaoVien: "",
        URL_AnhDaiDien: "",
        NgayXuatBan: new Date(),
        HocPhiGoc: 0,
        HocPhiGiamGia: 0,
        IdMonHoc: "",
        TrangThaiBanGhi: true,
        ThoiGian: 0,
        TrangThai: true,
      };
      dispatch({
        type: "GetItem",
        item: itemNew,
      });
    }
  },
  CreateItem: async (item: IModelItem, dispatch: any) => {
    let res: IResponseMessage = await KhoaHocService.CreateItem(item);

    return res;
  },
  UpdateItem: async (item: IModelItem, dispatch: any) => {
    let res: IResponseMessage = await KhoaHocService.UpdateItem(item);
    return res;
  },
};