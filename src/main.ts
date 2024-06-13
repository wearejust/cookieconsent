import { type CookieConsentConfig } from "vanilla-cookieconsent";
import * as CookieConsent from "vanilla-cookieconsent";
import { merge } from "ts-deepmerge";

import "vanilla-cookieconsent/dist/cookieconsent.css";

import { defaultConfig } from "@/constants";
import { DeepPartial } from "@/types";

export const run = async (configuration: DeepPartial<CookieConsentConfig>) => {
  const table = document.querySelector("[data-wearejust-cookietable-uuid]");
  if (table) {
    let uuid = table.getAttribute("data-wearejust-cookietable-uuid");

    fetch(`https://cookies.wearejust.com/table/${uuid}`, {
      method: "GET",
      headers: {
        "Content-Type": "text/html",
      },
    })
      .then((response) => response.text())
      .then((html) => (table.innerHTML = html))
      .catch((error) => {
        console.error(error);
      });
  }

  const mergedConfiguration = merge(defaultConfig, configuration);
  await CookieConsent.run(mergedConfiguration as CookieConsentConfig);
};

export {
  acceptCategory,
  acceptedCategory,
  acceptService,
  acceptedService,
  eraseCookies,
  getConfig,
  getCookie,
  getUserPreferences,
  hide,
  hidePreferences,
  loadScript,
  reset,
  setCookieData,
  setLanguage,
  show,
  showPreferences,
  validConsent,
  validCookie,
} from "vanilla-cookieconsent";
