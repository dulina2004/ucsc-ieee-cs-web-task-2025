# IntelliHack 5.0 - Hackathon Website

## 🎯 Project Overview

This is a creative web concept developed for the **IEEE Computer Society UCSC Web Team Recruitment Task**. The project showcases a fully functional website for IntelliHack 5.0, an upcoming AI hackathon event hosted by IEEE Computer Society — UCSC Student Branch Chapter.

**Live Demo**: [https://ucsc-ieee-cs-web-task-2025.vercel.app/](https://ucsc-ieee-cs-web-task-2025.vercel.app/)

## 📋 Task Description

The task was to design and build a website for an upcoming hackathon event with the following requirements:

-   Create at least 2-3 well-designed sections (hero, about, timeline, registration, sponsors, etc.)
-   Focus on creativity, layout, and visual presentation
-   Use original design ideas (no AI-generated templates)
-   Add animations or interactions to enhance user experience

## ✨ Features

This website includes the following sections and features:

### 🎨 Sections Implemented

-   **Hero Section** - Eye-catching landing with animated particle background
-   **About Section** - Information about IntelliHack 5.0 and its theme
-   **Timeline Section** - Event schedule with interactive timeline cards
-   **Registration Form** - Dynamic form with individual and team registration options
-   **Sponsors Section** - Showcase of host organizations with theme-adaptive logos
-   **FAQ Section** - Comprehensive accordion-style frequently asked questions
-   **Footer** - Contact information and social media links

### 🚀 Key Functionalities

-   **Dynamic Registration System**

    -   Toggle between Individual and Team registration
    -   Team registration with dynamic form fields (2-4 members)
    -   Team Member 1 designated as Team Leader
    -   Form validation for all fields
    -   Email validation
    -   Local storage for registration data

-   **Theme System**

    -   Light and Dark mode toggle
    -   Theme-persistent throughout the site
    -   Adaptive logo display based on theme

-   **Interactive Elements**

    -   Animated particle background
    -   Smooth scroll navigation
    -   Collapsible social sidebar
    -   Hover effects and transitions
    -   FAQ accordion with smooth animations

-   **Responsive Design**

    -   Mobile-first approach
    -   Fully responsive across all devices
    -   Adaptive layouts for tablet and desktop views

## 🛠️ Technologies Used

This project is built with modern web technologies:

-   **Framework**: React 18 with TypeScript
-   **Build Tool**: Vite
-   **Styling**: Tailwind CSS
-   **UI Components**: shadcn/ui
-   **Icons**: Lucide React
-   **Theme Management**: next-themes
-   **Animations**: CSS animations and Tailwind transitions
-   **Deployment**: Vercel

## 📁 Project Structure

```
intellihack-spark/
├── src/
│   ├── components/
│   │   ├── About.tsx
│   │   ├── FAQ.tsx
│   │   ├── Footer.tsx
│   │   ├── Header.tsx
│   │   ├── Hero.tsx
│   │   ├── ParticleBackground.tsx
│   │   ├── RegistrationForm.tsx
│   │   ├── SocialSidebar.tsx
│   │   ├── SponsorGrid.tsx
│   │   ├── ThemeProvider.tsx
│   │   ├── ThemeToggle.tsx
│   │   ├── Timeline.tsx
│   │   └── ui/ (shadcn components)
│   ├── pages/
│   │   ├── Index.tsx
│   │   └── NotFound.tsx
│   ├── assets/ (images and logos)
│   ├── hooks/
│   ├── lib/
│   └── main.tsx
├── public/
├── index.html
└── package.json
```

## 🚀 Getting Started

### Prerequisites

-   Node.js (v18 or higher)
-   npm package manager

### Installation

1. Clone the repository:

```sh
git clone https://github.com/dulina2004/ucsc-ieee-cs-web-task-2025.git
cd ucsc-ieee-cs-web-task-2025
```

2. Install dependencies:

```sh
npm install
```

3. Start the development server:

```sh
npm run dev
```

4. Open your browser and navigate to:

```
http://localhost:5173
```

### Build for Production

```sh
npm run build
```

### Preview Production Build

```sh
npm run preview
```

## 🎨 Design Highlights

### Color Scheme

-   Primary gradient: Blue to Purple (representing AI and innovation)
-   Light and Dark theme support
-   Consistent color palette throughout

### Typography

-   Font Family: Inter (Google Fonts)
-   Clear hierarchy with appropriate font sizes
-   Readable and accessible text

### UI/UX Features

-   Smooth scrolling navigation
-   Intuitive form design with clear validation messages
-   Interactive elements with hover states
-   Loading states and transitions
-   Accessible design with proper ARIA labels


## 🎯 Evaluation Criteria Met

✅ **Creativity & Uniqueness**

-   Original design concept with custom particle background
-   Unique registration system with dynamic team member forms
-   Creative use of gradient effects and animations

✅ **Visual Appeal**

-   Modern, clean design with consistent styling
-   Smooth animations and transitions
-   Professional color scheme and typography
-   Theme-adaptive components

✅ **Concept Execution**

-   Fully functional website with all major sections
-   Interactive FAQ and timeline
-   Responsive across all devices

## 🌟 Unique Features

1. **Particle Background** - Custom animated particle system for visual appeal
2. **Dynamic Registration** - Smart form that adapts based on registration type
3. **Social Sidebar** - Collapsible social media sidebar with smooth animations
4. **Theme-Adaptive Logos** - Different logos for light and dark themes
5. **Form Validation** - Comprehensive validation with user-friendly error messages

## 👨‍💻 Developer

**Dulina Gunasinghe**

-   GitHub: [@dulina2004](https://github.com/dulina2004)

## 📄 License

This project was created as part of the IEEE Computer Society UCSC Web Team Recruitment Task.


---

_Built with ❤️ for IEEE Computer Society UCSC Web Team Recruitment_
