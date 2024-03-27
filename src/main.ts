import { type CookieConsentConfig } from "vanilla-cookieconsent";
import * as CookieConsent from "vanilla-cookieconsent";
import { merge } from "ts-deepmerge";

import "vanilla-cookieconsent/dist/cookieconsent.css";
import "./styles/overrides.css";

import { defaultConfig } from "@/constants";
import { DeepPartial } from "@/types";

export const run = async (configuration: DeepPartial<CookieConsentConfig>) => {
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
