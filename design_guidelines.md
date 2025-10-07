# Real-Time Emotion Detection App - Design Guidelines

## Design Approach
**Selected Approach:** Reference-Based (Apple WebGL demos + Linear's UI)
**Justification:** Experience-focused tech demo requiring impactful 3D visuals, clean interface, and modern interaction patterns. Drawing from Apple's minimalist 3D showcases and Linear's bold typography with restrained color use.

**Key Design Principles:**
- Immersive 3D experience without overwhelming the user
- High contrast for accessibility and visual impact
- Smooth transitions between homepage and detection interface
- Technical precision meets playful emotion visualization

---

## Core Design Elements

### A. Color Palette

**Dark Mode Primary (default):**
- Background: 220 25% 8% (deep navy-black)
- Surface: 220 20% 12% (elevated dark surface)
- Text Primary: 220 10% 95% (near white)
- Text Secondary: 220 10% 65% (muted gray)

**Emotion-Based Accent Colors:**
- Happy: 48 100% 55% (vibrant yellow-gold)
- Sad: 210 80% 55% (deep blue)
- Angry: 0 75% 55% (bold red)
- Surprised: 280 70% 60% (purple-magenta)
- Neutral: 180 15% 65% (cool gray)

**Interactive Elements:**
- Primary CTA: 160 60% 50% (emerald green) - for "Start Detection" button
- Success/Active: 140 60% 55% (bright green)
- Borders: 220 20% 25% (subtle dividers)

### B. Typography

**Font Stack:** 
- Primary: 'Inter' (Google Fonts) - headings and UI
- Monospace: 'JetBrains Mono' (Google Fonts) - confidence scores, technical labels

**Hierarchy:**
- Hero Headline: text-6xl md:text-7xl lg:text-8xl, font-bold, tracking-tight
- Section Titles: text-4xl md:text-5xl, font-semibold
- Body Text: text-base md:text-lg, font-normal, leading-relaxed
- UI Labels: text-sm, font-medium, uppercase tracking-wide
- Confidence Scores: text-xs md:text-sm, font-mono

### C. Layout System

**Spacing Primitives:** Tailwind units of 4, 8, 12, 16, 20, 24, 32 (e.g., p-4, gap-8, mt-12, py-20)

**Grid Structure:**
- Homepage: Full viewport sections with centered content, max-w-7xl container
- Detection Interface: Fullscreen webcam with overlay UI positioned with absolute positioning
- Emotion Cards: Grid layout when showing multiple faces (grid-cols-1 md:grid-cols-2 gap-8)

**Responsive Breakpoints:**
- Mobile-first approach
- Key breakpoints: md (768px), lg (1024px), xl (1280px)

### D. Component Library

**Homepage Components:**

1. **3D Hero Section** (100vh)
   - Three.js canvas background with floating 3D emotion emoji spheres
   - Rotating cube with emotion icons on each face (slow, continuous rotation)
   - Gradient overlay: from transparent to dark background at bottom
   - Centered content: Hero headline + subtitle + CTA button
   - Particle system with subtle glow effects

2. **Glowing CTA Button**
   - Large size: px-12 py-6, text-lg font-semibold
   - Background: Emerald green with animated glow pulse effect
   - Shadow: Multi-layer shadow with green glow (0 0 40px, 0 0 80px)
   - Hover: Scale transform (1.05) with increased glow intensity
   - Rounded: rounded-2xl

3. **Feature Cards Section** (py-24)
   - 3-column grid on desktop (grid-cols-1 md:grid-cols-3)
   - Card design: backdrop-blur with border, p-8, rounded-xl
   - Each card: Icon (emotion emoji) + Title + Description
   - Subtle hover lift effect (transform translateY(-4px))

4. **How It Works Section** (py-24)
   - Step-by-step visualization with numbered indicators
   - Isometric 3D illustration showing detection flow
   - 2-column layout alternating image/text

**Detection Interface Components:**

1. **Webcam Canvas** 
   - Full viewport background with aspect-ratio preservation
   - Dark overlay when initializing (loading state)
   - Live video feed with high contrast

2. **Face Detection Overlay**
   - Bounding boxes: 3px solid borders, color-coded by emotion
   - Rounded corners (border-radius: 12px)
   - Subtle drop shadow for depth
   - Animated entrance (fade + scale from 0.95 to 1)

3. **Emotion Label Cards**
   - Positioned at top-left of bounding box
   - Semi-transparent background with backdrop-blur-md
   - Padding: px-4 py-2, rounded-lg
   - Emotion name: font-semibold, text-sm
   - Confidence bar: Horizontal progress bar below text
   - Confidence percentage: Monospace font, text-xs, positioned right

4. **Control Panel** (bottom overlay)
   - Fixed position bottom with backdrop-blur-xl
   - Contains: Stop Detection button, Settings toggle, Emotion legend
   - Flex layout with gap-4, px-8 py-6
   - Slide-up entrance animation

5. **Statistics Panel** (top-right corner)
   - Real-time emotion distribution chart (mini bar chart)
   - FPS counter and face count
   - Semi-transparent card: backdrop-blur-md, p-4, rounded-xl

### E. Animations

**Strategic Animation Use:**

1. **Homepage Entrance:**
   - 3D elements: Continuous float animation (translateY oscillation, 3s ease-in-out)
   - Rotating cube: 20s full rotation on Y-axis
   - Text: Staggered fade-up (0.6s delay between elements)
   - CTA button: Pulse glow animation (2s infinite)

2. **Transition to Detection:**
   - Fade out 3D homepage (0.5s)
   - Slide up webcam interface from bottom (0.7s cubic-bezier)
   - Canvas initialization: Expand from center (scale 0.8 to 1, 0.4s)

3. **Detection Interface:**
   - Bounding box appearance: Scale + fade (0.3s)
   - Confidence bar: Width transition (0.2s ease-out)
   - Emotion switch: Color cross-fade (0.25s)

4. **Minimal Distractions:**
   - No continuous background animations during detection
   - Subtle micro-interactions only (button hover, card lift)

---

## Images

**Hero Section Background:**
- **Image Type:** Abstract neural network visualization or futuristic AI brain illustration
- **Placement:** Full-screen background with gradient overlay
- **Style:** Dark, high-tech aesthetic with blue/purple tones
- **Treatment:** Blur filter + 40% opacity to maintain text readability

**Feature Section Icons:**
- Use Font Awesome or Heroicons for consistency
- Webcam icon, Brain/AI icon, Chart/Analytics icon
- Size: 48px, stroke width: 2

**How It Works Illustrations:**
- Isometric 3D mockups showing: Camera → Face Detection → Emotion Classification
- Style: Minimalist line art with gradient fills
- Colors: Match emotion palette

---

## Page Structure

### Homepage Layout:

1. **3D Hero Section** (100vh)
   - Three.js canvas with floating emojis
   - Centered: "Real-Time Emotion Detection" headline
   - Subtitle: "AI-powered facial emotion recognition using your webcam"
   - Glowing "Start Detection" CTA button

2. **Features Grid** (py-24, max-w-6xl)
   - 3 cards: Real-Time Detection, Multi-Emotion Support, Confidence Scoring
   - Each card: Icon + Title + 2-line description

3. **How It Works** (py-24, bg-surface)
   - 3-step process with alternating layout
   - Step numbers with gradient backgrounds
   - Isometric illustrations

4. **Tech Stack** (py-20)
   - Badge grid showing: Three.js, TensorFlow.js, face-api.js
   - Subtle border cards with logos

5. **Footer** (py-12)
   - GitHub link, Documentation, Privacy note
   - Minimal, centered layout

### Detection Interface Layout:
- Fullscreen webcam canvas (100vw, 100vh)
- Overlay components positioned absolutely
- Z-index layers: Video (0), Bounding boxes (10), UI panels (20)

**Critical:** No forced viewport heights beyond hero - content flows naturally. Use py-20 to py-32 for section spacing on desktop, py-12 to py-16 on mobile.