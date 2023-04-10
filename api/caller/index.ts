// import axios, { AxiosInstance } from "axios";
// export class ApiCaller {
//   private axiosInstance: AxiosInstance;

//   constructor() {
//     this.axiosInstance = axios.create({
//       baseURL: "/api",
//       headers: {
//         "Content-Type": "multipart/form-data",
//       },
//     });
//   }

//   async get(url: string) {
//     const token = LocalStoreControl.getInstance().token.get_access_token();

//     if (token) {
//       this.axiosInstance.defaults.headers.common["Authorization"] =
//         "Bearer " + token;
//     }

//     return await this.axiosInstance.get(url);
//   }

//   async post(url: string, payload: any) {
//     const token = LocalStoreControl.getInstance().token.get_access_token();

//     if (token) {
//       this.axiosInstance.defaults.headers.common["Authorization"] =
//         "Bearer " + token;
//     }

//     return await this.axiosInstance.post(url, payload);
//   }

//   async put(url: string, payload: any) {
//     const token = LocalStoreControl.getInstance().token.get_access_token();

//     if (token) {
//       this.axiosInstance.defaults.headers.common["Authorization"] =
//         "Bearer " + token;
//     }

//     return await this.axiosInstance.put(url, payload);
//   }

//   async delete(url: string) {
//     const token = LocalStoreControl.getInstance().token.get_access_token();

//     if (token) {
//       this.axiosInstance.defaults.headers.common["Authorization"] =
//         "Bearer " + token;
//     }
//     return await this.axiosInstance.delete(url);
//   }
// }
export {};
