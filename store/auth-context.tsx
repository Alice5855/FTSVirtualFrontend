import React, { useState, useEffect, useCallback } from "react";
import * as authAction from './auth-action'; 

let logoutTimer: NodeJS.Timeout;

type Props = { children?: React.ReactNode }
type UserInfo = { userid: string, nickname: string};
type LoginToken = { 
  grantType: string,
  accessToken: string,
  tokenExpiresIn: number
}


//createContext는 각각의 컴포넌트에 포함되는 객체를 만드는 로직
//객체안에는 state와 state를 컨트롤하는 함수를 넣음
//이후 이 state와 함수들은 인스턴스로 불러오게 된다
const AuthContext = React.createContext({
  token: '',
  userObj: { userid: '', nickname: '' },
  isLoggedIn: false,
  isSuccess: false,
  isGetSuccess: false,
  signup: (userid: string, password: string, nickname:string) =>  {},
  login: (userid:string, password: string) => {},
  logout: () => {},
  getUser: () => {},
  changeNickname: (nickname:string) => {},
  changePassword: (exPassword: string, newPassword: string) => {}
});


export const AuthContextProvider:React.FC<Props> = (props) => {

  const tokenData = authAction.retrieveStoredToken();

  let initialToken:any;
  if (tokenData) {
    initialToken = tokenData.token!;
  }

  const [token, setToken] = useState(initialToken);
  const [userObj, setUserObj] = useState({
    userid: '',
    nickname: ''
  });
  
  const [isSuccess, setIsSuccess] = useState<boolean>(false);
  const [isGetSuccess, setIsGetSuccess ] = useState<boolean>(false);

  const userIsLoggedIn = !!token;


  
  const signupHandler = (userid:string, password: string, nickname: string) => {
    setIsSuccess(false);
    const response = authAction.signupActionHandler(userid, password, nickname);
    response.then((result) => {
      if (result !== null) {
        setIsSuccess(true);
      }
    });
  }

  const loginHandler = (userid:string, password: string) => {
    setIsSuccess(false);
    console.log(isSuccess);
    
    const data = authAction.loginActionHandler(userid, password);
    data.then((result) => {
      if (result !== null) {
        const loginData:LoginToken = result.data;
        setToken(loginData.accessToken);
        logoutTimer = setTimeout(
          logoutHandler,
          authAction.loginTokenHandler(loginData.accessToken, loginData.tokenExpiresIn)
        );
        setIsSuccess(true);
        console.log(isSuccess);
      }
    })
  };

  const logoutHandler = useCallback(() => {
    setToken('');
    authAction.logoutActionHandler();
    if (logoutTimer) {
      clearTimeout(logoutTimer);
    }
  }, []);

  const getUserHandler = () => {
    setIsGetSuccess(false);
    const data = authAction.getUserActionHandler(token);
    data.then((result) => {
      if (result !== null) {
        console.log('get user start!');
        const userData:UserInfo = result.data;
        setUserObj(userData);
        setIsGetSuccess(true);
      }
    })    
    
  };

  const changeNicknameHandler = (nickname:string) => {
    setIsSuccess(false);

    const data = authAction.changeNicknameActionHandler(nickname, token);
    data.then((result) => {
      if (result !== null) {
        const userData:UserInfo = result.data;
        setUserObj(userData);
        setIsSuccess(true);
      }
    })
  };

  const changePaswordHandler = (exPassword:string, newPassword: string) => {
    setIsSuccess(false);
    const data = authAction.changePasswordActionHandler(exPassword, newPassword, token);
    data.then((result) => {
      if (result !== null) {
        setIsSuccess(true);
        logoutHandler();
      }
    });
  };

  useEffect(() => {
    if(tokenData) {
      console.log(tokenData.duration);
      logoutTimer = setTimeout(logoutHandler, tokenData.duration);
    }
  }, [tokenData, logoutHandler]);


  const contextValue = {
    token,
    userObj,
    isLoggedIn: userIsLoggedIn,
    isSuccess,
    isGetSuccess,
    signup: signupHandler,
    login: loginHandler,
    logout: logoutHandler,
    getUser: getUserHandler,
    changeNickname: changeNicknameHandler,
    changePassword: changePaswordHandler
  }
  
  return(
    <AuthContext.Provider value={contextValue}>
      {props.children}
    </AuthContext.Provider>
  )
}

export default AuthContext;