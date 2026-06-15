# Truffle & Scent by LEE — Static Website Prototype

This is a polished one-page static website for Truffle & Scent by LEE.

## Files

- `index.html` — page structure and content
- `styles.css` — responsive layout and luxury animation loops
- `script.js` — scroll reveals, header state, audio toggle and subtle tilt interaction
- `assets/` — optimised WebP imagery and the local brand jingle

## Publish

Upload the folder contents to any static host, such as Netlify, Vercel, Cloudflare Pages, GitHub Pages, cPanel hosting or an Enstack custom page.

## Notes before launch

Confirm live prices, stock, delivery terms and preferred ordering channel with the owner before publishing. The audio is user-triggered rather than autoplaying, which is better for mobile visitors and browser policy compliance.


## Custom domain note
To use a branded web address, configure a custom domain in GitHub Pages and add the required DNS records with your domain registrar. If you stay on GitHub Pages without a custom domain, the public address will remain a github.io URL.


## Updating prices and stock text

Prices are now centralised in `assets/prices.js`.

To update the website prices, open `assets/prices.js` and edit only the text inside the quotation marks for each product. For example:

```js
"salsa-tartufo-180": {
  price: "₱650",
  stock: "Available now"
}
```

Keep the product key names unchanged, such as `salsa-tartufo-180` and `black-truffle-oil`. The food and perfume pages read from this single file automatically, so ordinary price changes do not require editing the full HTML pages.


## Language switch

The site now has a simple EN / Tagalog button in the header. English remains the default HTML copy. Tagalog wording is held in one editable file:

`assets/lang.js`

To adjust a Tagalog phrase, open `assets/lang.js` and edit the matching text inside the `tl` translation list. The visitor's language choice is remembered in the browser, so it stays selected as they move between pages.
