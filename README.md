# BuildCraft - Construction Company Website

A modern, responsive fullstack website for a construction company built with React, Node.js, Express, and MongoDB.

## 🚀 Features

- **Modern Dark Theme**: Professional, minimalistic design with smooth animations
- **Responsive Design**: Optimized for all devices (mobile, tablet, desktop)
- **Interactive Contact Form**: Form validation with email notifications
- **Project Portfolio**: Filterable gallery of construction projects
- **Service Showcase**: Comprehensive service offerings
- **Company Information**: About section with team highlights
- **Social Media Integration**: Links to social platforms
- **Database Storage**: Contact form submissions stored in MongoDB

## 🛠️ Tech Stack

### Frontend
- React 18 with TypeScript
- SCSS for styling
- React Hook Form for form validation
- Axios for API calls
- Lucide React for icons
- Vite for build tooling

### Backend
- Node.js with Express
- MongoDB with Mongoose
- Nodemailer for email functionality
- Body-parser for request parsing
- CORS for cross-origin requests

## 📁 Project Structure

```
buildcraft/
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── styles/         # SCSS stylesheets
│   │   └── utils/          # Utility functions
│   ├── public/             # Static assets
│   └── package.json
├── server/                 # Backend Node.js application
│   ├── controllers/        # Route controllers
│   ├── models/            # MongoDB models
│   ├── routes/            # API routes
│   ├── config/            # Configuration files
│   └── package.json
├── .env.example           # Environment variables template
├── .gitignore            # Git ignore rules
└── README.md             # This file
```

## 🔧 Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or cloud instance)
- Gmail account for email functionality

### 1. Clone the repository
```bash
git clone https://github.com/IvannaHoncharuk/buildcraft-website.git
cd buildcraft-website
```

### 2. Install dependencies
```bash
npm run install-all
```

### 3. Environment Setup
Create a `.env` file in the server directory:
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/buildcraft
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
CONTACT_EMAIL=admin@yourcompany.com
```

**Note**: For Gmail, use an App Password instead of your regular password.

### 4. Start MongoDB
Make sure MongoDB is running on your system:
```bash
# macOS with Homebrew
brew services start mongodb-community

# Ubuntu/Debian
sudo systemctl start mongod

# Windows
net start MongoDB
```

### 5. Start the application
```bash
npm run dev
```

This will start both the frontend (http://localhost:5173) and backend (http://localhost:5000) servers.

## 🌐 API Endpoints

### Contact Form
- **POST** `/api/contact` - Submit contact form
  - Body: `{ name, email, phone, message, service }`
  - Response: `{ success, message, contactId }`

- **GET** `/api/contact` - Get all contacts (admin)
  - Response: `{ success, contacts }`

- **PUT** `/api/contact/:id` - Update contact status (admin)
  - Body: `{ status }`
  - Response: `{ success, contact }`

### Health Check
- **GET** `/api/health` - Server health status

## 📧 Email Configuration

The application uses Nodemailer with Gmail SMTP. To set up email functionality:

1. Enable 2-factor authentication on your Gmail account
2. Generate an App Password:
   - Go to Google Account settings
   - Security → 2-Step Verification → App passwords
   - Generate password for "Mail"
3. Use this App Password in the `SMTP_PASS` environment variable

## 💾 Database Schema

### Contact Model
```javascript
{
  name: String (required, min: 2 chars),
  email: String (required, valid email),
  phone: String (optional),
  message: String (required, min: 10 chars),
  service: String (optional),
  status: String (enum: ['new', 'contacted', 'completed']),
  createdAt: Date,
  updatedAt: Date
}
```

## 🎨 Design Features

- **Dark Theme**: Professional construction industry aesthetic
- **Responsive Grid**: Adapts to all screen sizes
- **Smooth Animations**: CSS transitions and hover effects
- **Modern Typography**: Clean, readable fonts
- **Interactive Elements**: Hover states and micro-interactions
- **Form Validation**: Real-time client-side validation
- **Loading States**: User feedback during form submission

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1024px
- Desktop: > 1024px

## 🔐 Security Features

- Input validation on both client and server
- MongoDB injection prevention
- CORS configuration
- Environment variable protection
- XSS protection through React

## 🚀 Deployment

### Frontend (Client)
```bash
cd client
npm run build
```

### Backend (Server)
```bash
cd server
npm start
```

### MongoDB Atlas (Cloud Database)
For production, consider using MongoDB Atlas:
1. Create account at https://www.mongodb.com/atlas
2. Create cluster and get connection string
3. Update `MONGODB_URI` in your environment variables

## 📝 Available Scripts

- `npm run dev` - Start both client and server in development mode
- `npm run client` - Start only the frontend
- `npm run server` - Start only the backend
- `npm run build` - Build the frontend for production
- `npm run install-all` - Install all dependencies

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Make your changes
4. Commit your changes (`git commit -m 'Add some amazing feature'`)
5. Push to the branch (`git push origin feature/amazing-feature`)
6. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

For support, email info@buildcraft.com or create an issue in the repository.

---

**BuildCraft** - Building Dreams Into Reality 🏗️