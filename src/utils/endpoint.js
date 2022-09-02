import axios from "axios";
import { notify, objectToHTTPQuery } from "./helpers";
import { getUserToken, logOutUser, rememberRoute } from "./auth";

let headers = {
    Accept: "application/json",
    "Content-Type": "application/json",
    //token: localStorage.getItem("token"),
};

let fileHeaders = {
    Accept: "application/json",
    "Content-Type": "multipart/form-data",
    token: localStorage.getItem("token"),
};

export const baseContentURL = "https://belearnng.lloydant.com/api";

const Endpoint = {
    init: () => {
        // accountId = process.env.REACT_APPg5b657_ACCOUNT_ID;
        let token = getUserToken();
        //if(token) axios.defaults.headers.common["Authorization"] = token
        axios.defaults.baseURL = "https://uchendiabia.herokuapp.com/api";
        //axios.defaults.baseURL = "http://10.211.55.3/ELearnNG/api";
        // Intercept 401 HTTP Error code in API
        //https://uchendiabia.herokuapp.com/api/Home/GetNews
    },

    // ---Auth--- //
    // login: (data) => {
    //     return axios.post(`/User/Authenticate`, data, headers);
    // },
    registerUser: (data) => {
        return axios.post(`/Home/CreatePerson`, data, fileHeaders);
    },
    authenticateUser: (username, password) => {
        return axios.get(`/Home/GetUser?UserName=${username}&Password=${password}`, headers);
    },
    postContactUs: (data) => {
        return axios.post(`/Home/CreateContactUs`, data, headers);
    },
    
    // ---Institution Details--- //
    getAllLgas: () => {
        return axios.get(`/Home/AllLga`, headers);
    },

    getNewsAndMedia: () => {
        return axios.get(`/Home/GetNews`, headers);
    },
    getMediaLinks: () => {
        return axios.get(`/Home/GetAllMedia`, headers);
    },
    getAllPerson: () => {
        return axios.get(`/Home/GetAllPersons`, headers);
    },

    getPersonByLGA: (data) => {
        return axios.get(`/Home/GetAllPersonsByLga?Lga=${data}`, headers);
    },
    getPersonByFormType: (data) => {
        return axios.get(`/Home/GetAllPersonsByFormType?FormType=${data}`, headers);
    },
    getPersonByGender: (data) => {
        return axios.get(`Home/GetAllPersonsGender?Gender=${data}`, headers);
    },
    getPersonByPVC: (data) => {
        return axios.get(`/Home/GetAllPersonsByHasPvc?Response=${data}`, headers);
    },
    getStats: (data) => {
        return axios.get(`/Home/Repoorts`, headers);
    },

    postSaveNews: (data) => {
        return axios.post(`/Home/CreateNews`, data, fileHeaders);
    },
    
    getYouthWingByLga: (data) => {
        return axios.get(`/Home/GetYouthWingByLga?Lga=${data}`, headers);
    },
    getAllYouthWing: (data) => {
        return axios.get(`/Home/GetYouthWing`, headers);
    },
   
    postYouthWing: (data) => {
        return axios.post(`/Home/CreateYouthWing`,data, headers);
    },
    postCodeNumber: (data) => {
        return axios.get(`Home/GetStaffByCodeNumber?CodeNumber=${data}`, headers);
    },
    
    postStaffDetails: (data) => {
        return axios.post(`/Home/CreateStaff`,data, fileHeaders);
    },
    postEditStaff: (data) => {
        return axios.post(`/Home/EditStaff`,data, fileHeaders);
    },
   

    
   
};

export default Endpoint;