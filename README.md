Dashboard UI

A simple React + Tailwind CSS dashboard layout with a sidebar, top navigation bar, chart panels, and wallet panels.

Features

Sidebar

Displays date, greeting, navigation menu, resources, and account support.

Menu items grouped into separate cards for clarity.

Navbar

Custom background image with flexible spacing.

Country flags, notification bell, and user profile dropdown.

Chart Panels

Bar chart built with Recharts
.

Dropdown filters with configurable data.

Wallet Panel

Displays country flags, currency text, and balances.

Tech Stack

React – Component-based UI.

Tailwind CSS – Utility-first styling.

Recharts – Responsive charting library.

Lucide Icons – Modern icon set.

Project Structure
src/
 ├─ components/
 │   ├─ Sidebar.jsx
 │   ├─ Navbar.jsx
 │   ├─ ChartPanel.jsx
 │   ├─ WalletPanel.jsx
 │   └─ Dashboard.jsx
 └─ App.jsx

Getting Started

Clone the repository:

git clone https://github.com/your-username/dashboard-ui.git
cd dashboard-ui


Install dependencies:

npm install


Run the development server:

npm run dev


Open in browser:

http://localhost:5173

Customization

Update ChartPanel.jsx with your own data.

Replace flag images in Navbar.jsx and WalletPanel.jsx.

Adjust spacing and colors in Tailwind classes to match branding.