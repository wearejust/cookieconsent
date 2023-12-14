import * as CookieConsent from "vanilla-cookieconsent"
import { defaultConfig } from "./defaultConfig";

const mergeConfigs = (defaultConfig, userConfig) => {
    const mergedConfig = { ...defaultConfig };

    for (const key in userConfig) {
        if (userConfig.hasOwnProperty(key)) {
            if (typeof userConfig[key] === 'object' && userConfig[key] !== null && defaultConfig[key]) {
                mergedConfig[key] = mergeConfigs(defaultConfig[key], userConfig[key]);
            } else {
                mergedConfig[key] = userConfig[key];
            }
        }
    }

    return mergedConfig;
}

// Export your custom run method
export const run = async (userConfig = {}) => {
    await CookieConsent.run(mergeConfigs(defaultConfig, userConfig));
};

export const acceptService = CookieConsent.acceptCategory;
export const acceptedCategory = CookieConsent.acceptedCategory;
export const acceptedService = CookieConsent.acceptedService;
export const getUserPreferences = CookieConsent.getUserPreferences;
