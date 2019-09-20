import React from "react";
import { KakaoMap, Marker } from "react-kakao-maps";

export default function MapView() {
  return (
    <KakaoMap
      apiUrl={process.env.KAKAO_MAP_API_URL}
      width="100%"
      height="700px"
      level={2}
      lat={37.490826}
      lng={127.03342}
    >
      <Marker lat={37.490826} lng={127.03342}></Marker>
    </KakaoMap>
  );
}
