import axios from 'axios';
import * as SecureStore from 'expo-secure-store';

const baseUrl = 'https://apiko-marketplace-api-2019.herokuapp.com';

const urls = {
    login: `${baseUrl}/auth/login`,
    register: `${baseUrl}/auth/register`,
    getViewer: `${baseUrl}/account/user`,
    productsLatest: `${baseUrl}/products/latest`,
    add: `${baseUrl}/products`,
    image: `${baseUrl}/upload/images`,
    products: `${baseUrl}/products`,
    users: `${baseUrl}/users`,
    chats: `${baseUrl}/chats`,
};

export const Auth = {
    _token: null,

    get isLoggedIn() {
        return !!this._token;
    },

    setToken(token) {        
        this._token = token;

        this._storeToken(token);
        console.log('set token', token)
        this._setTokenToAxios(token);
    },

    init() {
        try {
            const token = SecureStore.getItemAsync('token');
            this._token = token;
            
            this._setTokenToAxios(this._token);
        } catch (err) {
            console.error(err);
        }
    },

    login(body) {
        return axios.post(urls.login, body)       
    },

    register(body) {
        return axios.post(urls.register, body)       
    },

    logout() {
        this._token = null;
        try {
            SecureStore.deleteItemAsync('token')
        } catch (err) {
            console.error(err);
        }
        this._setTokenToAxios(null);
    },
    _storeToken(token) {
        try {
            SecureStore.setItemAsync('token', token);
        } catch (err) {
            console.error(err);
        } 
    },
    _setTokenToAxios(token) {
        axios.defaults.headers.common.Authorization = `Bearer ${token}`;
    }
};

export const Viewer = {
    get() {
        return axios.get(urls.getViewer);
    }
};

export const Products = {
    getLatest() {
        return axios.get(urls.productsLatest)
    },
    add(body) {
        return axios.post(urls.add, body)
    },
    get(id) {
        return axios.get(`${urls.products}/${id}`)
    },
    getUserProducts(id) {
        return axios.get(`${urls.users}/${id}/products`)
    },
};

export const Images = {
    upload(file) {
        const fd = new FormData();
        fd.append('image', file);
        return axios.post(urls.image, fd);
    }
}

export const Chats = {
    createChat(productId) {
        return axios.post(`${urls.products}/${productId}/createChat`)
    },
    fetch() {
        return axios.get(urls.chats);
    }
}

export const Messages = {
    sendMessage(chatId, text) {
        return axios.post(`${urls.chats}/${chatId}/messages`, { text });
    },
    fetchMessages(chatId) {
        return axios.get(`${urls.chats}/${chatId}/messages`);
    }
} 
export const Users = {
    get(id) {
        return axios.get(`${urls.users}/${id}`)
    },
}
export function init() {
    Auth.init();
};