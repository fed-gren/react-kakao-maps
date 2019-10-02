import {useState, useEffect} from 'react';
import useScriptLoad from './useScriptLoad';

export default function useKakaoMapLoad({apiUrl}) {
  const [state, setState] = useState({
    kakaoMapLoaded: false,
    kakaoMapObj: null,
  });
  const scriptLoaded = useScriptLoad({
    url: apiUrl,
  });

  useEffect(() => {
    const kakao = window.kakao;
    kakao &&
      kakao.maps.load(() => {
        setState({
          kakaoMapLoaded: true,
          kakaoMapObj: window.kakao,
        });
      });
  }, [scriptLoaded]);

  return {...state};
}
