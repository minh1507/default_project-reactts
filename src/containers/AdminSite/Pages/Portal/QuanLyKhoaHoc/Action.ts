import { IResponseMessage } from "common/Models";
import KhoaHocService from "services/KhoaHocService";

export const Actions: any = {
  GetItems: async (dispatch: any) => {
    let res: IResponseMessage = await KhoaHocService.GetItems();
    console.log(res);
    if (res && res.Success) {
      dispatch({
        type: "GetItems",
        items: res.Data.Items,
      });
    }
  },
  DeleteById: async (id: String, dispatch: any) => {
    let res: IResponseMessage = await KhoaHocService.DeleteById([{ id: id }]);
    return res;
  },
};
