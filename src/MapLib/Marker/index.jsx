import React, { useContext, useEffect, useState } from "react";
import { KakaoMapContext } from "../KakaoMap";
import { defaultMapOptions } from "../../constants";

export const MarkerContext = React.createContext({});

const Marker = ({ lat, lng, image, children, ...restOptions }) => {
  const { kakaoMapObj, map } = useContext(KakaoMapContext);
  const [state, setState] = useState({
    marker: null,
    width: 0,
    height: 0
  });
  const { width, height } = restOptions;

  useEffect(() => {
    if (!map) return;
    const markerLat = lat || defaultMapOptions.lat;
    const markerLng = lng || defaultMapOptions.lng;
    const markerWidth = width || defaultMapOptions.marker.width;
    const markerHeight = height || defaultMapOptions.marker.height;

    const marekrImage = new kakao.maps.MarkerImage(
      image || defaultMapOptions.marker.image,
      new kakao.maps.Size(markerWidth, markerHeight)
    );

    setState({
      marker: new kakaoMapObj.maps.Marker({
        map,
        position: new kakaoMapObj.maps.LatLng(markerLat, markerLng),
        image: marekrImage
      }),
      width: markerWidth,
      height: markerHeight
    });
  }, [map]);

  return (
    <MarkerContext.Provider value={{ ...state }}>
      {children}
    </MarkerContext.Provider>
  );
};

export default Marker;
