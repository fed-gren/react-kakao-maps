import React, { useContext, useEffect } from "react";
import PropTypes from "prop-types";
import { KakaoMapContext } from "../KakaoMap";
import { MarkerContext } from "../Marker";
import ReactDOMServer from "react-dom/server";
import CustomOverlayContainer from "../CustomgOverlayContainer";

const CustomOverlay = ({ content, lat, lng, ...restOptions }) => {
  const { kakaoMapObj, map } = useContext(KakaoMapContext);
  const { marker, height: markerHeight } = useContext(MarkerContext);

  useEffect(() => {
    if (map === null || marker === null) return;

    const position =
      marker === undefined
        ? new kakao.maps.LatLng(lat, lng)
        : marker.getPosition();

    const overlayContent =
      marker === undefined
        ? ReactDOMServer.renderToString(content)
        : ReactDOMServer.renderToString(
            <CustomOverlayContainer
              {...{ content }}
              bottom={`${markerHeight}px`}
            />
          );
    const yAnchor = marker === undefined ? 0.5 : 1;

    new kakaoMapObj.maps.CustomOverlay({
      map,
      position,
      content: overlayContent,
      yAnchor,
      ...restOptions
    });
  }, [map, marker]);

  return null;
};

CustomOverlay.propTypes = {
  content: PropTypes.object.isRequired,
  lat: PropTypes.number,
  lng: PropTypes.number
};

export default CustomOverlay;
