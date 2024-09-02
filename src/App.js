import { init, AppEmbed, AuthType } from "@thoughtspot/visual-embed-sdk"; import React, { useEffect } from "react";

init({
  thoughtSpotHost: "https://team3.thoughtspot.cloud/#/pinboard/b6bb40a3-57dc-4b46-bfdc-9d76fbb74491",
  authType: AuthType.Basic,
  username: "product@fiftyfivegroup.com.au",
  password: "DX3w#fC6*mdTtm!eGswg",
});

export default function App() {
  useEffect(() => {
    const embed = new LiveboardEmbed("#embed", {
    frameParams: {},
     liveboardId: "b6bb40a3-57dc-4b46-bfdc-9d76fbb74491",
  })render();
  }, []);

  return (
    <div
      id="embed"
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        margin: 0,
        padding: 0,
        overflow: 'hidden',
      }}
    ></div>
  );
}
