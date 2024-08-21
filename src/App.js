/*import { init, AppEmbed, AuthType } from "@thoughtspot/visual-embed-sdk"; import React, { useEffect } from "react";

init({
  thoughtSpotHost: "https://team3.thoughtspot.cloud/#/pinboard/b6bb40a3-57dc-4b46-bfdc-9d76fbb74491",
  authType: AuthType.Basic,
  username: "ash@fiftyfivegroup.com.au",
  password: "DX3w#fC6*mdTtm!eGswg",
});*/

// Import ThoughtSpot SDK
import {
  init,
  LiveboardEmbed,
  Action,
  RuntimeFilterOp,
  EmbedEvent,
  AuthType,
  HostEvent
} from "@thoughtspot/visual-embed-sdk";

import { getTokenService } from "./tokenService";
  
// Initialize embed configuration
init({
  thoughtSpotHost:
    /*param-start-hosturl*/"https://team3.thoughtspot.cloud"/*param-end-hosturl*/,
  authType: AuthType.TrustedAuthTokenCookieless,
  getAuthToken: getTokenService,
  disableTokenVerification: true,
  /*param-start-styleCustomization*//*param-end-styleCustomization*/
});

// Instantiate class for embedding a Liveboard
const embed = new LiveboardEmbed("#your-own-div", {
    frameParams: {},
    /*param-start-liveboardFullHeight*//*param-end-liveboardFullHeight*/
    /*param-start-modifyActions*//*param-end-modifyActions*/
    /*param-start-liveboardId*/
     liveboardId: "b6bb40a3-57dc-4b46-bfdc-9d76fbb74491",
/*param-end-liveboardId*/
    /*param-start-activeTabId*//*param-end-activeTabId*/
    /*param-start-runtimeFilters*//*param-end-runtimeFilters*/
});

hideNoDataImage();
showErrorBanner('none');

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
    // Render Liveboard
    .render();

/*param-start-useHostEvent*/
/*param-end-useHostEvent*/

// Functions to show/hide
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

document.getElementById('authExpiredBannerCloseBtn').addEventListener('click', () => {
  setDisplayStyle("authExpiredBanner", "none");
});

document.getElementById('errorBannerCloseBtn').addEventListener('click', () => {
  setDisplayStyle("errorBanner", "none");
});

export default function App() {
  useEffect(() => {
    const embed = new AppEmbed("#embed", {
      modularHomeExperience: true,
    }).render();
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
