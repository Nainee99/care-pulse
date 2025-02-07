# Next.js Starter Template with ShadCN UI and Clerk Authentication

This is a **Next.js starter template** with **ShadCN UI** and **Clerk authentication** pre-configured. You can quickly set up a project with modern UI components and user authentication.

## Features

- **Next.js 15+** with TypeScript
- **ShadCN UI** for modern, customizable UI components
- **Clerk Authentication** for easy user management
- Pre-configured environment variables for Clerk authentication

## Getting Started

### 1. Clone the repository

Clone this repository to your local machine using Git:

```bash
git clone https://github.com/Nainee99/nextjs-shadcn-clerk-starter.git
cd starter_template_nextjs
```

### 2. Install Dependencies

Install the necessary dependencies using **npm** or **yarn**:

```bash
npm install
# OR
yarn install
```

### 3. Set up Clerk Authentication

To enable Clerk authentication, you'll need to provide your **Clerk** API keys.

Create a `.env.local` file at the root of the project and add the following environment variables:

```bash
# Clerk Environment Variables

# Clerk URLs
NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=/
NEXT_PUBLIC_CLERK_AFTER_SIGN_OUT_URL=/

# Clerk API Keys (Get these from your Clerk Dashboard)
CLERK_SECRET_KEY=<your-clerk-secret-key>
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=<your-clerk-publishable-key>
```

Make sure to replace `<your-clerk-secret-key>` and `<your-clerk-publishable-key>` with your actual Clerk keys, which can be found in your Clerk dashboard.

### 4. Run the Development Server

Now that the environment variables are set up, run the development server:

```bash
npm run dev
# OR
yarn dev
```

Visit `http://localhost:3000` in your browser, and you should see the app running with Clerk authentication and ShadCN UI components.

### 5. Authentication Flow

- **Sign In**: Users can sign in using the `/sign-in` route.
- **Sign Up**: Users can sign up using the `/sign-up` route.
- **Sign Out**: Users can sign out, which will redirect them to the specified `NEXT_PUBLIC_CLERK_AFTER_SIGN_OUT_URL`.

### 6. Deploy to Production

Once you're ready to deploy your app, make sure to update your environment variables in your hosting platform (like Vercel or Netlify) with the same keys from your `.env.local`.

#### Example on Vercel:

1. Go to your Vercel dashboard.
2. Select your project.
3. Under the **Settings** tab, go to **Environment Variables**.
4. Add each of the variables (`NEXT_PUBLIC_CLERK_SIGN_IN_URL`, `NEXT_PUBLIC_CLERK_SIGN_UP_URL`, etc.) with the appropriate values.

### 7. Customize the UI

You can customize the UI components using **ShadCN UI**. The library includes a set of customizable, modern UI components to help you build your app.

Refer to the [ShadCN UI documentation](https://github.com/shadcn/ui) for detailed information on how to use the components.

### 8. Contributing

Feel free to fork this repository and submit issues and pull requests.

### 9. License

This project is licensed under the MIT License.
