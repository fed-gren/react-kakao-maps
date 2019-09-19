import React, { useEffect } from "react";
import PropTypes from "prop-types";
import { useKakaoMapLoad } from "../hooks";
import MapContainer from "../MapContainer";

export default function KakaoMap({
  apiUrl,
  width = "500px",
  height = "500px",
  ...restOptions
}) {
  const { kakaoMapLoaded, kakaoMapObj } = useKakaoMapLoad({
    apiUrl
  });

  const loadHandler = element => {
    if (kakaoMapObj) {
      const map = new kakaoMapObj.maps.Map(element, {
        level: 3,
        center: new kakaoMapObj.maps.LatLng(33.450701, 126.570667)
      });
    }
  };

  return (
    <MapContainer {...{ width, height }} ref={loadHandler}>
      width: {width}, height: {height}
    </MapContainer>
  );
}

KakaoMap.propTypes = {
  apiUrl: PropTypes.string.isRequired,
  width: PropTypes.string,
  height: PropTypes.string
};
