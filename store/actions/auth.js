import AsyncStorage from "@react-native-async-storage/async-storage";

export const AUTHENTICATE = "AUTHENTICATE";
export const LOGOUT = "LOGOUT";
export const SET_DID_TRY_AL = "SET_DID_TRY_AL";

//this action for see user if he try login without token so will push him to auth screen
export const setDidTryAL = () => {
  return { type: SET_DID_TRY_AL };
};

//this action to collect userId and token from signup and login
export const authenticate = (userId, token) => {
  return (dispatch) => {
    dispatch({ type: AUTHENTICATE, userId: userId, token: token });
  };
};

export const signup = (email, password) => {
  return async (dispatch) => {
    const response = await fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyBXd0FXMkiHno3r-eGBgkUqaFzDDvJs9Fw",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
          returnSecureToken: true,
        }),
      }
    );
    //this handle error form user while signup
    if (!response.ok) {
      const errorResData = await response.json();
      const errorId = errorResData.error.message;
      let message = "Something went wrong!";
      if (errorId === "EMAIL_EXISTS") {
        message = "This email exists aleardy!";
        alert("This email exists aleardy!");
      }
      throw new Error(message);
    }
    //this dispatch a data for authenticate action and async storage
    const resData = await response.json();
    console.log(resData);
    dispatch(authenticate(resData.localId, resData.idToken));
    saveDataToStorage(resData.idToken, resData.localId);
  };
};

export const login = (email, password) => {
  return async (dispatch) => {
    const response = await fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyBXd0FXMkiHno3r-eGBgkUqaFzDDvJs9Fw",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
          returnSecureToken: true,
        }),
      }
    );
    //this handle error form user while signup

    if (!response.ok) {
      const errorResData = await response.json();
      const errorId = errorResData.error.message;
      let message = "Something went wrong!";
      if (errorId === "EMAIL_NOT_FOUND") {
        message = "This email could not be found!";
        alert("Your Email Incorrect");
      } else if (errorId === "INVALID_PASSWORD") {
        message = "This password is not valid!";
        alert("Your Password Incorrect");
      }
      throw new Error(message);
    }
    //this dispatch a data for authenticate action and async storage

    const resData = await response.json();
    console.log(resData);
    dispatch(authenticate(resData.localId, resData.idToken));
    saveDataToStorage(resData.idToken, resData.localId);
  };
};
//this action for logout and delete token
export const logout = () => {
  AsyncStorage.removeItem("userData");
  return { type: LOGOUT };
};
//this func to send a data to async storage
const saveDataToStorage = async (token, userId) => {
  await AsyncStorage.setItem(
    "userData",
    JSON.stringify({
      token: token,
      userId: userId,
    })
  );
};
