export function combineReducers(reducers) {
    return (state = {}, action) => {
        return Object.keys(reducers).reduce((acc, key) => {
            acc[key] = reducers[key](state[key], action);
            return acc;
        }, {});
    };
}