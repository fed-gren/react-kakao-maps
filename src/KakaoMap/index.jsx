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

  useEffect(() => {
    console.log(kakaoMapObj);
  }, [kakaoMapObj]);

  return (
    <MapContainer {...{ width, height }}>
      width: {width}, height: {height}
    </MapContainer>
  );
}

KakaoMap.propTypes = {
  apiUrl: PropTypes.string.isRequired,
  width: PropTypes.string,
  height: PropTypes.string
};
