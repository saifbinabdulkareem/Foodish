export const createProject = (menu) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        // making async call to db 
        const firestore = getFirestore();
        firestore.collection('menus').add({
            ...menu,
            createdAt: new Date()

        }).then(() => {
            dispatch({ type: 'CREATE_MENU', menu: menu })
        }).catch((err)=> {
            dispatch({ type: 'CREATE_MENU_ERROR', err});
        })
    }
};