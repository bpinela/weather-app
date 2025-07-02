# Weather App

## Prerequisites

Before running this weather forecast application, ensure you have the following installed on your system:

- **Node.js** (version 18.0 or higher)
- **npm** (version 8.0 or higher) or **yarn** (version 1.22 or higher)
- **Git** (for cloning the repository)

### Verify Installation

\`\`\`bash
node --version
npm --version
git --version
\`\`\`

## Getting Started

### 1. Clone the Repository

\`\`\`bash
git clone https://github.com/bpinela/weather-app
cd weather-app
\`\`\`

### 2. Install Dependencies

\`\`\`bash
npm install
\`\`\`
_or if using yarn:_
\`\`\`bash
yarn install
\`\`\`

### 3. Environment Setup

Create a `.env` file in the root directory:
\`\`\`bash
cp .env.example .env
\`\`\`

Add your weather API configuration:
\`\`\`env
VITE_WEATHER_API_KEY=your_openweathermap_api_key_here
\`\`\`

> **Note:** Get your free API key from [OpenWeatherMap](https://openweathermap.org/api)

## Running the Application

### Development Mode

Start the development server with hot reload:
\`\`\`bash
npm run dev
\`\`\`

The application will be available at: `http://localhost:5173`

### Preview Production Build

To preview the production build locally:
\`\`\`bash
npm run build
npm run preview
\`\`\`

## Available Scripts

| Script            | Description                              |
| ----------------- | ---------------------------------------- |
| `npm run dev`     | Start development server with hot reload |
| `npm run build`   | Build the application for production     |
| `npm run preview` | Preview the production build locally     |
| `npm run lint`    | Run ESLint to check code quality         |
| `npm run format`  | Format code using Prettier               |
| `npm run test`    | Run unit tests with Vitest               |
| `npm run prepare` | Set up Husky git hooks                   |

## Testing

### Run Tests

\`\`\`bash
npm run test
\`\`\`

### Run Tests in Watch Mode

\`\`\`bash
npm run test -- --watch
\`\`\`

### Run Tests with Coverage

\`\`\`bash
npm run test -- --coverage
\`\`\`

## Development Workflow

### Code Quality Checks

The project includes automated code quality checks:

1. **Pre-commit hooks** (via Husky) automatically run:
   - ESLint for code linting
   - Prettier for code formatting
   - TypeScript compilation check

2. **Manual quality checks:**
   \`\`\`bash
   npm run lint # Check for linting errors
   npm run format # Format all files
   \`\`\`

### Git Commit Convention

This project uses conventional commits. Format your commits like:
\`\`\`bash
git commit -m "feat: add weather search functionality"
git commit -m "fix: resolve API timeout issue"
git commit -m "docs: update README with setup instructions"
\`\`\`

## Project Structure

\`\`\`
weather-app/
├── src/
│ ├── components/ # React components
│ │ ├── Sidebar/ # Navigation sidebar
│ │ ├── Skeleton/ # Loading skeletons
│ │ ├── ui/ # Reusable UI components
│ │ └── WeatherContent/ # Main weather display
│ ├── hooks/ # Custom React hooks
│ │ ├── useSearch.ts # Search functionality
│ │ └── useWeatherData.ts # Weather data fetching
│ ├── lib/ # Utility functions
│ │ ├── utils.ts # General utilities
│ │ └── weather.icon.ts # Weather icon mappings
│ ├── services/ # API services
│ │ └── weather-api.ts # Weather API integration
│ ├── types/ # TypeScript definitions
│ │ ├── openweathermap.ts # OpenWeatherMap API types
│ │ └── weather.ts # Weather data types
│ └── test/ # Test configuration
├── public/ # Static assets
├── .env # Environment variables
├── package.json # Dependencies and scripts
└── README.md # This file
\`\`\`

## 📄 License

This project is licensed under the GNU GENERAL PUBLIC LICENSE - see the LICENSE file for details.
