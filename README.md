# Seoul Comix Restaurant App

Welcome to the Seoul Comix Restaurant App, a simple web application that allows users to view a list of restaurants and mark them as favorites. This application is built using React and TypeScript for the frontend, and TRPC for the backend, with PostgreSQL as the database and Prisma ORM for database interactions.

## Live Demo

Experience the Seoul Comix Restaurant App live: `https://seoulcomix-test.vercel.app`

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (v18 or newer)
- npm (v6 or newer)
- PostgreSQL

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/minhhieple97/seoulcomix-test.git
   cd seoulcomix-test
   ```

2. **Set up the database:**

   - Create a new PostgreSQL database.
   - Copy `.env.example` to `.env` and update the `DATABASE_URL` with your database connection string.

3. **Install dependencies:**

   Navigate to the project directory and install the required dependencies.

   ```bash
   pnpm install
   ```

4. **Run Prisma migrations:**

   This will create the necessary tables in your database.

   ```bash
   npx prisma migrate dev
   ```

5. **Start the backend server:**

   If you're using Next.js with edge functions, run:

   ```bash
   npm run dev
   ```

   This will start the development server for both the frontend and the backend.

6. **Visit the application:**

   Open your browser and go to `http://localhost:3000` to view the application.

## Usage

- **Viewing Restaurants:** Upon launching the app, you will see a list of restaurants each with a name, description, rating, and an image.
- **Mark as Favorite:** Click on the heart icon next to a restaurant to mark it as a favorite. The heart icon will change to indicate the restaurant is a favorite.

## Contributing

We welcome contributions to the Seoul Comix Restaurant App! Please feel free to submit pull requests or open issues to suggest improvements or add new features.

## License

This project is licensed under the MIT License - see the LICENSE.md file for details.

---

This README template provides a basic structure for your project documentation, including installation, usage, contributing, and licensing information. Be sure to customize the repository URL, installation steps, and other details as needed for your specific project.
