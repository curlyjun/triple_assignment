# [2022 공개채용] 박성준 - 프론트엔드 엔지니어 포지션 과제

## 실행 화면

![play_record.gif](./play_record.gif)

## 실행 방법

- 실행 환경
  - OS: macOS Monterey 12.4
  - node: v16.13

```
  git clone https://github.com/curlyjun/triple_assignment.git

  cd triple_assignment

  yarn && yarn build && yarn start
```

## 사용한 기술과 선택한 이유

### [NextJS](https://nextjs.org/)

- 과제에서는 중요하지 않지만 트리플이 NextJS를 사용한다는 점과 SEO가 중요한 서비스라고 생각해서 NextJS를 사용해서 개발했습니다.

### [Typescript](https://www.typescriptlang.org/)

- 유지보수 용이성과 자동완성, 컴파일단계에서 오류를 잡을 수 있다는 장점이 있어 타입스크립트를 사용했습니다.

### [Emotion](https://emotion.sh/docs/introduction)

- CSS in JS를 사용하면 자바스크립트 환경을 css에 적용하기 용이하고 유니크한 클래스네임을 만들어주어 클래스네임이 중복되어 발생할 수 있는 문제점들을 예방할 수 있는 장점이 있어 사용했습니다.
  - [styled-comoponents](https://styled-components.com/)보다 번들사이즈가 조금 더 작아 emotion을 채택했습니다.

## 프로젝트 구조

```
  public // image 파일, favicon
  src
    ├─ components
         ├─ awards // 수상 내역 컴포넌트
         ├─ contentLogo // 로고와 기준 날짜 컴포넌트
    ⏐    └─ metrics // 지표 컴포넌트
    ├─ hooks
    ⏐    └─ useCountUpAnimiaton.ts // 숫자 증가 애니메이션 hook
    ├─ pages
    ⏐    └─ index.tsx 메인 페이지
    └─ utils// Context API로 만든 Store
         └─ easing.ts // 숫자 증가 애니메이션을 위한 util
  styles
    ├─ common.ts // 공통으로 쓰이는 스타일
    └─ global.tsx // 글로벌 스타일
```

## 요구사항

- [x] 문구, 이미지의 레이아웃과 스타일은 트리플 홈페이지와 동일해야 합니다. 단, 반응형 레이아웃은 고려하지 않습니다. 최소 화면 폭을 1200px로 고정합니다.
- [x] React를 이용하여 개발합니다. 그 외의 개발 스택은 자유롭게 구성합니다.
- [x] Google Chrome 최신 버전에서 동작해야 합니다.
- [x] 린팅/포매팅 셋업 시 titicacadev/eslint-config-triple 적용
- [x] 좌측 이미지, 지표 문구, 수상 내역 순으로 표시해야 합니다.
- [x] 살짝 위로 떠오르는 듯한 애니메이션과 투명도를 조절하는 애니메이션을
      적용해야 합니다.
- [x] 등장 애니메이션의 duration은 700ms이고, 애니메이션 사이 간격은 100ms입니다.
      숫자가 올라가는 애니메이션
- [x] 각 숫자는 0부터 시작합니다.
- [x] 세숫자모두2초동안증가하고,동시에끝나야합니다.
- [x] 증가 속도가 느려지는 효과를 구현해야 합니다.
- [x] React와 DOM API만을 이용해 구현해야 합니다.
