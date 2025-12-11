# Karthik Manda Portfolio

A modern, responsive portfolio website built with React, Vite, TailwindCSS, and Framer Motion. Showcasing web development projects, UI/UX design, digital art, and creative work with a monochromatic streetwear aesthetic.

## 🚀 Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **TailwindCSS** - Utility-first CSS framework
- **Framer Motion** - Animation library
- **React Router** - Client-side routing

## 📁 Project Structure

```
react-portfolio/
├── public/
│   └── Images/          # Static images
│   └── Misc/            # Resume and other files
├── src/
│   ├── components/      # Reusable React components
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── ProjectCard.jsx
│   │   ├── Certifications.jsx
│   │   ├── Education.jsx
│   │   └── Contact.jsx
│   ├── pages/           # Page components
│   │   ├── Home.jsx
│   │   ├── Posters.jsx
│   │   └── ProjectDetails.jsx
│   ├── data/            # Data files (easy to edit content)
│   │   ├── projects.js
│   │   ├── skills.js
│   │   ├── certifications.js
│   │   ├── education.js
│   │   ├── posters.js
│   │   └── contact.js
│   ├── App.jsx          # Main app component with routing
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles and Tailwind imports
├── index.html
├── package.json
├── vite.config.js
├── tailwind.config.js
└── README.md
```

## 🛠️ Setup & Installation

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation Steps

1. **Navigate to the project directory:**
   ```bash
   cd react-portfolio
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Copy your assets:**
   - Copy the `Images` folder from your old project to `public/Images`
   - Copy the `Misc` folder to `public/Misc`

4. **Start the development server:**
   ```bash
   npm run dev
   ```

5. **Open your browser:**
   - The app will be running at `http://localhost:5173`

## 📝 Editing Content

### Adding/Editing Projects

Edit `src/data/projects.js`:

```javascript
{
  id: 'project-id',
  title: 'Project Title',
  type: 'Project Type',
  description: 'Project description...',
  image: '/Images/project-image.png',
  link: '/project-id',
  category: 'Web Development',
  tags: ['React', 'TailwindCSS'],
  featured: true,
}
```

### Adding/Editing Skills

Edit `src/data/skills.js`:

```javascript
export const technicalSkills = [
  { name: 'Skill Name', icon: '/Images/icon.svg', type: 'icon' },
  { name: 'Text Skill', type: 'text' },
]
```

### Adding/Editing Certifications

Edit `src/data/certifications.js`:

```javascript
{
  title: 'Certification Title',
  issuer: 'Issuing Organization',
  date: 'Date',
  description: 'Description...',
  skills: ['Skill1', 'Skill2'],
  credentialLink: 'https://link-to-credential.com',
}
```

### Adding/Editing Posters

Edit `src/data/posters.js`:

```javascript
{
  image: '/Images/Posters/poster.jpg',
  title: 'POSTER TITLE',
  description: 'Poster description...',
}
```

## 🏗️ Building for Production

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Preview the production build:**
   ```bash
   npm run preview
   ```

The built files will be in the `dist/` directory.

## 🌐 Deployment to Netlify

### Option 1: Deploy via Netlify CLI

1. **Install Netlify CLI:**
   ```bash
   npm install -g netlify-cli
   ```

2. **Build the project:**
   ```bash
   npm run build
   ```

3. **Deploy:**
   ```bash
   netlify deploy --prod --dir=dist
   ```

### Option 2: Deploy via Netlify Dashboard

1. **Push your code to GitHub/GitLab/Bitbucket**

2. **Go to [Netlify](https://www.netlify.com/) and sign in**

3. **Click "New site from Git"**

4. **Select your repository**

5. **Configure build settings:**
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
   - **Node version:** 18 (or higher)

6. **Click "Deploy site"**

### Option 3: Drag & Drop Deployment

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Go to Netlify Dashboard → Sites → Add new site → Deploy manually**

3. **Drag and drop the `dist` folder**

### Netlify Configuration (Optional)

Create a `netlify.toml` file in the root:

```toml
[build]
  command = "npm run build"
  publish = "dist"

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

## 🎨 Customization

### Colors

Edit `tailwind.config.js` to change the color scheme:

```javascript
colors: {
  'primary-black': '#000000',
  'primary-white': '#FFFFFF',
  'secondary-white': '#F5F5F5',
  'accent-gray': '#1A1A1A',
}
```

### Fonts

Fonts are loaded in `index.html`. Update the Google Fonts links to change typography.

### Animations

Animations use Framer Motion. Edit component files to adjust animation timings and effects.

## 📱 Features

- ✅ **Fully Responsive Design** - Perfect on mobile, tablet, and desktop
- ✅ **Smooth Animations** - Framer Motion powered transitions
- ✅ **Modern UI** - TailwindCSS utility-first styling
- ✅ **SEO Optimized** - Dynamic meta tags with react-helmet-async
- ✅ **Accessible** - ARIA labels and keyboard navigation
- ✅ **Mobile-First** - Touch-friendly interface with hamburger menu
- ✅ **Lightbox Gallery** - Full-screen poster viewing
- ✅ **Dynamic Content** - Data-driven projects and content
- ✅ **Working Contact Form** - Sends emails via EmailJS and logs to Google Sheets

## 📧 Contact Form Setup

The contact form is configured to work without a server! It uses:
- **EmailJS** - Sends emails directly from the browser (200 emails/month free)
- **Google Sheets** - Logs all submissions (can be exported to Excel)

### Quick Setup:

1. **Copy the example environment file:**
   ```bash
   cp .env.example .env
   ```

2. **Follow the detailed setup guide:**
   See [SETUP_INSTRUCTIONS.md](./SETUP_INSTRUCTIONS.md) for step-by-step instructions.

3. **Get your EmailJS keys:**
   - Sign up at [https://www.emailjs.com/](https://www.emailjs.com/)
   - Create a service and template
   - Add your keys to `.env`

4. **Optional - Google Sheets logging:**
   - Create a Google Sheet
   - Set up Google Apps Script (see SETUP_INSTRUCTIONS.md)
   - Add webhook URL to `.env`

That's it! Your form will send emails and log to Google Sheets (exportable to Excel).
- ✅ **Error Handling** - Error boundaries with fallback UI
- ✅ **Performance** - Lazy loading, code splitting, optimized bundles
- ✅ **Loading States** - Professional spinners and skeletons
- ✅ **Scroll to Top** - Smooth navigation button
- ✅ **Image Optimization** - Lazy loading with error handling

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 📄 License

This project is private and proprietary.

## 👨‍💻 Author

**Karthik Manda**
- Portfolio: [karthikmanda.netlify.app](https://karthikmanda.netlify.app)
- LinkedIn: [linkedin.com/in/karthik-manda](https://www.linkedin.com/in/karthik-manda-027038255/)
- GitHub: [github.com/mkarthik2004](https://github.com/mkarthik2004)
- Instagram: [@karthxk.mvr](https://www.instagram.com/karthxk.mvr/)

---

Built with ❤️ using React, Vite, TailwindCSS, and Framer Motion

