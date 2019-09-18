import { useState, useEffect } from "react";
import scriptjs from "scriptjs";

const useScriptLoad = ({ url }) => {
  const [state, setState] = useState({
    scriptLoaded: false
  });

  useEffect(() => {
    scriptjs(url, () => setState({ scriptLoaded: true }));
  }, []);

  if (state.scriptLoaded) {
    return true;
  } else {
    return false;
  }
};

export default useScriptLoad;
