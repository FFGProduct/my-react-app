/*
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
*/
import { init, LiveboardEmbed, AuthType } from "@thoughtspot/visual-embed-sdk";
import React, { useEffect } from "react";

init({
  thoughtSpotHost: "https://team3.thoughtspot.cloud",
  authType: AuthType.Basic,
  username: "product@fiftyfivegroup.com.au",
  password: "DX3w#fC6*mdTtm!eGswg",
});

export default function App() {
  useEffect(() => {
    const embed = new LiveboardEmbed("#embed", {
      frameParams: {},
      liveboardId: "b6bb40a3-57dc-4b46-bfdc-9d76fbb74491",
    });
    embed
    // Register event listeners
    .on(EmbedEvent.Init, showLoader)
    .on(EmbedEvent.Load, hideLoader)
    /*param-start-customActionHandle*//*param-end-customActionHandle*/
    .on(EmbedEvent.Error, (error) => {
        if(error?.data?.errorType === 'FULLSCREEN') {
          showErrorBanner('none');
        } else 
        if(typeof(error.error) === 'string') {
          showErrorBanner('flex', error.error);
        } else {
          showErrorBanner('flex');
        }
        console.log('Error ', error);
        hideLoader();
    })
    // Render a viz within a liveboard
    .render();

/*param-start-useHostEvent*/
/*param-end-useHostEvent*/

// Function to show/hide
function setDisplayStyle(el, style) {
  if(document.getElementById(el)) {
    document.getElementById(el).style.display = style;
  }
}

// Functions to show and hide a loader while iframe loads
function showLoader() {
  setDisplayStyle("loader", "block");
}
function hideLoader() {
  setDisplayStyle("loader", "none");
}

// Functions to show or hide No data images
function showNoDataImage() {
  setDisplayStyle("no-data", "block");
}

function hideNoDataImage() {
  setDisplayStyle("no-data", "none");
}

function showErrorBanner(display, errorText) {
  setDisplayStyle("errorBanner", display);
  if(errorText) {
    document.getElementById("errorBanner").firstElementChild.innerText = errorText;
  }
}
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
