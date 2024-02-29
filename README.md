# Finance Web Application

This project is a web application developed using React for the frontend and Django for the backend. It provides features such as user authentication, blog management, about, contact, and portfolio pages with interactive graphs.

## Features

- **User Authentication:** Users can sign up for an account or log in using their email and password. Authentication is implemented using JSON Web Tokens (JWT) for secure communication between the frontend and backend. Users can also log out of their accounts.
- **Blog Management:** Authenticated users can create, read, update, and delete blog posts. Each blog post contains a title, content, author information, and publication date.
- **About Page:** The about page provides information about the project, team members, and the purpose of the application.
- **Contact Page:** Users can reach out to the team behind the project through the contact page. The contact form allows users to submit their inquiries or feedback.
- **Portfolio Pages with Graphs:** The application includes portfolio pages where users can view their financial portfolio. Interactive graphs and charts visualize the user's financial data, such as investment performance, asset allocation, and historical trends.

## Technologies Used

- **Frontend:** React.js, Material-UI
- **Backend:** Django, Django REST Framework
- **Database:** PostgreSQL
- **Authentication:** JSON Web Tokens (JWT)
- **Data Visualization:** Chart.js, Plotly.js
- **Deployment:** Docker, Heroku (for backend), Netlify (for frontend)

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/amankrs21/FinanceReactDjango.git
   ```

2. Navigate to the project directory:

   ```bash
   cd FinanceReactDjango
   ```

3. Navigate to backend directory and create a virtual environment:

   ```bash
   cd backend
   ```
   ```bash
   python -m venv venv
   ```
   Linux or MacOS
   ```bash
   source venv/bin/activate
   ```
   Windows
   ```bash
   ven\Scripts\activate
   ```

3. Install the required dependencies:

   ```bash
   pip install -r requirements.txt
   ```
   ```bash
   npm install
   ```

4. Run the development server:

   ```bash
   python manage.py runserver
   ```
   ```bash
   npm start
   ```
5. Open the application in your web browser:

   ```bash
   http://localhost:5173/
   ```
   ```bash
   http://localhost:8000/
   ```

## License

This project is licensed under the MIT License. See the [LICENSE]
