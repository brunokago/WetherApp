# 🎨 WeatherApp Design System

## Color Palette

### Primary Colors
- **Header/Footer Blue**: `bg-blue-600` → `#2563eb`
- **Accent Blue**: `text-blue-600` → `#2563eb`
- **Light Blue**: `bg-blue-50` → `#eff6ff`
- **Background Gradient**: From blue-50 via white to blue-50

### Secondary Colors
- **Text Dark**: `text-gray-800` → `#1f2937`
- **Text Light**: `text-gray-600` → `#4b5563`
- **Border Gray**: `border-gray-200` → `#e5e7eb`
- **Error Red**: `text-red-600` → `#dc2626`

## Typography

### Font Family
```
'Segoe UI', Tahoma, Geneva, Verdana, sans-serif
```

### Font Sizes & Weights
```
h1: text-5xl (md: text-4xl), font-bold
h2: text-3xl (md: text-2xl), font-bold
h3: text-xl, font-bold
body: text-base, font-normal
label: text-sm, font-medium
small: text-xs, font-normal
```

## Component Design Patterns

### Cards
```css
/* Standard Card */
rounded-2xl         /* Border radius */
bg-white           /* Background */
p-6                /* Padding */
shadow-lg          /* Shadow */
hover:shadow-2xl   /* Hover state */
transition-shadow  /* Animation */
duration-300       /* Duration */
```

### Buttons
```css
/* Search Button */
bg-blue-500        /* Background */
hover:bg-blue-600  /* Hover */
text-white         /* Text color */
rounded-full       /* Full border radius */
px-4 py-1          /* Padding */
transition-colors  /* Animation */
disabled:opacity-50 /* Disabled state */
```

## Animation & Motion

### Keyframe Animations
```css
fadeIn: 0% opacity: 0 → 100% opacity: 1
slideUp: 0% opacity: 0, translateY(10px) → 100% opacity: 1, translateY(0)
shimmer: 0%/100% opacity: 1 ↔ 50% opacity: 0.5
```

### Transitions
```css
duration-200  /* Fast (hover effects) */
duration-300  /* Standard (shadow, color) */
duration-500  /* Slow (fade in) */
```

## Responsive Breakpoints

```
Mobile:        < 640px  (sm)
Small Tablet:  640px    (sm)
Tablet:        768px    (md)
Large Tablet:  1024px   (lg)
Desktop:       1280px   (xl)
Large Desktop: 1536px   (2xl)
```

### Layout Changes

#### Header
```
Mobile:  Single column, full width search
Desktop: Title center, full width search below
```

#### Forecast Grid
```
Mobile:  grid-cols-2      (2 columns)
Tablet:  grid-cols-3      (3 columns)
Desktop: grid-cols-5      (5 columns)
```

#### Info Cards
```
Mobile:  grid-cols-2      (2x3 grid)
Desktop: grid-cols-2      (with gap adjustments)
```

## Spacing Scale

Used for padding, margins, gaps:
```
px-4   = 1rem   (16px)
px-6   = 1.5rem (24px)
px-8   = 2rem   (32px)
py-3   = 0.75rem (12px)
py-6   = 1.5rem (24px)
py-8   = 2rem   (32px)
py-12  = 3rem   (48px)
gap-4  = 1rem   (16px)
gap-6  = 1.5rem (24px)
gap-8  = 2rem   (32px)
mt-8   = 2rem   (32px)
mt-16  = 4rem   (64px)
```

## Shadow System

```
shadow-lg   = 0 10px 15px -3px rgba(0, 0, 0, 0.1)
shadow-2xl  = 0 25px 50px -12px rgba(0, 0, 0, 0.25)
```

## Interactive States

### Hover States
- Forecast Cards: `hover:scale-105` (slight zoom)
- Links: `hover:underline`
- Buttons: `hover:bg-blue-600` (darkens)

### Active States
- Search Input: `focus:outline-none focus:ring-2 focus:ring-blue-300`
- Buttons: `active:opacity-90`

### Disabled States
- Input/Button: `disabled:opacity-50`
- Input: `disabled:cursor-not-allowed`

### Loading States
- Spinner: Border animation, infinite rotation
- Shimmer: Pulsing opacity effect

## Visual Hierarchy

1. **Header** - Most prominent (blue gradient, sticky)
2. **Main Weather Card** - Featured content (large, centered)
3. **Forecast Section** - Secondary content (grid, below main)
4. **Footer** - Minimal branding (matches header)

## Depth & Layers

```
Layer 1: Background (gradient)
Layer 2: Cards (white with shadows)
Layer 3: Decorative shapes (blue-100, opacity-50)
Layer 4: Content (text, icons)
Layer 5: Interactions (hover effects)
```

## Accessibility

- **Color Contrast**: Blue text on white (WCAG AAA)
- **Focus States**: Visible ring on interactive elements
- **Font Sizes**: Readable on mobile (minimum 16px)
- **Touch Targets**: Minimum 44px height for buttons
- **Alt Text**: All images have descriptions
- **Semantic HTML**: Proper heading hierarchy

## Dark Mode Support (Optional Enhancement)

Current implementation: Light mode only

To add dark mode:
```javascript
// Add to tailwind.config.js
darkMode: 'class',

// Then use:
dark:bg-gray-900
dark:text-white
dark:hover:bg-gray-800
```

## Performance Optimizations

1. **CSS**: Tailwind purges unused styles
2. **Images**: External CDN (OpenWeatherMap)
3. **Animations**: GPU-accelerated (transform, opacity)
4. **Shadows**: Optimized shadow definitions

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile browsers (iOS Safari 14+, Chrome Mobile)

## Component Naming Convention

```
Header.jsx      → App header/navigation
WeatherCard.jsx → Main weather display
ForecastCard.jsx    → Individual day card
ForecastSection.jsx → Forecast grid container
Footer.jsx      → App footer
```

## CSS Class Organization

```
Layout     → max-w-*, mx-*, px-*, py-*
Display    → flex, grid, block
Background → bg-*, gradient
Text       → text-*, font-*, leading-*
Border     → rounded-*, border-*
Effects    → shadow-, opacity-*
Hover      → hover:*
Animation  → animate-*, transition-*
```

---

**Design System v1.0** - Stable and production-ready ✅
