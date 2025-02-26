# CarePulse

CarePulse is a modern doctor appointment scheduling platform built with Next.js, Tailwind CSS, and Appwrite. It provides seamless appointment booking for users, an admin panel for managing doctors and schedules, and a user-friendly experience for healthcare professionals.

## Features

- 🏥 **Doctor Appointment Scheduling** – Users can book and manage appointments easily.
- 👤 **User Dashboard** – View appointment history and upcoming schedules.
- 🔧 **Admin Panel** – Manage doctors, schedules, and user bookings.
- ✨ **Responsive UI** – Designed with Tailwind CSS for a smooth experience.
- 🔐 **Secure Authentication** – Powered by Appwrite for user management.
- 📅 **Calendar Integration** – View and manage appointments effectively.

## Tech Stack

- **Framework**: Next.js 15
- **UI Library**: Tailwind CSS
- **Backend & Database**: Appwrite
- **Authentication**: Appwrite Auth

## Installation

1. **Clone the Repository**
   ```sh
   git clone https://github.com/Nainee99/care-pulse.git
   cd care-pulse
   ```

2. **Install Dependencies**
   ```sh
   npm install
   ```

3. **Set Up Environment Variables**  
   Create a `.env.local` file in the root directory and add the necessary Appwrite credentials:
   ```env
   NEXT_PUBLIC_APPWRITE_ENDPOINT=<your-appwrite-endpoint>
   NEXT_PUBLIC_APPWRITE_PROJECT_ID=<your-project-id>
   NEXT_PUBLIC_APPWRITE_DATABASE_ID=<your-database-id>
   ```

4. **Run the Development Server**
   ```sh
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

## Contributing

1. Fork the repository.
2. Create a new branch (`git checkout -b feature-name`).
3. Commit your changes (`git commit -m "Added new feature"`).
4. Push to the branch (`git push origin feature-name`).
5. Open a pull request.

## License

This project is licensed under the MIT License.

---

🚀 **CarePulse** – Simplifying Doctor Appointments with Technology!
