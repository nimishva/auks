const API_URL_ROOT = 'localhost:3000/api';


const API_URLS = {

    // user urls
    userSignup: () => `${API_URL_ROOT}/user/register`,
    userLogin: () => `${API_URL_ROOT}/user/login`,
    userUpdate: (id) => `${API_URL_ROOT}/user/update/:${id}`,
    userLogout: () => `${API_URL_ROOT}/user/logout`,
    // studio urls
    createStudio: () => `${API_URL_ROOT}/studio/create`,

    getStudio: (id) => id ? `${API_URL_ROOT}/studio/:${id}` : `${API_URL_ROOT}/studio/`,

    updateStudio: (id) => `${API_URL_ROOT}/studio/:${id}`,
    deleteStudio: (id) => `${API_URL_ROOT}/studio/:${id}`,
    //  service urls
    createService: () => `${API_URL_ROOT}/service/create`,
    getService: (id) => id ? `${API_URL_ROOT}/service/${id}` : `${API_URL_ROOT}/service/`,
    updateService: (id) => `${API_URL_ROOT}/service/:${id}`,
    deleteService: (id) => `${API_URL_ROOT}/service/:${id}`,
    //  service-request urls
    createServiceRequest: () => `${API_URL_ROOT}/service-request/`,
    updateServiceRequest: (id) => `${API_URL_ROOT}/service-request/:${id}`









}