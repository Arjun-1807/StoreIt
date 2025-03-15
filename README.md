# StorIt - Modern Cloud Storage Solution

![StorIt Logo](https://your-logo-url-here.com/logo.png)

## 📋 Overview

StorIt is a modern, secure, and user-friendly cloud storage solution inspired by Google Drive. It allows users to upload, organize, and share files seamlessly across devices. With an intuitive interface and robust backend, StorIt provides a reliable platform for all your storage needs.

## ✨ Features

- **Secure Authentication**: OTP-based email verification for enhanced security
- **File Management**: Upload, download, rename, and delete files with ease
- **File Sharing**: Share files with other users via email
- **File Organization**: Sort and filter files by type, name, size, and date
- **Storage Dashboard**: Visual representation of storage usage
- **Responsive Design**: Seamless experience across desktop and mobile devices
- **Real-time Updates**: Instant feedback on file operations

## 🛠️ Technologies Used

### Frontend

- **Next.js 15**: React framework with server-side rendering and app router
- **TypeScript**: For type-safe code
- **Tailwind CSS**: For responsive and customizable UI
- **Shadcn UI**: Component library for consistent design
- **React Dropzone**: For drag-and-drop file uploads
- **Sonner**: For toast notifications
- **React Hook Form**: For form handling and validation
- **Zod**: For schema validation

### Backend

- **Next.js Server Actions**: For server-side operations
- **Appwrite**: For authentication, database, and storage
- **Node.js**: Runtime environment

### DevOps & Tools

- **Git & GitHub**: For version control
- **Vercel**: For deployment and hosting
- **ESLint**: For code linting
- **Prettier**: For code formatting

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn
- Appwrite account

### Installation

1. Clone the repository

```bash
git clone https://github.com/yourusername/storit.git
cd storit
```

2. Install dependencies

```bash
npm install
# or
yarn install
```

3. Set up environment variables
   Create a `.env.local` file in the root directory with the following variables:

```
NEXT_PUBLIC_APPWRITE_ENDPOINT=your-appwrite-endpoint
NEXT_PUBLIC_APPWRITE_PROJECT=your-appwrite-project-id
NEXT_PUBLIC_APPWRITE_BUCKET=your-appwrite-bucket-id
APPWRITE_SECRET_KEY=your-appwrite-secret-key
```

4. Run the development server

```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application

## 📱 Screenshots

![Dashboard](https://your-screenshot-url-here.com/dashboard.png)
_Dashboard with storage usage visualization_

![File Explorer](https://your-screenshot-url-here.com/file-explorer.png)
_File explorer with sorting and filtering options_

![File Upload](https://your-screenshot-url-here.com/file-upload.png)
_Drag and drop file upload interface_

## 🔒 Security

StorIt takes security seriously:

- OTP-based authentication
- Secure session management
- Server-side validation
- Protected routes with middleware
- Encrypted file storage

## 🔄 Workflow

1. User signs up/signs in with email
2. Verifies identity with OTP sent to email
3. Accesses dashboard showing storage usage
4. Uploads, organizes, and shares files
5. Manages shared files and permissions

## 🧠 Architecture

StorIt follows a modern architecture:

- **Next.js App Router**: For efficient routing and page rendering
- **Server Actions**: For secure server-side operations
- **Appwrite Backend**: For authentication, database, and storage services
- **Middleware**: For route protection and authentication checks

## 🛣️ Roadmap

- [ ] Mobile applications (iOS/Android)
- [ ] Advanced file preview
- [ ] Collaborative editing
- [ ] Offline access
- [ ] End-to-end encryption
- [ ] AI-powered file organization

## 👥 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 🙏 Acknowledgements

- [Appwrite](https://appwrite.io/) for the backend services
- [Next.js](https://nextjs.org/) for the frontend framework
- [Tailwind CSS](https://tailwindcss.com/) for the styling
- [Shadcn UI](https://ui.shadcn.com/) for the UI components
- All open-source contributors whose libraries made this project possible

---

Built with ❤️ by [Arjun Gowda](https://github.com/Arjun-1807)
