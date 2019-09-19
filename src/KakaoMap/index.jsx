import React from "react";
import PropTypes from "prop-types";
import { useKakaoMapLoad } from "../hooks";
import MapContainer from "../MapContainer";
import { defaultMapOptions } from "../constants";

// export const

export default function KakaoMap({
  apiUrl,
  width,
  height,
  children,
  ...options
}) {
  const { kakaoMapLoaded, kakaoMapObj } = useKakaoMapLoad({
    apiUrl
  });

  const loadHandler = element => {
    if (kakaoMapObj) {
      const {
        level: defaultLevel,
        lat: defaultLat,
        lng: defaultLng
      } = defaultMapOptions;

      const {
        level = defaultLevel,
        lat = defaultLat,
        lng = defaultLng,
        ...restOptions
      } = options;

      const map = new kakaoMapObj.maps.Map(element, {
        level,
        center: new kakaoMapObj.maps.LatLng(lat, lng)
      });
    }
  };

  return (
    <MapContainer
      {...{
        width: width || defaultMapOptions.width,
        height: height || defaultMapOptions.height
      }}
      ref={loadHandler}
    >
      {children}
    </MapContainer>
  );
}

KakaoMap.propTypes = {
  apiUrl: PropTypes.string.isRequired,
  width: PropTypes.string,
  height: PropTypes.string,
  children: PropTypes.element
};
