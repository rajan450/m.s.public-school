# M.S. Public School website (Next.js)

## Run locally
```
npm install
npm run dev
```
Open http://localhost:3000

## Deploy on Vercel
1. Push this folder to a GitHub repo (the `package.json` must be at the repo root).
2. In Vercel: Add New > Project > import the repo. Framework is detected as Next.js. Click Deploy.
   (Or run `npx vercel` inside this folder.)

## Edit details
- Phone, WhatsApp number, address, hours: `lib/config.js`
- Text and sections: `app/page.js`
- Colours and layout: `app/globals.css`
- Hero photo: replace `public/school.jpg`
