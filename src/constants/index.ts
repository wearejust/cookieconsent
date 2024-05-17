import { type CookieConsentConfig } from "vanilla-cookieconsent";

export const defaultConfig = {
  guiOptions: {
    consentModal: {
      layout: "box wide",
      position: "bottom right",
      flipButtons: true,
    },
    preferencesModal: {
      layout: "box",
      position: "right",
      flipButtons: false,
    },
  },
  categories: {
    necessary: {
      readOnly: true,
    },
    analytics: {},
    marketing: {},
  },
  language: {
    default: "nl",
    autoDetect: "document",
    translations: {
      nl: {
        consentModal: {
          title: "",
          description:
            "Wij maken gebruik van functionele en analytische cookies om onze website te optimaliseren. Door gebruik te maken van deze website ga je akkoord met ons <a href='/privacybeleid'>privacybeleid</a><br/><button type='button' data-cc='show-preferencesModal' aria-haspopup='dialog'>Voorkeuren aanpassen</button>",
          acceptAllBtn: "Akkoord",
          acceptNecessaryBtn: "Afwijzen",
          footer: "",
        },
        preferencesModal: {
          title: "Toestemmingen",
          acceptAllBtn: "Alles accepteren",
          acceptNecessaryBtn: "Alles afwijzen",
          savePreferencesBtn: "Voorkeuren opslaan",
          closeIconLabel: "Sluiten",
          serviceCounterLabel: "Dienst|Diensten",
          sections: [
            {
              title:
                'Strikt noodzakelijke cookies <span class="pm__badge">Altijd ingeschakeld</span>',
              description:
                "Noodzakelijke cookies helpen een website bruikbaarder te maken, door basisfuncties als paginanavigatie en toegang tot beveiligde gedeelten van de website mogelijk te maken. Zonder deze cookies kan de website niet naar behoren werken.",
              linkedCategory: "necessary",
            },
            {
              title: "Analytische cookies",
              description:
                "Analytische cookies helpen eigenaren van websites begrijpen hoe bezoekers hun website gebruiken, door anoniem gegevens te verzamelen en te rapporteren.",
              linkedCategory: "analytics",
            },
            {
              title: "Marketing cookies",
              description:
                "Marketingcookies worden gebruikt om bezoekers op websites te volgen. De bedoeling is om advertenties weer te geven die relevant en aantrekkelijk zijn voor de individuele gebruiker en daardoor waardevoller voor uitgevers en externe adverteerders.",
              linkedCategory: "marketing",
            },
          ],
        },
      },
      en: {
        consentModal: {
          title: "",
          description:
            "We use functional and analytical cookies to optimize our website. By using this website, you agree to our <a href='/privacybeleid'>privacy policy</a><br/><button type='button' data-cc='show-preferencesModal' aria-haspopup='dialog'>Adjust preferences</button>",
          acceptAllBtn: "Agree",
          acceptNecessaryBtn: "Reject",
          footer: "",
        },
        preferencesModal: {
          title: "Consent Preferences",
          acceptAllBtn: "Accept all",
          acceptNecessaryBtn: "Reject all",
          savePreferencesBtn: "Save preferences",
          closeIconLabel: "Close",
          serviceCounterLabel: "Service|Services",
          sections: [
            {
              title:
                'Strictly Necessary Cookies <span class="pm__badge">Always Enabled</span>',
              description:
                "Necessary cookies help make a website more usable, by enabling basic functions such as page navigation and access to secure areas of the website. Without these cookies, the website cannot function properly.",
              linkedCategory: "necessary",
            },
            {
              title: "Analytics Cookies",
              description:
                "Analytical cookies help website owners understand how visitors use their website by anonymously collecting and reporting data.",
              linkedCategory: "analytics",
            },
            {
              title: "Marketing cookies",
              description:
                "Marketing cookies are used to track visitors across websites. The intention is to display ads that are relevant and engaging for the individual user and thereby more valuable for publishers and third party advertisers.",
              linkedCategory: "marketing",
            },
          ],
        },
      },
    },
  },
} satisfies CookieConsentConfig;
