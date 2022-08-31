import { GET, POST } from "./Fetch";

// 토큰을 만드는 함수이며 auth-action.ts 내부에서만 사용함
const createTokenHeader = (token:string) => {
    return {
      headers: {
        'Authorization': 'Bearer ' + token
      }
    }
  }

  //토큰의 만료시간을 계산하는 함수이며, auth-action.ts 내부에서만 사용한다
const calculateRemainingTime = (expirationTime:number) => {
    const currentTime = new Date().getTime();
    const adjExpirationTime = new Date(expirationTime).getTime();
    const remainingDuration = adjExpirationTime - currentTime;
    return remainingDuration;
  };
  
  //토큰값과 만료시간을 부여받으면 그것을 localStorage내부에
  //저장해주는 함수이며 남은시간을 반환해줍니다
  export const loginTokenHandler = (token:string, expirationTime:number) => {
    localStorage.setItem('token', token);
    localStorage.setItem('expirationTime', String(expirationTime));
  
    const remainingTime = calculateRemainingTime(expirationTime);
    return remainingTime;
  }
  
  //localStorage내부에 토큰이 존재하는지 검색하는 함수
  //토큰이 존재한다면, 만료까지 남은시간과 토큰값을 같이 객체로 반환한다
  //또한 만약 시간이 1초 아래로 남았다면 자동으로 토큰을 삭제합니다
  export const retrieveStoredToken = () => {
    const storedToken = localStorage.getItem('token');
    const storedExpirationDate = localStorage.getItem('expirationTime') || '0';
  
    const remaingTime = calculateRemainingTime(+ storedExpirationDate);
  
    if(remaingTime <= 1000) {
      localStorage.removeItem('token');
      localStorage.removeItem('expirationTime');
      return null
    }
  
    return {
      token: storedToken,
      duration: remaingTime
    }
  }
  
  //회원가입 URL로 POST방식으로 호출하는 함수
  //통신으로 반환된 reponse를 반환
  //반환 타입은 Promis<AxiosReponse<any, any> | null> 이 반환
  export const signupActionHandler = (userid: string, password: string, nickname: string) => {
    const URL = '/auth/signup'
    const signupObject = { userid, password, nickname };
    
    const response = POST(URL, signupObject, {});
    return response;
  };
  
  //로그인 URL을 POST방식으로 호출하는 함수
  export const loginActionHandler = (userid:string, password: string) => {
    const URL = '/auth/login';
    const loginObject = { userid, password };
    const response = POST(URL, loginObject, {});
  
    return response;
  };
  
  //로그아웃을 해주는 함수
  //localStorage에 저장된 토큰과 만료시간을 삭제
  export const logoutActionHandler = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('expirationTime');
  };
  
  //유저의 정보를 GET방식으로 호출하는 함수
  //토큰값을 헤더에 넣고 호출한다
  export const getUserActionHandler = (token:string) => {
    const URL = '/member/me';
    const response = GET(URL, createTokenHeader(token));
    return response;
  }
  
  //아래 두함수는 닉네임과  패스워드를 바꿔주는 함수들
  //둘다 token값을 헤더에 붙여줘서 POST방식으로 호출하나
  //닉네임에는 바꿀 닉네임만 값으로 보내주면 되지만, 패스워드는 전의 패스워드와 
  //현재의 패스워드를 둘다 보내줘야한다
  //Promise객체인 reponse를 반환
  export const changeNicknameActionHandler = ( nickname:string, token: string) => {
    const URL = '/member/nickname';
    const changeNicknameObj = { nickname };
    const response = POST(URL, changeNicknameObj, createTokenHeader(token));
  
    return response;
  }
  
  export const changePasswordActionHandler = (
    exPassword: string,
    newPassword: string,
    token: string
  ) => {
    const URL = '/member/password';
    const changePasswordObj = { exPassword, newPassword }
    const response = POST(URL, changePasswordObj, createTokenHeader(token));
    return response;
  }