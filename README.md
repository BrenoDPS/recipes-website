# Recipes Website

This repository contains a recipes website that allows users to view, share, and create new recipes. It is built with a Django backend and a Vue.js (with Vuetify) frontend.

## Project Objectives
- Provide a platform to explore and share recipes.
- Allow authenticated users to create, edit, and comment on recipes.
- Offer a responsive and modern user interface.

## Directory Structure

Below is the high-level tree structure of the project:

```
Recipes-Website/
├── backend/                  # Django backend
│   ├── core/                 # Django project settings, URLs, WSGI/ASGI configs
│   ├── recipes/              # Django app: models, views, serializers, migrations
│   ├── db.sqlite3            # SQLite database file
│   ├── manage.py             # Django management script
│   ├── requirements.txt      # Python dependencies
│   └── .gitignore            # Backend-specific ignores
│
├── receitas-vuetify/         # Vue.js frontend (using Vuetify)
│   ├── public/               # Static files and index.html
│   ├── src/
│   │   ├── assets/           # Fonts, CSS, images, etc.
│   │   ├── components/       # Vue.js components
│   │   ├── layouts/          # Layout components for the site
│   │   ├── router/           # Vue Router configuration
│   │   └── main.js           # Application entry point
│   ├── package.json          # NPM dependencies and scripts
│   ├── vite.config.js        # Vite build configuration
│   └── .gitignore            # Frontend-specific ignores
│
├── docs/                     # Documentation and guidelines (if applicable)
└── tests/                    # Test cases for the project
```

## Getting Started

### Prerequisites
- Python 3 and pip installed (for backend)
- Node.js and npm installed (for frontend)

### Backend Setup (Django)
1. **Navigate to the backend directory:**
    ```bash
    cd backend
    ```
2. **Create and activate a virtual environment:**
    - On macOS/Linux:
      ```bash
      python3 -m venv venv
      source venv/bin/activate
      ```
    - On Windows:
      ```bash
      python -m venv venv
      venv\Scripts\activate
      ```
3. **Install Python dependencies:**
    ```bash
    pip install -r requirements.txt
    ```
4. **Apply migrations and set up the database:**
    ```bash
    python manage.py makemigrations
    python manage.py migrate
    ```
5. **Run the Django server:**
    ```bash
    python manage.py runserver
    ```
    The backend will be accessible at http://127.0.0.1:8000/.

### Frontend Setup (Vue.js)
1. **Navigate to the receitas-vuetify directory:**
    ```bash
    cd receitas-vuetify
    ```
2. **Install Node dependencies:**
    ```bash
    npm install
    ```
3. **Run the development server:**
    ```bash
    npm run dev
    ```
    The frontend will be available at the local address provided by Vite (typically http://localhost:3000 or similar).

## Additional Information
- **API Endpoints:** The Django backend uses REST framework with endpoints for recipes, categories, authentication (with djoser), and comments.
- **CORS:** The backend is configured to allow requests from both the frontend and development origins.
- **Contribution:** Contributions are welcome! Please review the guidelines in the docs before submitting pull requests.
- **License:** Distributed under the MIT License; see the `LICENSE` file for more details.

Happy meals and enjoy sharing your favorite recipes!