# helloworld 예제 구성
## 시작
    commnd 명령
    >>create-react-app "project_name"
        = >>create-react-app helloworld

## 실행해보기
    commnd 명령
    >>cd helloworld
    >>npm start

## 나만의 앱 만들어보기
    1. helloworld/src 경로의 파일 삭제

``` javascript
2. hello/src/index.js 파일 생성

import React from "react";
import ReactDOM from "react-dom";
import HelloWorld from "./HelloWorld";

ReactDOM.render(
    <HelloWorld/>
    ,document.querySelector('#root')
);
```
``` javascript
3. hello/src/HelloWorld.js 파일 생성

import React, {Component} from "react";
class HelloWorld extends Component{
    render(){
        return(
            <div className="helloContainer">
                <h1>Hello, World~!!!</h1>
            </div>
        );
    }

}

export default HelloWorld;
```
    4. 실행해보기
    commnd 명령
    >>npm start

    브라우저 실행 후 
    http://localhost:3000 접속해서
    Hello, World~!!! 출력 화면 확인.

``` css
5. index.js에 스타일 적용하기(1)
hello/src/index.css 파일 생성

body{
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
    margin: 0;
}
```
``` javascript
6. index.js에 스타일 적용하기(2)
hello/src/index.js 에 css 파일 import하기

import React from "react";
import ReactDOM from "react-dom";
import HelloWorld from "./HelloWorld";
import "./index.css"; //이 부분 추가

ReactDOM.render(
    <HelloWorld/>
    ,document.querySelector('#root')
);
```
``` css
7. HelloWorld.js 만의 스타일 적용하기(1)
hello/src/HelloWorld.css 파일 생성하기

h1 {
    font-family: sans-serif;
    font-size: 56px;
    padding: 5px;
    padding-left: 15px;
    padding-right: 15px;
    margin: 0;
    background: linear-gradient(to bottom, white 0%, white 62%, gold 62%, gold 100%);
}
```
``` javascript
8. hello/src/HelloWorld.js 에 css파일 import하기

import React, {Component} from "react";
import "./HelloWorld.css"; // 이 부분 추가
class HelloWorld extends Component{
    render(){
        return(
            <div className="helloContainer">
                <h1>Hello, World~!!!</h1>
            </div>
        );
    }

}

export default HelloWorld;
```

    9. 다시 실행해보기
    commnd 명령
    >>npm start
    
    http://localhost:3000
    에서 적용된 스타일 확인.

## 배포용으로 빌드해보기
    1. 배포용
    npm start를 이용한 서버는 개발용으로 수정사항이 생길 때 마다 jsx를 번역하기 때문에 느림. => bulid를 통해 최적화 된 js파일 세트를 얻을 수 있음.

    2. 빌드하기
    commnd 명령
    >>npm run build

    결과로 build폴더 생김
    살펴보면 index.html과 static폴더에 내가 개발한 jsx가 변환된 js파일들이 있음.

    3. 빌드 된것을 테스트 하려면
    serve를 설치해야함.

    commnd 명령
    >>npm i -g serve

    설치후 
    commnd 명령
    >>serve build

    하면
    http://localhost:5000에 접속하여 확인가능.