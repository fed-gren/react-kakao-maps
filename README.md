# react-kakao-maps

## Supported features

---

- Map
- Marker

<br/>

## Installation

---

```sh
npm install --save react-kakao-maps #or
yarn add react-kakao-maps
```

<br/>

## Usage

---

### Map

```jsx
import React from "react";
import { KakaoMap } from "react-kakao-maps";

export default function MapView() {
  return (
    <KakaoMap
      apiUrl={process.env.KAKAO_MAP_API_URL}
      width="100%"
      height="700px"
      level={2}
      lat={37.490826}
      lng={127.03342}
    ></KakaoMap>
  );
}
```

**props**

- apiUrl: kakao map script를 동적으로 불러오기 위한 url입니다. 발급받은 kakao map api key를 포함한 전체 url을 이 곳에 작성합니다. [string][required]<br/>
  예시: "//dapi.kakao.com/v2/maps/sdk.js?appkey=발급받은 APP KEY"
- width: map을 표시할 element의 width 스타일 속성값입니다. [타입: string][기본값: 500px]
- height: map을 표시할 element의 height 스타일 속성값입니다. [타입: string][기본값: 500px]
- level: map 생성 시 지도 레벨을 설정합니다. 1부터 14레벨이 있으며 숫자가 작을수록 지도 확대 수준이 높아집니다.
  [타입: number][기본값: 3]
- lat: map 생성 시 중앙 지점의 위도를 설정합니다. [타입: number][기본값: 33.450701]
- lng: map 생성 시 중앙 지점의 경도를 설정합니다. [타입: number][기본값: 126.570667]

<br/>

### Marker

```jsx
import React from "react";
import { KakaoMap, Marker } from "react-kakao-maps";

export default function MapView() {
  return (
    <KakaoMap
      ...options
    >
      <Marker lat={37.490826} lng={127.03342}></Marker>
    </KakaoMap>
  );
}
```

**props**

- lat: marker로 표시할 지점의 위도를 설정합니다. [타입: number][기본값: 33.450701]
- lng: marker로 표시할 지점의 경도를 설정합니다. [타입: number][기본값: 126.570667]
