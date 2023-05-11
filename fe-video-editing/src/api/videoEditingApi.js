import axiosClient from "./axiosClient";


const videoEditingApi = {
    getGallery: (catID)=>{
        const url = `/Video/getGallery?type=${catID}`;
        return axiosClient.get(url)
    },
    deleteGallery: (id) => {
        const url = `/Video/deleteGallery/${id}`;
        return axiosClient.delete(url);
      },
    downloadOne: (id) =>{
        const url = `http://localhost:10386/api/Video/getGalleryById/${id}`;
        return axiosClient.get(url);
    }


}
export default videoEditingApi;