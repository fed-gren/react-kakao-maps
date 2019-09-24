import React from "react";
import { KakaoMap, Marker, CustomOverlay } from "react-kakao-maps";
import MyOverlay from "./components/MyOverlay";

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
      <Marker lat={37.490826} lng={127.03342} opacity={0.5}>
        <CustomOverlay
          content={<MyOverlay message="마커 커스텀오버레이" />}
          clickable={false}
          lat={37.490826}
          lng={127.03342}
        ></CustomOverlay>
      </Marker>
      <CustomOverlay
        content={<MyOverlay message="일반 커스텀오버레이" />}
        clickable={false}
        lat={37.490826}
        lng={127.03342}
      ></CustomOverlay>
    </KakaoMap>
  );
}
