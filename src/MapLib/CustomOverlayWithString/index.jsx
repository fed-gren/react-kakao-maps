import {useContext, useMemo, useCallback, useEffect} from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import {KakaoMapContext} from '../KakaoMap';
import {MarkerContext} from '../Marker';

CustomOverlayWithString.propTypes = {
  content: PropTypes.string.isRequired,
  styles: PropTypes.array,
  events: PropTypes.array,
  lat: PropTypes.number,
  lng: PropTypes.number,
};

export default function CustomOverlayWithString({
  content,
  styles,
  events,
  lat,
  lng,
  ...restOptions
}) {
  const {kakaoMapObj, map} = useContext(KakaoMapContext);
  const {marker, height: markerHeight} = useContext(MarkerContext);

  const getPosition = useCallback(
      (marker) => ({
        overlayLat: marker ? marker.getPosition().getLat() : lat,
        overlayLng: marker ? marker.getPosition().getLng() : lng,
      }),
      [marker]
  );

  const getOverlayContent = useCallback(
      (marker) =>
      marker ?
        <Container {...{markerHeight}}>{content}</Container> :
        content,
      [marker]
  );

  const getYAnchor = useCallback((marker) => (marker ? 1 : 0.5), [marker]);

  const overlayState = useMemo(() => {
    return {
      position: getPosition(marker),
      content: getOverlayContent(marker),
      yAnchor: getYAnchor(marker),
    };
  }, [marker]);

  const applyStyles = (styles) => {
    styles.forEach((styleObj) => {
      const [[className, styles]] = Object.entries(styleObj);
      const el = document.querySelector(`.${className}`);
      if (!el) return;

      for (const [styleProp, styleValue] of Object.entries(styles)) {
        if (el.style.hasOwnProperty(styleProp)) el.style[styleProp] = styleValue;
      }
    });
  };

  const attachEvents = ({events, overlay, map}) => {
    const curOverlay = overlay;
    const curMap = map;

    events.forEach((eventObj) => {
      const [[eventHandlerName, eventHandlerFunction]] = Object.entries(eventObj);
      window[eventHandlerName] = (overlay = curOverlay, map = curMap) => {
        eventHandlerFunction({overlay, map});
      };
    });
  };

  useEffect(() => {
    if (!map || !overlayState) return;
    const {position, content, yAnchor} = overlayState;

    const customOverlay = new kakaoMapObj.maps.CustomOverlay({
      position: new kakaoMapObj.maps.LatLng(
          position.overlayLat,
          position.overlayLng
      ),
      content,
      yAnchor,
      ...restOptions,
    });
    customOverlay.setMap(map);
    applyStyles(styles);
    attachEvents({events: events, overlay: customOverlay, map});

    return () => customOverlay.setMap(null);
  }, [map, overlayState]);

  return null;
}

const Container = styled.div`
  position: relative;
  bottom: ${({markerHeight}) => markerHeight};
`;
