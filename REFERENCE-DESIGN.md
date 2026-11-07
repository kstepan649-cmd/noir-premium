# Reference-led rebuild notes

This repository contains six independent static front-end recreations based on the supplied live references. Each page has its own markup, styles, assets, responsive rules, and interaction logic; the project does not use a shared landing-page template.

## Reference map

| Local page | Reference | Captured visual direction | Recreated behavior |
|---|---|---|---|
| `1-detail-lab/` | https://www.designdetail.io/ | Near-black product SaaS page, cool blue/green and coral accents, Space Grotesk/Inter-like typography | Sticky anchor header, animated gradient headline, editable preview heading, four live accent swatches, desktop/mobile preview toggle, currency selector, FAQ accordions, scroll reveals |
| `2-metallwerk/` | https://www.stanki.ru/ | White industrial equipment catalog, Montserrat, navy #273583 and orange #F3743F | Two-tier sticky header, category mega menu, search interaction, rotating hero banners, category tabs, product cards, compare/cart states, installment products, map feature, machine gallery, review tabs, animated fish and scroll-to-top |
| `3-barber/` | https://vbarbershop.com/ | Traditional barbershop retail, warm parchment, forest green and brass, display condensed type | Announcement strip, search overlay, category mega menus, compact sticky header, product carousel and add-to-bag, grooming routine tabs, parallax-style story panel, location list, continuous marquee, 15%-off modal, cookie controls |
| `4-osteria/` | https://www.cafedelapaix.fr/en/ | Parisian heritage restaurant, elegant editorial photography, green accents, high-contrast serif typography | Dual contact/navigation bands, language dropdown, on-load music promotion modal, discover scroll action, restaurant and café sections, image gallery navigation, location/transit details, newsletter form, reservation preview modal and cookie controls |
| `5-pulito/` | https://pearlyskyglobalclean.com/en | Navy and gold luxury service site, warm neutral country/network panels, Geist/serif display typography | On-load 4-region choice, searchable country directory with live local-market links, department email cards, hero with service CTAs, phone-code/contact form, location marquee, language dropdown, chat panel and cookie controls |
| root `/` | https://site.cafe/ru/ | Dark coffee-brown canvas, sage/tan accents, round buttons, playful illustration-led split hero | Fixed nav and RU/EN dropdown, three service tabs with four cards each, project showcase, animated counters, expandable advantages, contact form, cookie controls and scroll reveals |

## Build notes

- Image assets are sourced from the corresponding reference sites' public image paths where possible, rather than repeating generic stock photos across pages.
- Each page intentionally preserves the source site's distinct information architecture instead of forcing a common hero/cards/pricing layout.
- Interactive elements are front-end demonstrations. Form submissions, account flows, payments, reservations, shopping checkout and CRM delivery require the relevant production backend or third-party provider.
- Third-party image hosts and fonts are loaded over HTTPS; availability can depend on those services.


## Presentation rule

Do not use decorative numeric labels such as `01`, `02`, `03` for sections, steps, cards, tabs, or eyebrow headings. Use plain descriptive labels or headings instead. Keep meaningful numbers such as years, prices, specifications, addresses, and contact details unchanged.
