# 🌸 Flower Shop – Modern React SPA

A visually stunning, fully responsive Single Page Application (SPA) for a flower shop, built with **React**, **Vite**, and **Tailwind CSS**. This project showcases elegant floral products, interactive 3D elements, and a seamless shopping experience.

---

## ✨ Features

- **Modern UI/UX**: Clean, elegant, and mobile-first design.
- **Responsive Layout**: Optimized for all devices (desktop, tablet, mobile).
- **Navigation**: Sticky header with smooth scrolling and animated menu.
- **Product Catalog**: Browse a curated collection of bouquets and vases with beautiful imagery.
- **Featured Products**: Highlighted section for bestsellers and seasonal picks.
- **Interactive Cart**: Add, remove, and update product quantities with persistent cart (localStorage).
- **Checkout Preview**: Cart summary and checkout button (demo, not connected to backend).
- **3D Butterfly Animation**: Unique hero section with a 3D animated butterfly (powered by Three.js and @react-three/fiber).
- **Highlights Section**: Why choose us – custom bouquets, fast delivery, eco-friendly, expert florists, personalized notes, 24/7 support.
- **About/Our Story**: Brand story, values, and team introduction.
- **Contact Section**: Address, phone, email, working hours, and embedded Google Map.
- **Footer**: Quick links, contact info, and social media icons.
- **AOS Animations**: Smooth scroll-based animations for engaging user experience.

---

## 🛠️ Tech Stack

- **Frontend**: [React 19](https://react.dev/)
- **Build Tool**: [Vite](https://vitejs.dev/)
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **3D/Animation**: [Three.js](https://threejs.org/), [@react-three/fiber](https://docs.pmnd.rs/react-three-fiber/), [@react-three/drei](https://docs.pmnd.rs/drei/)
- **Icons**: [lucide-react](https://lucide.dev/)
- **Animations**: [AOS](https://michalsnik.github.io/aos/), [GSAP](https://greensock.com/gsap/)
- **State Management**: React Context API, custom `useLocalStorage` hook
- **Linting**: ESLint, Prettier, Tailwind plugin

---

## 📦 Project Structure

```
flowerShop/
├── public/                # Static assets (empty by default)
├── src/
│   ├── assets/            # Images (products, featured, hero, story)
│   ├── components/        # UI components (Header, Hero, Products, Cart, etc.)
│   ├── context/           # Cart context provider
│   ├── hooks/             # Custom React hooks (useLocalStorage)
│   ├── models/            # 3D models (Butterfly.glb)
│   ├── pages/             # Page-level components (Home)
│   ├── App.jsx            # Main app entry (SPA)
│   ├── main.jsx           # React root
│   └── index.css          # Tailwind and custom styles
├── package.json           # Project metadata and scripts
├── vite.config.js         # Vite configuration
├── eslint.config.js       # ESLint configuration
└── README.md              # Project documentation
```

---

## 🚀 Getting Started

### 1. **Clone the repository**

```bash
git clone https://github.com/CodeByHossam/flowerShop.git
cd flowerShop
```

### 2. **Install dependencies**

```bash
npm install
```

### 3. **Run the development server**

```bash
npm start
# or
npm run dev
```

Visit [http://localhost:5173](http://localhost:5173) to view the app.

### 4. **Build for production**

```bash
npm run build
```

### 5. **Preview production build**

```bash
npm run preview
```

---

## 🖼️ Assets & Customization

- Product and featured images are located in `src/assets/products/` and `src/assets/featuredProducts/`.
- The 3D butterfly model is in `src/models/Butterfly.glb`.
- Fonts: Roboto, Parisienne, and Inter (Google Fonts).
- Easily customize colors, images, and content to fit your brand.

---

## 📝 Linting & Formatting

- Run `npm run lint` to check code quality.
- Prettier and Tailwind CSS plugin are included for consistent formatting.

---

## 🙏 Credits

- UI/UX, code, and assets by [CodeByHossam](https://github.com/CodeByHossam)
- 3D/animation powered by [Three.js](https://threejs.org/) and [@react-three/fiber](https://docs.pmnd.rs/react-three-fiber/)
- Icons by [lucide-react](https://lucide.dev/)
- Animations by [AOS](https://michalsnik.github.io/aos/) and [GSAP](https://greensock.com/gsap/)

---

## 📄 License

This project is for educational and demonstration purposes. For commercial use, please contact the author.
