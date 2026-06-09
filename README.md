# Task Tracker CLI

A simple command line interface to track and manage your tasks.

Project URL: https://roadmap.sh/projects/task-tracker

## Requirements

- Node.js

## Setup

```bash
git clone <your-repo-url>
cd task-tracker
```

## Usage

```bash
# Add a task
node app.js add "Buy groceries"

# Update a task
node app.js update 1 "Buy groceries and cook dinner"

# Delete a task
node app.js delete 1

# Mark as in progress
node app.js mark-in-progress 1

# Mark as done
node app.js mark-done 1

# List all tasks
node app.js list

# List by status
node app.js list done
node app.js list todo
node app.js list in-progress
```
