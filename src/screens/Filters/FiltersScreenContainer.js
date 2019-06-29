import { compose, lifecycle, withHandlers, hoistStatics } from 'recompose';
import { connect } from 'react-redux';
import { productsOperations, productsSelectors } from '../../modules/products';
import FiltersScreen from './FiltersScreenView';
import { NavigationServices } from '../../services';


const enhancer = compose(
    
);

export default hoistStatics(enhancer)(FiltersScreen);