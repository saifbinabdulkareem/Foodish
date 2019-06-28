export const createProject = (menu) => {
    return (dispatch, getState, { getFirebase, getFirestore }) => {
        // making async call to db 
        const firestore = getFirestore();
        const profile = getState().firebase.profile;
        const authorId = getState().firebase.auth.uid;
        firestore.collection('menus').add({
            ...menu,
            menuId: authorId,
            // contentName: profile.fullName,
            createdAt: new Date()

        }).then(() => {
            dispatch({ type: 'CREATE_MENU', menu: menu })
        }).catch((err)=> {
            dispatch({ type: 'CREATE_MENU_ERROR', err});
        })
    }
};