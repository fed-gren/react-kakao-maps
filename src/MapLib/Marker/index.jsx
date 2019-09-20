import { useContext, useEffect } from "react";
import { KakaoMapContext } from "../KakaoMap";
import { defaultMapOptions } from "../../constants";

const Marker = ({ lat, lng, markerImage, ...restOptions }) => {
  const { kakaoMapObj, map } = useContext(KakaoMapContext);

  useEffect(() => {
    if (!map) return;
    const markerLat = lat || defaultMapOptions.lat;
    const markerLng = lng || defaultMapOptions.lng;

    const marker = new kakaoMapObj.maps.Marker({
      map,
      position: new kakaoMapObj.maps.LatLng(markerLat, markerLng)
    });
  }, [map]);

  return null;
};

export default Marker;
