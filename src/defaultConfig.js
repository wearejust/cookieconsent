export const defaultConfig = {
    guiOptions: {
        consentModal: {
            layout: "box wide",
            position: "bottom right",
            equalWeightButtons: false,
            flipButtons: true
        },
        preferencesModal: {
            layout: "box",
            position: "right",
            equalWeightButtons: true,
            flipButtons: false
        }
    },
    categories: {
        necessary: {
            readOnly: true
        },
        analytics: {}
    },
    language: {
        default: "nl",
        translations: {
            nl: {
                consentModal: {
                  title: "Deze website maakt gebruik van cookies",
                  description: "Wij maken gebruik van functionele en analytische cookies om onze website te optimaliseren. Door gebruik te maken van deze website ga je akkoord met onze voorwaarden.",
                  acceptAllBtn: "Alles accepteren",
                  acceptNecessaryBtn: "Afwijzen",
                  showPreferencesBtn: "Voorkeuren beheren",
                  footer: `<a href="#link">Privacybeleid</a>
        <a href="#link">Algemene voorwaarden</a>`
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
                      title: "Cookiegebruik",
                      description: "Deze website maakt gebruik van cookie technologie binnen de gestelde kaders van de AVG."
                    },
                    {
                      title: 'Strikt noodzakelijke cookies <span class="pm__badge">Altijd ingeschakeld</span>',
                      description: "Noodzakelijke cookies helpen een website bruikbaarder te maken, door basisfuncties als paginanavigatie en toegang tot beveiligde gedeelten van de website mogelijk te maken. Zonder deze cookies kan de website niet naar behoren werken.",
                      linkedCategory: "necessary"
                    },
                    {
                      title: "Analytische cookies",
                      description: "Analytische cookies helpen eigenaren van websites begrijpen hoe bezoekers hun website gebruiken, door anoniem gegevens te verzamelen en te rapporteren.",
                      linkedCategory: "analytics"
                    },
                  ]
                }
            },
            en: {
                consentModal: {
                    title: "Deze website maakt gebruik van cookies",
                    description: "We use functional and analytical cookies to optimize our website. By using this website, you agree to our terms and conditions.",
                    acceptAllBtn: "Accept all",
                    acceptNecessaryBtn: "Reject all",
                    showPreferencesBtn: "Manage preferences",
                    footer: "<a href=\"#link\">Privacy Policy</a>\n<a href=\"#link\">Terms and conditions</a>"
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
                            description: "This website uses cookie technology within the established framework of the GDPR."
                        },
                        {
                            title: "Strictly Necessary Cookies <span class=\"pm__badge\">Always Enabled</span>",
                            description: "Necessary cookies help make a website more usable, by enabling basic functions such as page navigation and access to secure areas of the website. Without these cookies, the website cannot function properly.",
                            linkedCategory: "necessary"
                        },
                        {
                            title: "Analytics Cookies",
                            description: "Analytical cookies help website owners understand how visitors use their website by anonymously collecting and reporting data.",
                            linkedCategory: "analytics"
                        },
                    ]
                }
            }
        },
        autoDetect: "browser"
    }
}
