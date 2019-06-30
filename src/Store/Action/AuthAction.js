
export const signIn = (credentials) => {
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();

        firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        ).then(()=> {
            dispatch({ type: 'LOGIN_SUCCES'});
        }).catch((err) => {
            dispatch({type: 'LOGIN_ERROR', err})
        })
    }
}

export const signOut = () => {
    return (dispatch, getState, {getFirebase}) => {
        const firebase = getFirebase();

        firebase.auth().signOut().then(()=> {
            dispatch({ type: 'SIGNOUT_SUCCESSFULLY'});
        });
    }
}

export const signUp = (newUser)=> {
    return (dispatch, getState, { getFirebase, getFirestore}) => {
        const firebase = getFirebase();
        const firestore = getFirestore();

        firebase.auth().createUserWithEmailAndPassword(
            newUser.email,
            newUser.password
            ).then((resp)=> {
            return firestore.collection('users').doc(resp.user.uid).set({
                fullName: newUser.fullName,
                // email: newUser.email,
                // gender:newUser.gender,
                // age: newUser.age,
                // country: newUser.age,
                // city: newUser.city,
                initials: newUser.fullName[0]
            })
        }).then(()=> {
            dispatch({ type: 'SIGNUP_SUCCESSFULLY' })
        }).catch(err => {
            dispatch({ type: 'SIGNUP_ERROR', err})
        })
    }
}
// export const rSignUp = (rUser)=> {
//     return (dispatch, getState, { getFirebase, getFirestore}) => {
//         const firebase = getFirebase();
//         const firestore = getFirestore();

//         firebase.auth().createUserWithEmailAndPassword(
//             rUser.email,
//             rUser.password
//             ).then((resp)=> {
//             return firestore.collection('rUser').doc(resp.user.uid).set({
//                 fullName: rUser.fullName,
//                 // email: rUser.email,
//                 // country: rUser.age,
//                 // city: rUser.city,
//                 initials: rUser.fullName[0]
//             })
//         }).then(()=> {
//             dispatch({ type: 'SIGNUP_SUCCESSFULLY' })
//         }).catch(err => {
//             dispatch({ type: 'SIGNUP_ERROR', err})
//         })
//     }
// }