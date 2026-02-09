# Inspire Limited Website

Modern marketing site for Inspire Limited, showcasing facility and environmental services, social impact, and service coverage. Built with Next.js (Pages Router), Tailwind CSS, and Framer Motion.

## Features

- Responsive, animated landing experience with hero slider and impact-led intro.
- Modular section components for services, approach, values, and CTA.
- Tailwind-powered styling with scoped CSS modules for fine-tuned layouts.



## Getting Started

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
components/
	home/
		IntroSection.js
		HeroSection.js
		ServicesSection.js
		ApproachSection.js
		ValuesSection.js
		WhyInspireSection.js
		WhoWeServeSection.js
		CTASection.js
pages/
	index.js
	services.js
	about.js
	approach.js
	contact.js
styles/
	globals.css
```

## Scripts

- `npm run dev` - start local dev server
- `npm run build` - build for production
- `npm run start` - start production server
- `npm run lint` - run linting

## Notes

- Images live under `public/images/`.
- Section styling is kept close to components via CSS modules.

## Deployment

Deploy on any Next.js-compatible platform (Vercel, Netlify, or your own Node host). Run `npm run build` and `npm run start` for production.
