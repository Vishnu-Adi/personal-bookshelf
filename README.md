Personal Bookshelf is a responsive and intuitive React application that allows users to discover, search, and manage their favorite books. Leveraging the Open Library API, users can search for books by title, author, or keyword, view book covers, and maintain a personalized bookshelf.

## 🌟 Features

- **Real-time Book Search**: Search books as you type, with debounced API calls for performance.
- **Book Covers**: View high-quality book covers fetched from the Open Library.
- **Personal Bookshelf**: Add and remove books from your personal collection.
- **Persistent Storage**: Your bookshelf is stored in `localStorage`, so your books are there even after you close the browser.
- **Responsive Design**: Looks great on desktops, tablets, and mobile devices.
- **Non-intrusive Notifications**: Toast notifications for user feedback without disrupting the experience.

- ### Prerequisites

- Node.js (v14.x or later recommended)
- npm (comes with Node.js)

### Installation

1. Clone the repository:
   
  git clone https://github.com/yourusername/personal-bookshelf.git
  cd personal-bookshelf
  
3. Install dependencies:
   npm install

4. Start the deployment server:
   npm start
   
## 🏗️ Building for Production

To create a production build:
  npm run build

  
This builds the app for production to the `build` folder. It correctly bundles React in production mode and optimizes the build for the best performance.

## 🌐 API Used

This project uses the [Open Library API](https://openlibrary.org/developers/api) to fetch book data and covers. No API key is required.

## 🎨 Styling

The application uses CSS variables for easy theming, CSS Grid and Flexbox for responsive layouts, and smooth transitions for a polished user experience.

## 📂 Project Structure

personal-bookshelf/
├── public/
├── src/
│   ├── components/
│   │   ├── BookSearch.js
│   │   ├── BookSearch.css
│   │   ├── Bookshelf.js
│   │   ├── Bookshelf.css
│   │   ├── Toast.js
│   │   └── Toast.css
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── package.json
├── README.md
└── .gitignore
