import ProductScreen from './ProductScreenView';
import { compose, hoistStatics, withState, lifecycle } from 'recompose';
import { connect} from 'react-redux';
import { productsSelectors, productsOperations } from '../../modules/products';

function mapStateToProps(state, { navigation }) {    
    const productId = navigation.state.params.id;
    
    return {
        productId,
        product: productsSelectors.getProduct(state, productId),
        owner: productsSelectors.getProductOwner(state, productId),
    };
};

const mapDispatchToProps = {
    fetchProduct: productsOperations.fetchProduct,
};

const enhancer = compose(
    connect(mapStateToProps, mapDispatchToProps),
    withState('numberOfLines', 'setNumberOfLines', 2),
    lifecycle({
        componentDidMount() {
            if (!this.props.owner || !this.props.product) {
                this.props.fetchProduct(this.props.productId);
            }
        }
    }),
);

export default hoistStatics(enhancer)(ProductScreen);