import ProductInfo from '../actions/ProductInfo';
import action_1 from '../actions/action_1';
import action_2 from '../actions/action_2';
import action_3 from '../actions/action_3';

function reducer(state, action) {
    switch (action.type) {
        case action_1: return { value: action.status, type: action_1 };
        case action_2: return { value: action.status, type: action_2 };
        case action_3: return { value: action.status, type: action_3 };
        case ProductInfo: return { type: ProductInfo }

        default: return state;
    }
}

export default reducer