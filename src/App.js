import { init, AppEmbed, AuthType } from "@thoughtspot/visual-embed-sdk"; import React, { useEffect } from "react";

init({
  thoughtSpotHost: "https://team3.thoughtspot.cloud/#/pinboard/b6bb40a3-57dc-4b46-bfdc-9d76fbb74491",
  authType: AuthType.Basic,
  username: "ash@fiftyfivegroup.com.au",
  password: "DX3w#fC6*mdTtm!eGswg",
});
export default function App() {
  useEffect(() => {
    const embed = new AppEmbed("#embed", {
      modularHomeExperience: true,
    }).render();
  }, []);

  return (
    <div id="body">
      <div id="embed"></div>
    </div>
  );
}
