import React from "react";
import PropTypes from "prop-types";
import { useKakaoMapLoad } from "../hooks";
import MapContainer from "../MapContainer";
import { defaultMapOptions } from "../constants";

export default function KakaoMap({
  apiUrl,
  width = "500px",
  height = "500px",
  ...options
}) {
  const { kakaoMapLoaded, kakaoMapObj } = useKakaoMapLoad({
    apiUrl
  });

  const loadHandler = element => {
    if (kakaoMapObj) {
      const { level, lat, lng, ...restOptions } = options;
      const map = new kakaoMapObj.maps.Map(element, {
        level: level || defaultMapOptions.level,
        center: new kakaoMapObj.maps.LatLng(
          lat || defaultMapOptions.lat,
          lng || defaultMapOptions.lng
        )
      });
    }
  };

  return <MapContainer {...{ width, height }} ref={loadHandler}></MapContainer>;
}

KakaoMap.propTypes = {
  apiUrl: PropTypes.string.isRequired,
  width: PropTypes.string,
  height: PropTypes.string
};
