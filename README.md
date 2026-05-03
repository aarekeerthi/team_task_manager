# Team Task Manager

Team Task Manager is a full-stack web application built to help teams manage projects, assign work, and track progress collaboratively. It is designed as a simplified project management tool similar to Trello or Asana.

The application allows admins to manage team members and projects, while members can view assigned work and update task progress.

## Features

- User authentication with secure login
- JWT-based protected routes
- Role-based access for Admin and Member users
- Admin can create, update, and delete projects
- Admin can add and manage team members
- Projects can be assigned to multiple members
- Each project can contain multiple tasks
- Tasks can be marked as done or in progress
- Dashboard with project statistics
- Board view and list view for projects
- Project status tracking: To Do, In Progress, Completed
- Priority levels: High, Medium, Normal, Low
- Trash section for restoring or permanently deleting projects
- Responsive user interface

## Tech Stack

### Frontend

- React
- Redux Toolkit
- RTK Query
- React Router DOM
- Tailwind CSS
- Headless UI
- React Hook Form
- Recharts
- Sonner Toasts

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT
- Bcrypt.js
- Cookie Parser
- CORS

## Project Structure

```txt
client/
├── src/
│   ├── components/
│   ├── components/tasks/
│   ├── pages/
│   ├── redux/
│   └── utils/

server/
├── controllers/
├── middleware/
├── models/
├── routes/
├── utils/
└── index.js
Functional Requirements Covered
1. User Authentication
Users can log in securely using email and password. Authentication is handled using JWT tokens stored in HTTP-only cookies. Protected backend routes verify the token before allowing access.

2. Role-Based Access
The application supports two main user roles:

Admin
Create projects
Edit projects
Delete projects
Add tasks inside projects
Manage team members
View member status and project progress
Member
View assigned projects
View project details
Update assigned task progress
3. Project Management
Admins can create and manage projects. Each project includes:

Project title
Description
Due date
Priority
Stage
Assigned members
Support links
Projects are displayed in board view and list view.

4. Task Management
Each project can contain multiple tasks. Tasks are used to break down project work into smaller actionable items. A task includes:

Task title
Due date
Tag
Completion status
Tasks can be marked as done or in progress.

5. Dashboard
The dashboard provides an overview of the workspace. It displays:

Total projects
Completed projects
Projects in progress
Projects to do
Projects by priority
Recent projects
Recent members
6. Team Member Management
Admins can add and manage users. Each team member has:

Full name
Email
Title
Role
Active or disabled status
This allows admins to control who can access and participate in project work.

7. Status Tracking
The status page shows member-wise project progress. It displays how many projects are assigned to each member and how many are in To Do, In Progress, or Completed stages.

8. Trash Management
Deleted projects are moved to the Trash section. Admins can restore projects or permanently delete them.

Database Design
The application uses MongoDB with Mongoose models.

Main collections include:

Users
Projects
Tasks
Notifications
Internally, the backend stores main project records using the existing task model, while the frontend presents them as projects. Subtasks are displayed as tasks inside each project.

API Design
The backend follows RESTful API design.

Main API modules include:

User authentication APIs
User management APIs
Project management APIs
Task management APIs
Dashboard statistics APIs
Notification APIs
Security
Passwords are hashed before storing in the database
JWT is used for authentication
Cookies are HTTP-only
Protected routes require authentication
Admin-only routes are restricted by role
Environment variables are used for sensitive configuration
Deployment
The application is designed to be deployed as a full-stack project. The frontend and backend are connected using environment variables. The backend connects to MongoDB using a database connection string, and the frontend communicates with the backend API.

Demo Flow
Login as an admin user
View dashboard statistics
Open the Projects page
Create a new project
Assign members to the project
Add tasks inside the project
Mark tasks as done or in progress
View project status in board and list view
Manage team members
Restore or delete projects from Trash
Conclusion
Team Task Manager provides a complete collaborative workflow for managing projects and tasks. It includes authentication, role-based access, project management, task tracking, dashboard analytics, team member management, and trash recovery.