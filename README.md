# Qest Mall - Electronics Ecommerce Platform

A modern, responsive ecommerce platform built with Next.js, TypeScript, and Tailwind CSS. Designed specifically for electronics retail in Ghana with a mobile-first approach.

## 🚀 Features

- **Responsive Design** - Mobile-first approach with desktop optimization
- **Product Catalog** - Browse electronics by categories with filtering
- **Shopping Cart** - Add, remove, and manage cart items
- **Wishlist** - Save favorite products for later
- **User Account** - Profile management, order history, and settings
- **Product Details** - Detailed product pages with image galleries
- **Checkout Process** - Complete order flow with shipping and payment
- **Search Functionality** - Find products quickly
- **Flash Deals** - Time-limited promotional offers
- **Coming Soon Modal** - First-visit engagement popup

## 🛠️ Technology Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Icons**: Lucide React
- **Image Optimization**: Next.js Image component
- **State Management**: React Hooks (useState, useEffect)
- **Routing**: Next.js App Router

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (version 18.0 or higher)
- **npm** (version 8.0 or higher) or **yarn** (version 1.22 or higher)
- **Git** (for cloning the repository)

You can check your versions by running:
\`\`\`bash
node --version
npm --version
git --version
\`\`\`

## 🔧 Installation & Setup

### 1. Clone the Repository

\`\`\`bash
# Clone the repository
git clone https://github.com/yourusername/qest-mall-ecommerce.git

# Navigate to the project directory
cd qest-mall-ecommerce
\`\`\`

### 2. Install Dependencies

Using npm:
\`\`\`bash
npm install
\`\`\`

Using yarn:
\`\`\`bash
yarn install
\`\`\`

### 3. Environment Setup

The project doesn't require environment variables for basic functionality, but you can create a \`.env.local\` file for future integrations:

\`\`\`bash
# Create environment file (optional)
touch .env.local
\`\`\`

Example \`.env.local\` content:
\`\`\`env
# Future API integrations
# NEXT_PUBLIC_API_URL=https://api.questmall.com
# NEXT_PUBLIC_STRIPE_KEY=your_stripe_key
# DATABASE_URL=your_database_url
\`\`\`

### 4. Run the Development Server

Using npm:
\`\`\`bash
npm run dev
\`\`\`

Using yarn:
\`\`\`bash
yarn dev
\`\`\`

The application will be available at [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

\`\`\`
qest-mall-ecommerce/
├── app/                          # Next.js App Router pages
│   ├── account/
│   │   └── page.tsx             # User account page
│   ├── cart/
│   │   └── page.tsx             # Shopping cart page
│   ├── checkout/
│   │   └── page.tsx             # Checkout process page
│   ├── product/
│   │   └── [id]/
│   │       └── page.tsx         # Dynamic product detail pages
│   ├── products/
│   │   └── page.tsx             # Products listing page
│   ├── wishlist/
│   │   └── page.tsx             # User wishlist page
│   ├── globals.css              # Global styles
│   ├── layout.tsx               # Root layout component
│   └── page.tsx                 # Homepage
├── components/                   # Reusable React components
│   ├── ui/                      # shadcn/ui components
│   │   ├── button.tsx
│   │   ├── card.tsx
│   │   ├── input.tsx
│   │   └── ...
│   ├── account-view.tsx         # Account management component
│   ├── cart-view.tsx            # Shopping cart component
│   ├── checkout-view.tsx        # Checkout process component
│   ├── coming-soon-modal.tsx    # First-visit modal
│   ├── featured-categories.tsx  # Category showcase
│   ├── flash-deals.tsx          # Time-limited deals
│   ├── footer.tsx               # Site footer
│   ├── header.tsx               # Site header with navigation
│   ├── hero-section.tsx         # Homepage hero slider
│   ├── product-detail-view.tsx  # Product detail component
│   ├── product-grid.tsx         # Product listing grid
│   ├── sidebar.tsx              # Category navigation sidebar
│   ├── sidebar-content.tsx      # Additional sidebar content
│   ├── top-deals.tsx            # Featured deals sidebar
│   ├── trending-products.tsx    # Trending items
│   └── wishlist-view.tsx        # Wishlist management
├── hooks/                       # Custom React hooks
│   ├── use-mobile.tsx           # Mobile detection hook
│   └── use-toast.ts             # Toast notification hook
├── lib/                         # Utility functions
│   └── utils.ts                 # Common utilities
├── public/                      # Static assets
│   └── placeholder.svg          # Placeholder images
├── .gitignore                   # Git ignore rules
├── next.config.mjs              # Next.js configuration
├── package.json                 # Project dependencies
├── tailwind.config.ts           # Tailwind CSS configuration
├── tsconfig.json                # TypeScript configuration
└── README.md                    # This file
\`\`\`

## 🎨 Customization

### Colors & Branding

The primary brand color is defined in \`tailwind.config.ts\`:

\`\`\`typescript
primary: {
  DEFAULT: "#1E5B54", // Qest Mall green
  foreground: "hsl(var(--primary-foreground))",
}
\`\`\`

### Logo Replacement

Replace the logo placeholder in the header component:

1. Add your logo file to the \`public/\` directory
2. Update the logo path in \`components/header.tsx\`:

\`\`\`typescript
<Image
  src="/your-logo.png"  // Update this path
  alt="Qest Mall"
  width={120}
  height={40}
  className="h-10 w-auto hover:opacity-80 transition-opacity"
/>
\`\`\`

### Product Data

Currently using mock data. To integrate with a real backend:

1. Create API routes in \`app/api/\`
2. Replace mock data in components with API calls
3. Add environment variables for API endpoints

## 📱 Responsive Design

The application is built mobile-first with breakpoints:

- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px
- **Large Desktop**: > 1280px

## 🧪 Development Commands

\`\`\`bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Run linting
npm run lint

# Type checking
npm run type-check
\`\`\`

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Deploy automatically on every push

### Manual Deployment

\`\`\`bash
# Build the application
npm run build

# The built files will be in the .next directory
# Deploy the .next directory to your hosting provider
\`\`\`

## 🔧 Configuration

### Next.js Configuration

Key configurations in \`next.config.mjs\`:

\`\`\`javascript
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['placeholder.svg'], // Add your image domains here
  },
}

export default nextConfig
\`\`\`

### Tailwind Configuration

Custom configurations in \`tailwind.config.ts\`:

- Custom colors for branding
- Extended spacing and sizing
- Custom animations and transitions

## 🐛 Troubleshooting

### Common Issues

1. **Port already in use**
   \`\`\`bash
   # Use a different port
   npm run dev -- -p 3001
   \`\`\`

2. **Module not found errors**
   \`\`\`bash
   # Clear node_modules and reinstall
   rm -rf node_modules package-lock.json
   npm install
   \`\`\`

3. **TypeScript errors**
   \`\`\`bash
   # Run type checking
   npm run type-check
   \`\`\`

4. **Styling issues**
   \`\`\`bash
   # Rebuild Tailwind CSS
   npm run build
   \`\`\`

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (\`git checkout -b feature/amazing-feature\`)
3. Commit your changes (\`git commit -m 'Add amazing feature'\`)
4. Push to the branch (\`git push origin feature/amazing-feature\`)
5. Open a Pull Request

## 📞 Support

For support and questions:

- **Email**: support@questmall.com
- **Phone**: +233 55 822 1761
- **Location**: Accra, Ghana

## 🙏 Acknowledgments

- [Next.js](https://nextjs.org/) - React framework
- [Tailwind CSS](https://tailwindcss.com/) - CSS framework
- [shadcn/ui](https://ui.shadcn.com/) - UI components
- [Lucide](https://lucide.dev/) - Icon library

---

**Happy coding! 🚀**
