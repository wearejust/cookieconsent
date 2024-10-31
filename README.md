# CookieConsent

This cookiebar is a small wrapper around [CookieConsent](https://cookieconsent.orestbida.com/). It has some nice defaults that we tent to use.

## Installation

```bash
// yarn
yarn add @wearejust/cookieconsent

// pnpm
pnpm install @wearejust/cookieconsent
```

## Usage

### Javascript

```javascript
import * as CookieConsent from "@wearejust/cookieconsent";

CookieConsent.run({
  guiOptions: {
    // Three variants
    // Variant 1 - Box Right
    consentModal: {
      layout: "box",
      position: "bottom right",
    },
    // Variant 2 - Box Left
    consentModal: {
      layout: "box",
      position: "bottom left",
    },
    // Variant 3 - Bottom Bar
    consentModal: {
      layout: "bar inline",
      position: "bottom",
    },
  },
  // Specify the categories needed. You can disable an category using false
  // For example; marketing: false. Also use enabled: true to default toggle on category
  // when opening the preferences modal
  categories: {
    necessary: {
      readOnly: true,
      enabled: true,
    },
    analytics: {
      enabled: true,
    },
    marketing: {
      enabled: true,
    },
    preference: {
      enabled: true,
    },
  },
  // Please adjust the link to the privacy page. The chosen language is done by the <html lang='nl'> tag.
  language: {
    default: "nl",
    translations: {
      nl: {
        consentModal: {
          description: `Wij maken gebruik van functionele en analytische cookies om onze website te optimaliseren. Door gebruik te maken van deze website ga je akkoord met ons <a href='/privacy'>privacybeleid</a>. Je kunt ook je <button type='button' data-cc='show-preferencesModal' aria-haspopup='dialog'>voorkeuren aanpassen</button>.`,
        },
      },
      en: {
        consentModal: {
          description: `We use functional and analytical cookies to optimize our website. By using this website, you agree to our <a href='/en/privacy'>privacy policy</a>. You can also <button type='button' data-cc='show-preferencesModal' aria-haspopup='dialog'>adjust your preferences</button>.`,
        },
      },
      de: {
        consentModal: {
          description: `Wir verwenden funktionale und analytische Cookies, um unsere Website zu optimieren. Durch die Nutzung dieser Website stimmen Sie unserer <a href='/de/privacy'>Datenschutzerklärung</a> zu. Sie können auch Ihre <button type='button' data-cc='show-preferencesModal' aria-haspopup='dialog'>einstellungen anpassen</button>.`,
        },
      },
    },
  },
});
```

### Styles

Of course these are some default styles but overwrite the styles that you need.

```css
@import "@wearejust/cookieconsent/dist/style.css";
@import "@wearejust/cookieconsent/src/styles/default.css";

#cc-main {
  font-size: 1.125rem;

  --wearejust-primary-color: #df340a;
  --wearejust-primary-hover-color: #ce4000;
  --white: #ffffff;
  --cc-toggle-on-bg: var(--wearejust-primary-color);

  --cc-font-family: "ProximaNova", sans-serif;
  --button-font-family: "ProximaNova", sans-serif;

  --cc-bg: #fff;

  --cc-modal-border-radius: 0;
  --cc-btn-border-radius: 0;

  --cc-secondary-color: black;

  --cc-btn-primary-bg: var(--wearejust-primary-color);
  --cc-btn-primary-hover-bg: var(--wearejust-primary-hover-color);
  --cc-btn-primary-hover-color: #fff;
  --cc-btn-primary-border-color: var(--wearejust-primary-color);
  --cc-btn-primary-hover-border-color: var(--wearejust-primary-hover-color);

  --cc-btn-secondary-color: var(--wearejust-primary-color);
  --cc-btn-secondary-bg: var(--white);
  --cc-btn-secondary-hover-bg: var(--wearejust-primary-color);
  --cc-btn-secondary-hover-color: #fff;
  --cc-btn-secondary-border-color: var(--wearejust-primary-color);
  --cc-btn-secondary-hover-border-color: var(--wearejust-primary-color);

  --cc-cookie-category-block-bg: var(--white);
  --cc-cookie-category-block-hover-bg: var(--white);
  --cc-cookie-category-block-border: var(--white);
  --cc-cookie-category-block-hover-border: var(--white);
  --cc-cookie-category-expanded-block-bg: var(--white);
  --cc-cookie-category-expanded-block-hover-bg: var(--white);
  --cc-separator-border-color: transparent;

  .cm {
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
  }

  .section__toggle:checked ~ .toggle__icon {
    background: var(--cc-toggle-on-bg) !important;
  }

  .toggle__icon-on svg {
    stroke: var(--cc-toggle-on-bg) !important;
  }

  .section__toggle:checked:disabled ~ .toggle__icon .toggle__icon-circle {
    background-color: white !important;
  }

  .section__toggle:checked:disabled ~ .toggle__icon svg {
    stroke: var(--wearejust-primary-color) !important;
  }

  .section__toggle:checked:disabled ~ .toggle__icon svg {
    stroke: var(--wearejust-primary-color);
  }
}
```

## Option 1: Google Tag Manager Consent mode

```html
// Add this code to the
<head>
  <script>
    // Define dataLayer and the gtag function.
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('consent', 'default', {{ get_cookie_preferences() }});
  </script>

  <script>
    (function (w, d, s, l, i) {
      w[l] = w[l] || [];
      w[l].push({ "gtm.start": new Date().getTime(), event: "gtm.js" });
      var f = d.getElementsByTagName(s)[0],
        j = d.createElement(s),
        dl = l != "dataLayer" ? "&l=" + l : "";
      j.async = true;
      j.src = "https://www.googletagmanager.com/gtm.js?id=" + i + dl;
      f.parentNode.insertBefore(j, f);
    })(window, document, "script", "dataLayer", "{{ get_google_tag() }}");
  </script>

  <script type="text/plain" data-category="analytics">
    gtag('consent', 'update', {
        'analytics_storage': 'granted'
    });
  </script>

  <script type="text/plain" data-category="!analytics">
    gtag('consent', 'update', {
        'analytics_storage': 'denied'
    });
  </script>

  <script type="text/plain" data-category="marketing">
    gtag('consent', 'update', {
        'ad_storage': 'granted',
        'ad_personalization': 'granted',
        'ad_user_data': 'granted'
    });
  </script>

  <script type="text/plain" data-category="!marketing">
    gtag('consent', 'update', {
        'ad_storage': 'denied',
        'ad_personalization': 'denied',
        'ad_user_data': 'denied'
    });
  </script>

  <script type="text/plain" data-category="preference">
    gtag('consent', 'update', {
        'personalization_storage': 'granted'
    });
  </script>

  <script type="text/plain" data-category="!preference">
    gtag('consent', 'update', {
        'personalization_storage': 'denied'
    });
  </script>
</head>
```

And add this directly in the `<body` tag

```html
<noscript
  ><iframe
    src="https://www.googletagmanager.com/ns.html?id={{ get_google_tag() }}"
    height="0"
    width="0"
    style="display:none;visibility:hidden"
  ></iframe
></noscript>
```

As you can see there are two extra methods needed from the backend. `get_google_tag` and `get_cookie_preferences`. We can do that within PHP

```php
function get_cookie_preferences()
{
  $cookie = $_COOKIE['cc_cookie'] ?? '{}';
  $cookie = json_decode($cookie, true);

  return json_encode([
      'ad_storage' =>         in_array('marketing', $cookie['categories'] ?? []) ? 'granted' : 'denied',
      'analytics_storage' =>  in_array('analytics', $cookie['categories'] ?? []) ? 'granted' : 'denied',
      'ad_user_data' =>       in_array('marketing', $cookie['categories'] ?? []) ? 'granted' : 'denied',
      'ad_personalization' => in_array('marketing', $cookie['categories'] ?? []) ? 'granted' : 'denied',
      'personalization_storage' => in_array('preference', $cookie['categories'] ?? []) ? 'granted' : 'denied',

      'functionality_storage' => 'granted',
      'security_storage' => 'granted',
  ]);
}

function get_google_tag()
{
  return 'GTM-XXXXX';
}

```

## Option 2: Google Analytics

```html
<script
  type="text/plain"
  data-category="analytics"
  data-service="Google Analytics"
  async
  src="https://www.googletagmanager.com/gtag/js?id={{ get_google_tag() }}"
></script>
<script
  type="text/plain"
  data-category="analytics"
  data-service="Google Analytics"
>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', '{{ get_google_tag() }}');
</script>
```

### Cookietable (optional)

The table renderes a table of the used cookies. We usually place this in the default content page with an `if` statement to check if it's the privacy page or not.

```twig
// Replace UUID with the uuid
{% if page.slug == 'privacy' %}
    <div class="container">
        <div id="wearejust-cc-cookietable" data-wearejust-cookietable-uuid="$UUID"></div>
        <a data-cc="show-preferencesModal" id="wearejust-cc-cookietable--change" href="#">Verander uw toestemming</a>
    </div>
{% endif %}
```
