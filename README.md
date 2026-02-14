# Arhiv referendumske kampanje 2025: Operacija "Božja volja"

[![React](https://img.shields.io/badge/React-19-61DAFB?logo=react&logoColor=white)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-7-646CFF?logo=vite&logoColor=white)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-3.4-38B2AC?logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![License: Private](https://img.shields.io/badge/License-Private-red.svg)](LICENSE)

An interactive digital archive and analysis of the Slovenian Catholic Church's organized political agitation during the November 2025 referendum campaign. This project documents the Church's campaign, revealing how parishes across Slovenia were transformed into a coordinated communication machine.

**🌐 Live Site:** [kmecl.eu/cerkev-referendum](https://kmecl.eu/cerkev-referendum/)

**📖 Full investigative report in *Mladina***: [Kako je cerkev ugrabila referendum](https://www.mladina.si/246496/kako-je-cerkev-ugrabila-referendum/)

---

## 📖 Project Overview

This application serves as a repository for research published in *Mladina*, documenting the systematic pressure exerted by the Church. Using AI-assisted scanning of digital footprints and manual verification, the project tracks:

- **100+ Parishes** across the Archdiocese of Ljubljana, Diocese of Murska Sobota, and Deanery of Maribor.
- **500+ Specific Cases** of political agitation, including direct voting commands, spiritual threats, and distribution of propaganda.
- **Tactics Analyzed**: Dehumanization ("people-beasts"), medical misinformation ("doctors against the law"), and spiritual conditioning (linking voting choices to "entry into the Kingdom of Heaven").

## ✨ Key Features

- **Interactive Database**: Filter and search through hundreds of parish records and evidence.
- **Search by Parish**: Explore detailed profiles of each parish, including location, evidence collected, and specific tactics used.
- **Evidence Feed**: A masonry-style gallery of archival materials, leaflets, and social media posts.
- **Deep-Dive Analysis**: Integrated markdown-based articles explaining the methodology and findings.
- **Responsive Design**: Fully optimized for mobile and desktop reading.

## 🛠️ Tech Stack

- **Frontend**: [React 19](https://react.dev/) with [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) with [@tailwindcss/typography](https://github.com/tailwindlabs/tailwindcss-typography)
- **Routing**: [React Router DOM](https://reactrouter.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Content**: [React Markdown](https://github.com/remarkjs/react-markdown) for dynamic article rendering
- **Layout**: [React Masonry CSS](https://github.com/paulcollett/react-masonry-css) for the evidence archive

## 📂 Project Structure

- `src/data/`: Contains `parishes.json` – the core database of all collected evidence.
- `src/pages/`: Main application views (Article, Database, Evidence Feed).
- `src/components/`: Reusable UI components (Layout, Map, ScrollToTop).
- `public/assets/`: Static visual assets and evidence images.

## ⚖️ License & Copyright

&copy; 2026 [Tim Kmecl](https://kmecl.eu). All rights reserved. 
The research and data contained within this archive were conducted in coordination with the analysis for *Mladina*.