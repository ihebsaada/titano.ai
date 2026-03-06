PROJECT ARCHIVE — TECHNICAL CONTEXT

Project Name
Titano.ai Website

Project Description
Corporate and infrastructure presentation website for Titano and the Robotic Media concept.
The platform explains the Robotic Media infrastructure, Titano OS ecosystem, use cases, and company positioning.

Primary Objective
Develop and deploy a scalable marketing website presenting the Robotic Media infrastructure, with strong SEO architecture, multilingual support, and modular frontend components.

Technology Stack
• React
• TypeScript
• Vite build system
• React Router for SPA routing
• react-helmet-async for dynamic SEO metadata
• i18n JSON-based translation system
• Static public assets (videos, images, documents)

Project Architecture

Main Structure
• MainLayout wrapping the application
• Page-based routing using React Router
• Modular section components (Hero, Mosaic, Ecosystem sections, etc.)
• Localized content stored in translation JSON files

Routing Pages
/ → Home
/ecosistema → Ecosystem page
/use-cases → Use Cases page
/robotic-media → Robotic Media concept page
/about-contact → About and contact information
/chi-e-titano → Institutional company explanation
/privacy-policy → Privacy policy page
/brand-guidelines → Brand documentation page

SEO System

Global SEO
• Default metadata configured in index.html
• Canonical URL defined for the main domain
• Open Graph metadata for social sharing
• Twitter preview metadata
• JSON-LD structured data (Organization schema)

Dynamic SEO
• Seo.tsx reusable component
• Page-specific titles and descriptions
• Canonical URLs generated per route
• Open Graph metadata generated per page

Search Engine Configuration
• sitemap.xml configured
• robots.txt configured

Internationalization

Languages
• English
• Italian

Implementation
• JSON translation files (locales/en.json and locales/it.json)
• Language switching handled in the frontend

Future improvement
• Automatic language detection based on browser locale

Public Assets

public/
videos/ → video assets used for background and media sections
logo.png → main company logo
brand-guidelines.pdf → branding documentation
robots.txt → crawler rules
sitemap.xml → search engine indexing map

Key Work Completed

• Integration of Robotic Media narrative across the website
• Implementation of full SEO metadata architecture
• Dynamic SEO system using Helmet
• Translation system integration (EN / IT)
• Routing architecture implementation
• UI section adjustments and layout improvements
• Production deployment and verification

Production Status
The website is deployed and operational in production.

Potential Future Improvements

• Dedicated Open Graph banner image for social previews
• Automatic language detection (EN / IT)
• Performance optimization for video and images
• Blog or insights section for SEO growth
• Additional structured data schemas
• Analytics integration for campaign measurement

Project Status
Stable production release. Ready for iteration, improvements, and feature expansion.
