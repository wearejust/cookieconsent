import { type CookieConsentConfig } from "vanilla-cookieconsent";

export const defaultConfig = {
  guiOptions: {
    consentModal: {
      layout: "box wide",
      position: "bottom right",
      flipButtons: true,
      equalWeightButtons: false,
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
      enabled: true,
    },
    analytics: {},
    marketing: {},
    preference: {},
  },
  language: {
    default: "nl",
    autoDetect: "document",
    translations: {
      nl: {
        consentModal: {
          title: "",
          description: `Wij maken gebruik van functionele en analytische cookies om onze website te optimaliseren. Door gebruik te maken van deze website ga je akkoord met ons <a href='/privacy'>privacybeleid</a>. Je kunt ook je <button type='button' data-cc='show-preferencesModal' aria-haspopup='dialog'>voorkeuren aanpassen</button>.`,
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
            {
              title: "Voorkeurscookies",
              description:
                "Voorkeurscookies zorgen ervoor dat een website informatie kan onthouden die van invloed is op het gedrag en de vormgeving van de website, zoals de taal van uw voorkeur of de regio waar u woont.",
              linkedCategory: "preference",
            },
          ],
        },
      },
      en: {
        consentModal: {
          title: "",
          description: `We use functional and analytical cookies to optimize our website. By using this website, you agree to our <a href='/en/privacy'>privacy policy</a>. You can also <button type='button' data-cc='show-preferencesModal' aria-haspopup='dialog'>adjust your preferences</button>.`,
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
            {
              title: "Preference Cookies",
              description:
                "Preference cookies allow a website to remember information that influences the behavior and appearance of the website, such as your preferred language or the region you live in.",
              linkedCategory: "preference",
            }
          ],
        },
      },
      de: {
        consentModal: {
          description: `Wir verwenden funktionale und analytische Cookies, um unsere Website zu optimieren. Durch die Nutzung dieser Website stimmen Sie unserer <a href='/de/privacy'>Datenschutzerklärung</a> zu. Sie können auch Ihre <button type='button' data-cc='show-preferencesModal' aria-haspopup='dialog'>einstellungen anpassen</button>.`,
          acceptAllBtn: "Zustimmen",
          acceptNecessaryBtn: "Ablehnen",
        },
        preferencesModal: {
          title: "Einwilligungspräferenzen",
          acceptAllBtn: "Alle akzeptieren",
          acceptNecessaryBtn: "Alle ablehnen",
          savePreferencesBtn: "Einstellungen speichern",
          closeIconLabel: "Schließen",
          serviceCounterLabel: "Dienst|Dienste",
          sections: [
            {
              title:
                'Unbedingt erforderliche Cookies <span class="pm__badge">Immer aktiviert</span>',
              description:
                "Erforderliche Cookies tragen dazu bei, eine Website nutzbar zu machen, indem sie Grundfunktionen wie Seitennavigation und Zugang zu sicheren Bereichen der Website ermöglichen. Ohne diese Cookies kann die Website nicht richtig funktionieren.",
              linkedCategory: "necessary",
            },
            {
              title: "Analytische Cookies",
              description:
                "Analytische Cookies helfen Website-Betreibern zu verstehen, wie Besucher ihre Website nutzen, indem sie anonym Daten sammeln und melden.",
              linkedCategory: "analytics",
            },
            {
              title: "Marketing-Cookies",
              description:
                "Marketing-Cookies werden verwendet, um Besucher über Websites hinweg zu verfolgen. Die Absicht ist, Anzeigen zu zeigen, die für den einzelnen Benutzer relevant und ansprechend sind und somit wertvoller für Publisher und Drittanbieter-Werbetreibende sind.",
              linkedCategory: "marketing",
            },
            {
              title: "Präferenz-Cookies",
              description:
                "Präferenz-Cookies ermöglichen es einer Website, Informationen zu speichern, die das Verhalten und das Erscheinungsbild der Website beeinflussen, wie z. B. Ihre bevorzugte Sprache oder die Region, in der Sie wohnen.",
              linkedCategory: "preference",
            }
          ],
        },
      },
    },
  },
} satisfies CookieConsentConfig;
