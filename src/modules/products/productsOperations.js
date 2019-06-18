import * as actions from './productsActions';
import { normalize } from 'normalizr'; 
import Api, { schemas } from '../../api';

export function fetchLatest() {
    return async function fetchLatestThunk(dispatch) {
        try {
            dispatch(actions.fetchLatest.start());

            const res = await Api.Products.getLatest();

            const { result, entities } = normalize(res.data, schemas.ProductList);

            dispatch(actions.fetchLatest.success({ result, entities }));
        } catch (err) {
            console.log(err);
            dispatch(actions.fetchLatest.error({ message: err.message }))
        }
    }
};

export function addProduct(body) {
    return async function addProductThunk(dispatch) {
        try {
            dispatch(actions.addProduct.start());
            
            const res = await Api.Products.add(body);

            const { result, entities } = normalize(res.data, schemas.Product);
            
            dispatch(actions.addProduct.success({ result, entities }));
            return result;
        } catch (err) {
            console.log(err);
            dispatch(actions.addProduct.error({ message: err.message }))
        }
    }
};

export function uploadImage(file) {
    return async function uploadImageThunk(dispatch) {
        try {
            dispatch(actions.addImage.start());

            const res = await Api.Images.upload(file);

            dispatch(actions.addImage.success(res.data));
        } catch (err) {
            console.log(err);
            dispatch(actions.addImage.error({ message: err.message }))
        }
    }
};

export function fetchProduct(productId) {
    return async function fetchProductThunk(dispatch) {
        try {
            dispatch(actions.fetchProduct.start());

            const res = await Api.Products.get(productId);

            const { entities } = normalize(res.data, schemas.Product);

            dispatch(actions.fetchProduct.success({ entities }));
        } catch (err) {
            console.log(err);
            dispatch(actions.fetchProduct.error({ message: err.message }))
        }
    }
};

export function fetchUserProducts(id) {
    return async function fetchUserProductsThunk(dispatch) {
        try {
            dispatch(actions.fetchUserProducts.start());

            const res = await Api.Products.getUserProducts(id);

            const { result, entities } = normalize(res.data.list, schemas.ProductList)

            dispatch(actions.fetchUserProducts.success({ id, result, entities }));
        } catch (err) {
            console.log(err);
            dispatch(actions.fetchUserProducts.error({ message: err.message }))
        }
    }
};

export function fetchUser(UserId) {
    return async function fetchUserThunk(dispatch) {
        try {
            dispatch(actions.fetchUser.start());

            const res = await Api.Users.get(UserId);

            const { entities } = normalize(res.data, schemas.User);

            dispatch(actions.fetchUser.success({ entities }));
        } catch (err) {
            console.log(err);
            dispatch(actions.fetchUser.error({ message: err.message }))
        }
    }
};
