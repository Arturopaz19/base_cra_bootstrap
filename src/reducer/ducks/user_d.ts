// import { Store } from "redux";
import Schema, { ActionI } from "reducer/schema";
import { UserI } from "reducer/schema/user_s";

/*
  constants
*/
const initialState = Schema.User;
// const PREFIX = "USER";
// const SIGNIN_FETCH = `${PREFIX}/SIGNIN_FETCH`;
// const SIGNIN_SUCCESS = `${PREFIX}/SIGNIN_SUCCESS`;
// const SIGNIN_FAILURE = `${PREFIX}/SIGNIN_FAILURE`;

/*
  actions
*/
// export const userSignIn = (body:any) => async (dispatch: Store["dispatch"]) => {
//     try {
//         console.log(body);
//         dispatch({ type: SIGNIN_FETCH });
//         dispatch({ type: SIGNIN_SUCCESS });
        
//     } catch (error:any) {
//         dispatch({
//             type: SIGNIN_FAILURE,
//             payload: { errorMessage: error.message, data: Schema.User.data }
//         });
//     }
// }

/*
  reducer
*/
export default function reducer(state:UserI=initialState, action: ActionI){
    const { type } = action;
    switch (type) {
        default:
            return state;
    }
}
