import ProductScreen from './ProductScreenView';
import { compose, hoistStatics, withState, lifecycle, withHandlers } from 'recompose';
import { connect} from 'react-redux';
import { productsSelectors, productsOperations } from '../../modules/products';
import { viewerSelectors } from '../../modules/viewer';
import { NavigationServices } from '../../services';

function mapStateToProps(state, { navigation }) {    
    const productId = navigation.state.params.id;
    
    return {
        productId,
        product: productsSelectors.getProduct(state, productId),
        owner: productsSelectors.getProductOwner(state, productId),
        viewer: viewerSelectors.getUser(state),
    };
};

const mapDispatchToProps = {
    fetchProduct: productsOperations.fetchProduct,
};

const enhancer = compose(
    connect(mapStateToProps, mapDispatchToProps),
    withState('numberOfLines', 'setNumberOfLines', 2),
    withHandlers({
        handleNavigateProfile: (props) => () => {
            if (
                props.viewer &&
                props.owner &&
                props.viewer.id === props.owner.id
            ) {
                return NavigationServices.navigateToProfile();
            };

            if (props.owner) {                
                return NavigationServices.navigateToOwner(props.owner.id);                
            };
            
        },
    }),
    lifecycle({
        componentDidMount() {
            if (!this.props.owner || !this.props.product) {
                this.props.fetchProduct(this.props.productId);
            }
        }
    }),
);

export default hoistStatics(enhancer)(ProductScreen);