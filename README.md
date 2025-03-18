# Next.js 리그오브레전드 정보 앱 제작

#### 📷 Preview

<img width="45%" alt="스크린샷 2025-03-19 04 13 37" src="https://github.com/user-attachments/assets/8b695d7b-65b2-43d8-b789-30c72bf67861" />
<img width="45%" alt="스크린샷 2025-03-19 04 13 47" src="https://github.com/user-attachments/assets/9d76acec-8311-4c65-8896-45b02a913f90" />

🔗 [바로가기 Click !!](https://lol-dex-suim.vercel.app/)

<br><br><br>

## 🍑 프로젝트 소개

Next.js 기반의 리그오브레전드 정보 앱입니다. <br>
Next.js와 typescript를 전반적으로 활용하여 제작했습니다.<br>
다양한 서버&클라이언트 컴포넌트 렌더링 기법과 Next가 제공하는 다양한 기능을 사용했습니다.
<br><br>

### 1. 개발 기간 (25.03.11 - 19)

- **25.03.11** 프로젝트 초기 셋팅 및 디렉토리 구성
- **25.03.12 - 13** 공통&레이아웃 컴포넌트 구현 / 라우터 페이지 구현
- **25.03.13 - 16** 구현 로직 리팩토링 / UI 스타일링
- **25.03.17 - 18** Error, Loading 핸들링 추가 / Dark Mode 구현 / 빌드 테스트
- **25.03.19** 빌드 오류 수정 / 최종 점검 및 배포

<br>

### 2. 개발스택
- react, next.js, typescript, tailwind css, tanstack query

<br>

### 3. 디렉토리 구조

```
src
 ┣ app
 ┃ ┣ (page)               # app 라우터 동작 페이지
 ┃ ┃ ┣ champions / page.tsx
 ┃ ┃ ┃ ┣ [id] / page.tsx
 ┃ ┃ ┣ items / page.tsx
 ┃ ┃ ┗ rotations / client.page.tsx, page.tsx
 ┃ ┣ api
 ┃ ┃ ┗ route.ts
 ┃ ┣ provider
 ┃ ┃ ┣ DarkModeProvider.tsx
 ┃ ┃ ┗ QueryProvider.tsx
 ┃ ┣ error.tsx           # 에러 처리 컴포넌트
 ┃ ┣ global-error.tsx    # 최상단 에러 처리 컴포넌트
 ┃ ┣ globals.css 
 ┃ ┣ layout.tsx          # root layout
 ┃ ┣ loading.tsx         # 로딩 처리 컴포넌트
 ┃ ┣ not-found.tsx       # 404 경로 에러 처리 컴포넌트
 ┃ ┗ page.tsx            # root 페이지
 ┣ components
 ┃ ┣ common              # 재사용 컴포넌트
 ┃ ┗ layouts             # 레이아웃에 사용되는 컴포넌트
 ┣ hooks                 # 커스텀 훅
 ┃ ┗ useRotation.ts
 ┣ types                 
 ┃ ┣ components          # 컴포넌트단에서 사용되는 타입
 ┃ ┃ ┗ common.types.ts
 ┃ ┣ pages               # 페이지단에서 사용되는 타입
 ┃ ┃ ┣ Champion.types.ts
 ┃ ┃ ┗ Home.types.ts
 ┃ ┣ shared              # 공통으로 사용되는 타입
 ┃ ┃ ┣ common.types.ts  
 ┃ ┃ ┗ riot.api.types.ts
 ┃ ┗ .DS_Store
 ┣ utils                 # 유틸 함수
 ┃ ┣ makeRotationList.ts
 ┃ ┗ server.api.ts
 ┗ constants.ts          # 상수 선언
```

<br><br><br>

## 🍑 프로젝트 주요기능

### 1. 챔피언 목록 조회(ISR)

  <br>

### 2. 아이템 목록 조회(SSG)

  <br>

### 3. 로테이션 목록 조회(CSR)

  <br>

### 4. 챔피언 상세 정보 조회(SSR)

  <br>

<br><br><br>

## 🍑 프로젝트 관련 기록

[![Velog's GitHub stats](https://velog-readme-stats.vercel.app/api?name=_kimsuim)](https://velog.io/@_kimsuim)

<br>

### 1. 트러블 슈팅

- 🔗 [TypeScript 객체 타입 오류](https://velog.io/@_kimsuim/트러블슈팅아차차-구조분해할당)
- 🔗 [클라이언트 컴포넌트에서 .env 환경변수 사용할 때 주의할 점](https://velog.io/@_kimsuim/클라이언트에서의-.env-변수)

<br><br><br>

## 👍🏻 License

MIT &copy; [SUIM](mailto:suim0215@gmail.com)
