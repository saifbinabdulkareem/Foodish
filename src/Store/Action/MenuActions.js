export const createProject = (menu) => {
    return (dispatch, getState) => {
        // making async call to db 
        dispatch({ 
            type: 'CREATE_MENU', menu: menu
        })
    }
};