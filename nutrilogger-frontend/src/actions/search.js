import * as api from '../api'

export const getFood = (searchTerm) => async (dispatch) => {
    try {
        const { data: { data } } = await api.getFood(searchTerm);

        dispatch({ type: 'FETCH', payload: data ? data : null });
    } catch (e) {
        console.log(e.message);
    }
}
