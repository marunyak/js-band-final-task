export const SIGN_IN = 'SIGN_IN';
export const CHECK_SIGN = 'CHECK_SIGN';
export const SIGN_OUT = 'SIGN_OUT';

export const signIn = (userInfo) => ({
  type: SIGN_IN,
  payload: userInfo
});

export const checkSign = () => ({
  type: CHECK_SIGN
});

export const signOut = () => ({
  type: SIGN_OUT
});
