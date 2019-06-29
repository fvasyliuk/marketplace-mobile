import { compose, lifecycle, withHandlers, hoistStatics } from 'recompose';
import { connect } from 'react-redux';
import { productsOperations, productsSelectors } from '../../modules/products';
import BrowseScreen from './BrowseScreenView';
import { NavigationServices } from '../../services';

function mapStateToProps(state) {    
    return {
        list: productsSelectors.getLatest(state),
        isLoading: state.products.latest.isLoading,
        isLoadingMore: state.products.latest.isLoadingMore,
        hasNoMore: state.products.latest.hasNoMore,
    };
};

const mapDispatchToProps = {
    fetchLatest: productsOperations.fetchLatest,
    fetchLatestMore: productsOperations.fetchLatestMore,
};

const enhancer = compose(
    connect(mapStateToProps, mapDispatchToProps),
    withHandlers({
        openProduct: (props) => (id) => {
            NavigationServices.navigateToProduct(id);
        },
    }),
    lifecycle({
        componentDidMount() {
            this.props.fetchLatest();
        },
    }),
);

export default hoistStatics(enhancer)(BrowseScreen);