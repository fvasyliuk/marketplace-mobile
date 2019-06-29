import { compose } from 'recompose';
import { connect } from 'react-redux';
import ProfileScreen from './ProfileScreenView';


const mapStateToProps = (state) => ({
    productsList: productsSelectors.getUserProducts(state, props.match.params.id),
    user: productsSelectors.getUser(state, props.match.params.id),
    isLoading: state.products.usersProducts.isLoading, 
})

const mapDispatchToProps = {
    fetchUserProducts: productsOperations.fetchUserProducts,
    fetchUser: productsOperations.fetchUser,
};

const enhancer = compose(
    connect(mapStateToProps, mapDispatchToProps),
);

export default ProfileScreen;