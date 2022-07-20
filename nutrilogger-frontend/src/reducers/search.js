export default (food = [], action) => {
    switch (action.type) {
        case 'FETCH_ALL':
            return food;
        default: 
            return food;
    }
}