export default (food = [], action) => {
    switch (action.type) {
        case 'FETCH':
            return action.payload;
        default: 
            return food;
    }
}