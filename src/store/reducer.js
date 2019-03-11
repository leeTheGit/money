import moment from 'moment';

const initialState = {
    dbloaded : false,
    db: null,
    dateStart: moment.now(),
    dateEnd: moment.now()
};

const reducer = (state = initialState, action) => {
    console.log(state, action);
    if (action.type === 'DATABASE_LOADED') {
        return {
            dbloaded: true,
            db: action.value
        }
    }
    return state;
}

export default reducer;