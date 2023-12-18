import * as CookieConsent from "vanilla-cookieconsent"
import { defaultConfig } from "./defaultConfig";

const mergeConfigs = (defaultConfig, userConfig) => {
    const mergedConfig = { ...defaultConfig };

    for (const [key, userValue] of Object.entries(userConfig)) {
        const isObject = typeof userValue === 'object' && userValue !== null && !Array.isArray(userValue);
        const hasDefault = defaultConfig.hasOwnProperty(key);

        mergedConfig[key] = isObject && hasDefault
            ? mergeConfigs(defaultConfig[key], userValue)
            : userValue;
    }

    return mergedConfig;
};

// Export your custom run method
export const run = async (userConfig = {}) => {
    await CookieConsent.run(mergeConfigs(defaultConfig, userConfig));
};

export const acceptCategory = CookieConsent.acceptCategory;
export const acceptedCategory = CookieConsent.acceptedCategory;
export const acceptedService = CookieConsent.acceptedService;
export const acceptService = CookieConsent.acceptService;
export const eraseCookies = CookieConsent.eraseCookies;
export const getConfig = CookieConsent.getConfig;
export const getCookie = CookieConsent.getCookie;
export const getUserPreferences = CookieConsent.getUserPreferences;
export const hide = CookieConsent.hide;
export const hidePreferences = CookieConsent.hidePreferences;
export const loadScript = CookieConsent.loadScript;
export const reset = CookieConsent.reset;
export const setCookieData = CookieConsent.setCookieData;
export const setLanguage = CookieConsent.setLanguage;
export const show = CookieConsent.show;
export const showPreferences = CookieConsent.showPreferences;
export const validConsent = CookieConsent.validConsent;
export const validCookie = CookieConsent.validCookie;