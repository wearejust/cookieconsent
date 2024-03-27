import { type CookieConsentConfig } from "vanilla-cookieconsent";

export const defaultConfig = {
  guiOptions: {
    consentModal: {
      layout: "box",
      position: "bottom right",
    },
    preferencesModal: {
      layout: "box",
      position: "right",
    },
  },
  categories: {
    necessary: {
      readOnly: true,
    },
    analytics: {},
  },
  language: {
    default: "nl",
    translations: {
      nl: {
        consentModal: {
          description: `
          We gebruiken cookies en vergelijkbare technieken om je bezoek zo prettig mogelijk te maken, je online activiteiten te analyseren en om af en toe advertenties te tonen die voor jou interessant kunnen zijn.
          <a role="button" data-cc="show-preferencesModal">Pas voorkeuren aan</a>
        `,
          acceptAllBtn: "Alles accepteren",
          acceptNecessaryBtn: "Alles weigeren",
        },
        preferencesModal: {
          acceptAllBtn: "Alles accepteren",
          acceptNecessaryBtn: "Alles weigeren",
          savePreferencesBtn: "Voorkeuren opslaan",
          closeIconLabel: "Sluiten",
          serviceCounterLabel: "Dienst|Diensten",
          sections: [
            {
              description:
                "Deze website maakt gebruik van cookie technologie binnen de gestelde kaders van de AVG.",
            },
            {
              linkedCategory: "necessary",
              title:
                'Strikt noodzakelijke cookies <span class="pm__badge">Altijd ingeschakeld</span>',
              description:
                "Noodzakelijke cookies helpen een website bruikbaarder te maken, door basisfuncties als paginanavigatie en toegang tot beveiligde gedeelten van de website mogelijk te maken. Zonder deze cookies kan de website niet naar behoren werken.",
            },
            {
              linkedCategory: "analytics",
              title: "Analytische cookies",
              description:
                "Analytische cookies helpen eigenaren van websites begrijpen hoe bezoekers hun website gebruiken, door anoniem gegevens te verzamelen en te rapporteren.",
            },
          ],
        },
      },
      en: {
        consentModal: {
          title: "This website uses cookies",
          description:
            "We use functional and analytical cookies to optimize our website. By using this website, you agree to our terms and conditions.",
          acceptAllBtn: "Accept all",
          acceptNecessaryBtn: "Reject all",
          showPreferencesBtn: "Manage preferences",
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
              title: "Cookie Usage",
              description:
                "This website uses cookie technology within the established framework of the GDPR.",
            },
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
          ],
        },
      },
    },
    autoDetect: "browser",
  },
} satisfies CookieConsentConfig;
