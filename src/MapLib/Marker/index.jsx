import React, {useContext, useEffect, useState} from 'react';
import {KakaoMapContext} from '../KakaoMap';
import {defaultMapOptions} from '../../constants';
import PropTypes from 'prop-types';

Marker.propTypes = {
  lat: PropTypes.number,
  lng: PropTypes.number,
  image: PropTypes.string,
  children: PropTypes.object,
};

export const MarkerContext = React.createContext({});

export default function Marker({lat, lng, image, children, ...options}) {
  const {kakaoMapObj, map} = useContext(KakaoMapContext);
  const [state, setState] = useState({
    marker: null,
    width: 0,
    height: 0,
  });
  const {width, height, ...restOptions} = options;

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
        image: marekrImage,
        ...restOptions,
      }),
      width: markerWidth,
      height: markerHeight,
    });

    return () => {
      if (state && state.marker) state.marker.setMap(null);
    };
  }, [map]);

  return (
    <MarkerContext.Provider value={{...state}}>
      {children}
    </MarkerContext.Provider>
  );
};
