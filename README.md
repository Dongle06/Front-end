# Frontend


### story flow
![](https://velog.velcdn.com/images/yeah7598/post/4b0ad84a-0b91-449d-8622-c303a26130d8/image.png)

### 주요 UI
![](https://velog.velcdn.com/images/yeah7598/post/2ba6a0a7-2c4f-4e1e-b082-bf931e23004f/image.png)
![](https://velog.velcdn.com/images/yeah7598/post/9349c29f-ac4b-4b82-870b-18466186b69d/image.png)

### 파일 설명
1. _actions,_reducers: 상태관리 라이브러리인 리덕스 관련 폴더
 * _actions , user_action.js에서 서버와 연결하여 테스트함

2. component : 페이지들을 모아 놓은 폴더
* BOOK1: 토끼와 거북이 관련 페이지
* HomePage: 로고 및 시작 페이지
* LoginPage, SignUpPage: 로그인, 회원가입 페이지 
* MainPage: 책 고르는 페이지 
* MyPage: 사용자 정보 페이지 

3. App.js : 컴포넌트를 라우팅하기 위한 관리 페이지

4. setupProxy.js : 서버와 연결시 포트 주소가 다를 경우 충돌을 막기 위한 페이지
