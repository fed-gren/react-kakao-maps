import React from "react";
import { KakaoMap, Marker, CustomOverlay, CustomOverlayWithString, usePlaceService } from "react-kakao-maps";
import MyOverlay from "./components/MyOverlay";

export default function MapView() {
  const customOverlayHtml = '<div class="wrap">' +
    '    <div class="info">' +
    '        <div class="title">' +
    '            카카오 스페이스닷원' +
    '            <div class="close" onclick="changeOverlayColor(this)" title="닫기">x</div>' +
    '        </div>' +
    '        <div class="body">' +
    '            <div class="img">' +
    '                <img src="http://cfile181.uf.daum.net/image/250649365602043421936D" width="73" height="70">' +
    '           </div>' +
    '            <div class="desc">' +
    '                <div class="ellipsis">제주특별자치도 제주시 첨단로 242</div>' +
    '                <div class="jibun ellipsis">(우) 63309 (지번) 영평동 2181</div>' +
    '                <div><a href="http://www.kakaocorp.com/main" target="_blank" class="link">홈페이지</a></div>' +
    '            </div>' +
    '        </div>' +
    '    </div>' +
    '</div>';

  const { placeService} = usePlaceService();
  const callback = (result, status) => {
    if (status === window.kakao.maps.services.Status.OK) {
      console.log(result);
    }
  }

  if(placeService) {
    placeService.keywordSearch('판교 치킨', callback);
  }

  const events = [];
  const clickHandler = {
    changeOverlayColor: (target) => {
      target.closest('.wrap').style.backgroundColor = '#ff0';
    },
  }

  events.push(clickHandler);

  const styles = [];

  const wrapStyles = `
    .wrap {background-color: #fff}
  `;

  const closeStyles = `
    .close {
      cursor: pointer;
      display: inline-block
    }
  `;

  styles.push(wrapStyles);
  styles.push(closeStyles);

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

      <CustomOverlayWithString
        content={customOverlayHtml}
        clickable={false}
        styles={styles}
        events={events}
        lat={37.491846}
        lng={127.03302}
      ></CustomOverlayWithString>
      <CustomOverlayWithString
        content={customOverlayHtml}
        clickable={false}
        styles={styles}
        events={events}
        lat={37.489246}
        lng={127.03302}
      ></CustomOverlayWithString>
    </KakaoMap>
  );
}
