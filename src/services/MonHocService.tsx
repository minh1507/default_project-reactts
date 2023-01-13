import request from "common/Request";
const Por_MonHoc = "Por_MonHoc";
const MonHocService = {
  GetByParentId: async (idMenuCha: any) => {
    let res: any = await request({
      url: `/${Por_MonHoc}/List/${idMenuCha}`,
      method: "get",
    });
    return res;
  },
  GetItem: async (id: String) => {
    let res: any = await request({
      url: `/${Por_MonHoc}/${id}`,
      method: "get",
    });
    return res;
  },
  getMonHocPortal: async (id: String) => {
    let res: any = await request({
      url: `${Por_MonHoc}/GetMonHocPortal?idMonHocCha=${id}`,
      method: "get",
    });
    return res;
  },
  GetTree: async () => {
    let res: any = await request({
      url: `/${Por_MonHoc}/Tree`,
      method: "get",
    });
    return res;
  },
  GetTreeList: async () => {
    let res: any = await request({
      url: `/${Por_MonHoc}/TreeList`,
      method: "get",
    });
    return res;
  },
  GetCategories: async () => {
    let res: any = await request({
      url: `/${Por_MonHoc}/Categories`,
      method: "get",
    });
    return res;
  },
  CreateItem: async (data: any) => {
    let res: any = await request({
      url: `/${Por_MonHoc}`,
      method: "post",
      data,
    });
    return res;
  },
  UpdateItem: async (data: any) => {
    let res: any = await request({
      url: `/${Por_MonHoc}`,
      method: "put",
      data,
    });
    return res;
  },
  DeleteById: async (data: any) => {
    let res: any = await request({
      url: `/${Por_MonHoc}`,
      method: "delete",
      data,
    });
    return res;
  },
  CheckDuplicateAttributes: async (id: any, ma: any, idMonHocCha: any) => {
    let res: any = await request({
      url: `/${Por_MonHoc}/CheckDuplicateAttributes?id=${id}&ma=${ma}&idMonHocCha=${idMonHocCha}`,
      method: "get",
    });
    return res;
  },
  CheckDuplicateAttributesCreateNew: async (ma: any, idMonHocCha: any) => {
    let res: any = await request({
      url: `/${Por_MonHoc}/CheckDuplicateAttributes?ma=${ma}&idMonHocCha=${idMonHocCha}`,
      method: "get",
    });
    return res;
  },
};
export default MonHocService;
