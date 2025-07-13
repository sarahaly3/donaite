# 🌍 Donaite - AI-Powered Charity Platform

https://github.com/user-attachments/assets/6e4d8a2c-9060-43df-83d9-d77517bec14a

<div align="center">
  Connect with causes that matter to you
</div>

## 📋 Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Quick Start](#quick-start)
- [Project Structure](#project-structure)
- [Development](#development)
- [Components](#components)
- [Contributing](#contributing)
- [License](#license)

## 🌟 Overview

Donaite is a modern, AI-powered charity platform that connects donors with verified charities worldwide. The platform provides personalized charity recommendations, real-time impact visualization, and a seamless donation experience.

**Key Value Propositions:**
- 🤖 **AI-Powered Recommendations**: Personalized charity suggestions based on your interests and giving history
- 🌍 **Global Impact Visualization**: Interactive maps showing worldwide charitable impact
- ✅ **Verified Charities**: All charities are thoroughly vetted and verified
- 📊 **Transparent Impact Tracking**: See exactly how your donations are making a difference
- 💳 **Seamless Donations**: Quick and secure donation processing

## ✨ Features

### 🏠 **Homepage**
- Hero section with compelling value proposition
- Feature showcase highlighting platform benefits
- Interactive map preview showing global charity locations
- Charity spotlight section featuring top-rated organizations
- AI assistant integration for personalized help
- Real-time impact statistics
- Call-to-action sections

### 🔍 **Charity Discovery**
- **Advanced Filtering**: Filter by category, location, size, rating, and more
- **Search Functionality**: Find charities by name, cause, or location
- **Sorting Options**: Sort by rating, impact, urgency, or donation amount
- **Category Tags**: Education, Health, Environment, Human Rights, Animal Welfare, and more
- **Verification Status**: Clear indicators for verified organizations
- **Urgent Needs**: Highlighted charities with immediate funding needs

### 📊 **Charity Profiles**
- Detailed charity information and mission statements
- Impact metrics and success stories
- Financial transparency and ratings
- Location and regional focus areas
- Donation history and donor count
- Tax-deductible status information

### 🎨 **User Experience**
- **Responsive Design**: Optimized for desktop, tablet, and mobile
- **Dark/Light Mode**: Theme toggle for user preference
- **Accessibility**: WCAG compliant with proper ARIA labels
- **Modern UI**: Clean, intuitive interface built with shadcn/ui
- **Fast Performance**: Turbopack for lightning-fast development builds

_**some features are still in progress**_

## 🛠 Tech Stack

### **Frontend**
- **Framework**: [Next.js 15.2.0](https://nextjs.org/) with App Router
- **Language**: [TypeScript 5.7.3](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS 3.4.1](https://tailwindcss.com/)
- **UI Components**: [shadcn/ui](https://ui.shadcn.com/) with [Radix UI](https://www.radix-ui.com/)
- **Icons**: [Lucide React](https://lucide.dev/)
- **Runtime**: [Bun](https://bun.sh/) for fast package management and runtime

### **Development Tools**
- **Linting**: [Biome](https://biomejs.dev/) for fast linting and formatting
- **Type Checking**: TypeScript with strict mode
- **Build Tool**: [Turbopack](https://turbo.build/pack) for fast development builds
- **Package Manager**: Bun for efficient dependency management

### **Additional Libraries**
- **Forms**: React Hook Form with Zod validation
- **Maps**: Mapbox GL for interactive mapping
- **Themes**: next-themes for dark/light mode
- **Animations**: tailwindcss-animate for smooth transitions
- **Notifications**: Sonner for toast notifications
- **Data Visualization**: Tremor React for charts and metrics

## 🚀 Quick Start

### Prerequisites

- **Node.js** 18+ or **Bun** runtime
- **Git** for version control

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/your-username/donaite-charity-platform.git
   cd donaite-charity-platform/donaite
   ```

2. **Install Bun** (if not already installed)
   ```bash
   curl -fsSL https://bun.sh/install | bash
   ```

3. **Install dependencies**
   ```bash
   bun install
   ```

4. **Start the development server**
   ```bash
   bun run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

### Alternative with npm/yarn

If you prefer using npm or yarn:

```bash
# Using npm
npm install
npm run dev

# Using yarn
yarn install
yarn dev
```

## 📁 Project Structure

```
donaite/
├── public/                     # Static assets
│   └── map-placeholder.jpg     # Map placeholder image
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── globals.css         # Global styles
│   │   ├── layout.tsx          # Root layout
│   │   ├── page.tsx            # Homepage
│   │   ├── ClientBody.tsx      # Client-side body wrapper
│   │   └── charities/          # Charities pages
│   │       └── page.tsx        # Charity discovery page
│   ├── components/             # Reusable components
│   │   ├── ui/                 # shadcn/ui components
│   │   ├── layout/             # Layout components
│   │   ├── charity/            # Charity-specific components
│   │   ├── theme-provider.tsx  # Theme context provider
│   │   └── theme-toggle.tsx    # Dark/light mode toggle
│   └── lib/                    # Utility functions and data
│       ├── utils.ts            # Utility functions
│       └── mock-data.ts        # Mock charity data
├── biome.json                  # Biome configuration
├── components.json             # shadcn/ui configuration
├── next.config.js              # Next.js configuration
├── package.json                # Dependencies and scripts
├── tailwind.config.ts          # Tailwind CSS configuration
└── tsconfig.json              # TypeScript configuration
```

### Key Directories

- **`src/app/`**: Next.js 13+ App Router pages and layouts
- **`src/components/ui/`**: Reusable UI components from shadcn/ui
- **`src/components/layout/`**: Page layout components (hero, footer, etc.)
- **`src/components/charity/`**: Charity-specific components (cards, filters, etc.)
- **`src/lib/`**: Utilities, helpers, and mock data

## 🔧 Development

### Available Scripts

```bash
# Development
bun run dev          # Start development server with Turbopack
bun run dev:next     # Start development server with standard Next.js

# Building
bun run build        # Build for production
bun run start        # Start production server

# Code Quality
bun run lint         # Run Biome linter and TypeScript checks
bun run format       # Format code with Biome
```

### Environment Variables

Create a `.env.local` file for environment-specific variables:

```env
# Example environment variables
NEXT_PUBLIC_MAPBOX_TOKEN=your_mapbox_token_here
NEXT_PUBLIC_API_URL=http://localhost:3000/api
```

### Code Style

The project uses [Biome](https://biomejs.dev/) for consistent code formatting and linting:

- **Automatic formatting** on save (if configured in your editor)
- **Strict TypeScript** configuration for type safety
- **ESLint integration** with Next.js best practices

## 🧩 Components

### Layout Components

- **`MainLayout`**: Main application layout with header and footer
- **`SiteHeader`**: Navigation bar with logo, menu, and theme toggle
- **`SiteFooter`**: Footer with links and social media
- **`HeroSection`**: Landing page hero with call-to-action
- **`FeatureSection`**: Platform features showcase
- **`MapPreviewSection`**: Interactive map preview
- **`CharitySpotlightSection`**: Featured charity highlights
- **`AIAssistantSection`**: AI-powered assistance features
- **`ImpactStatsSection`**: Real-time impact statistics
- **`CTASection`**: Call-to-action for user engagement

### Charity Components

- **`CharitiesGrid`**: Grid layout for charity cards
- **`CharityCard`**: Individual charity display card
- **`CharitiesFilters`**: Advanced filtering sidebar
- **`CharitiesHeader`**: Page header with search and sorting

### UI Components

Built on top of [shadcn/ui](https://ui.shadcn.com/):

- **Form Controls**: Button, Input, Select, Checkbox, Slider
- **Layout**: Card, Sheet, Dialog, Tabs
- **Navigation**: Dropdown Menu
- **Data Display**: Avatar, Badge, Label
- **Feedback**: Form validation and error states

## 🎨 Theming

The application supports both light and dark themes:

- **Theme Provider**: Context-based theme management
- **Theme Toggle**: User-controlled theme switching
- **CSS Variables**: Dynamic color scheme updates
- **System Preference**: Automatic theme detection

## 📊 Data Structure

### Charity Interface

```typescript
interface Charity {
  id: string;
  name: string;
  logo: string;
  description: string;
  category: string;
  location: string;
  rating: number;
  yearFounded: number;
  size: "small" | "medium" | "large";
  verified: boolean;
  urgentNeed: boolean;
  taxDeductible: boolean;
  impactMetric: string;
  donationTotal: number;
  donorsCount: number;
  regions: string[];
}
```

### Categories

- **Education**: Schools, literacy programs, educational technology
- **Health**: Medical aid, healthcare access, disease prevention
- **Environment**: Conservation, climate action, sustainability
- **Human Rights**: Social justice, equality, advocacy
- **Animal Welfare**: Animal rescue, wildlife conservation
- **Emergency Relief**: Disaster response, humanitarian aid

## 🚀 Deployment

### Netlify (Recommended)

The project includes a `netlify.toml` configuration file:

1. Connect your repository to Netlify
2. Set build command: `bun run build`
3. Set publish directory: `.next`
4. Deploy automatically on push to main branch

### Vercel

Deploy directly to Vercel (Next.js creators):

```bash
npm i -g vercel
vercel --prod
```

### Other Platforms

The application can be deployed to any platform supporting Node.js:

- **Railway**: Direct Git integration
- **Heroku**: With Node.js buildpack
- **DigitalOcean App Platform**: Container or Git-based deployment
- **AWS Amplify**: Full-stack deployment with hosting

### Development Setup

1. **Fork the repository**
2. **Create a feature branch**: `git checkout -b feature/amazing-feature`
3. **Install dependencies**: `bun install`
4. **Start development server**: `bun run dev`
5. **Make your changes** and test thoroughly
6. **Run code quality checks**: `bun run lint`
7. **Commit your changes**: `git commit -m 'Add amazing feature'`
8. **Push to the branch**: `git push origin feature/amazing-feature`
9. **Open a Pull Request**

## 🙏 Acknowledgments

- **shadcn/ui** for the beautiful component library
- **Radix UI** for accessible component primitives
- **Tailwind CSS** for utility-first styling
- **Next.js team** for the amazing React framework
- **Vercel** for hosting and deployment tools
- **Unsplash** for beautiful placeholder images

---

<div align="center">
  <p><strong>Made with ❤️ for making the world a better place</strong></p>
</div>
