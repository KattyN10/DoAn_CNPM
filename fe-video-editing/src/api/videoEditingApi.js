import axiosClient from "./axiosClient";


const videoEditingApi = {
    getGallery: (catID)=>{
        const url = `/Video/GetListVideo?id=${catID}`;
        return axiosClient.get(url)
    },
    uploadVideo: (formdata) => {
        const url = `/Video/Upload`;
        return axiosClient.post(url, formdata);
      },

}
export default videoEditingApi;