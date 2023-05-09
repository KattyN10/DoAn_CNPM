import axiosClient from "./axiosClient";


const videoApi = {
    getAll: (params)=>{
        const url = '/Video/GetListVideo';
        return axiosClient.get(url,params)
    }

}
export default videoApi;