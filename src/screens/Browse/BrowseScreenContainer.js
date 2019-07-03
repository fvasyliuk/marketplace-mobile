import { compose, lifecycle, withHandlers, hoistStatics, withState } from 'recompose';
import { connect } from 'react-redux';
import { productsOperations, productsSelectors } from '../../modules/products';
import BrowseScreen from './BrowseScreenView';
import { NavigationServices } from '../../services';
import { withFormik } from 'formik';
import { filtersValidationSchema } from '../../validationSchemas';

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
    search: productsOperations.searchProducts,
    searchMore: productsOperations.searchProductsMore,
};

const enhancer = compose(
    connect(mapStateToProps, mapDispatchToProps),       
    withFormik({
        mapPropsToValues: (props) => ({
            keywords: '',
            priceFrom: '',
            priceTo: '', 
            location: '',
        }),
        validationSchema: filtersValidationSchema,

        async handleSubmit(values, {props : { search }}) {                   
            const body = {
                priceFrom: values.priceFrom,
                priceTo: values.priceTo, 
            };
            
            if ( values.location ) {
                body.location = values.location
            }            
            console.log('submit')
            try {                
                await search(body);  
            } catch (err) {
                console.log(err);
            }  
        }
    }),
    withState('isFocus', 'setIsFocus', false),
    withHandlers({
        openProduct: (props) => (id) => {
            NavigationServices.navigateToProduct(id);
        },
        // якщо заданий фільтер то виконуємо пошук інакше фетчимо продукти
        fetchItems: (props) => () => {
            if (props.values.location || props.values.keywords) {
                return props.search(props.values)
            };

            return props.fetchLatest;
        },
        // якщо заданий фільтер то виконуємо догружаєм по пошуку інакше догружаєм продукти
        fetchItemsMore: (props) => () => {
            if (props.values.location || props.values.keywords) {
                return props.searchMore(props.values)
            };

            return props.fetchLatestMore();
        },
        // onPress на значок фільтра в хедері
        handleNavigateToFilters: (props) => () => {
            const params = {
                handleChange: props.handleChange,
                handleBlur: props.handleBlur,
                values: props.values,
                errors: props.errors,
                touched: props.touched,
                handleSubmit: props.handleSubmit,
            };

            NavigationServices.navigateToFiltersModal(params);
        },
        // onPress на значок лупи в хедері     
        onSearch: (props) => async () => {
            const body = {};

            if ( props.values.keywords ) {
                body.keywords = props.values.keywords
            }
            if ( props.values.location ) {
                body.location = props.values.location
            } 
            if ( props.values.priceFrom !== '') {
                body.priceFrom = props.values.priceFrom
            }
            if ( props.values.priceTo !== '') {
                body.priceTo = props.values.priceTo
            }           
            
            try {             
                await props.search(body);  
            } catch (err) {
                console.log(err);
            }  
        },    
    }),
    lifecycle({
        componentDidMount() {
            // прокидаємо дані в хедер
            this.props.navigation.setParams({
                handleNavigateToFilters: this.props.handleNavigateToFilters,
                values: this.props.values,
                handleChange: this.props.handleChange('keywords'),
                onSearch: this.props.onSearch,
                setIsFocus: this.props.setIsFocus,
            })

            if (this.props.values.location || this.props.values.keywords) {
                this.props.search(this.props.values);
            } else {
                this.props.fetchLatest();
            }
            
        },
    }),
);

export default hoistStatics(enhancer)(BrowseScreen);