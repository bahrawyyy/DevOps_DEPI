# To-do Application    
### Description
This project is a simple Task Manager application built using React for the frontend, Express.js for the backend, and MongoDB for the database. The application allows users to create, view, and delete tasks, with each task consisting of a title, description, and deadline. The application is containerized using Docker.

### Features
- Add new tasks with a title, description, and deadline.
- View all tasks in a table format.
- Delete tasks from the list.
- API endpoints for managing tasks.
---
  ![image](https://github.com/user-attachments/assets/95e84963-567e-4167-b029-8ce50f9b966e)


### Prerequisites
- Node.js (v14 or above)
- MongoDB (v4.0 or above)
- Docker 

### 📁 Folder Structure
```
├── backend
│   ├── server.js
│   ├── models
│   └── routes
├── frontend
│   ├── src
│   │   ├── App.js
│   │   ├── App.css
│   │   └── index.js
├── docker-compose.yml
└── README.md

```

### Installation
#### 1) Clone the Repository

```bash
git clone https://github.com/bahrawyyy/DevOps_DEPI.git
cd todo-app
```

#### 2️) Build and run the containers using Docker compose
```bash
docker-compose up --build
```
---

### Usage
- Open your browser and navigate to http://localhost:3000.
- Add a new task by filling in the title, description, and deadline fields, then click "Add Task."
- View your tasks in the table. Use the "Delete" button to remove any task.

![image](https://github.com/user-attachments/assets/643b8e2a-082a-4140-b054-812018ffb600)

### 🤝 Contributing
Contributions are welcome! Please feel free to submit a Pull Request or open an Issue if you find a bug or have a feature request.
