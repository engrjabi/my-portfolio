import { useEffect, useState } from "react";
import { loadScript } from "./imports";

export const useLoadThirdParty = listOfAssets => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    async function loadThirdPartyLibs() {
      for (const asset of listOfAssets) {
        await loadScript(asset);
      }
      setIsReady(true);
    }

    loadThirdPartyLibs();
  }, []);

  return [isReady];
};
