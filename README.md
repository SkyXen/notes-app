# notes-app

This notes-app is a REST API to :

     -> Create Notes.

     -> Retrieve all existing notes and also notes by  their respective id's.

     -> Update existing notes by their id's.

     -> Delete existing notes by their id's.

## Setting up the environment

Clone this repository in your local machine.

(Make sure your machine have node and npm pre-installed before cloning this repository).

## Usage

Running the server on localhost on port 5000.

```bash
npm run dev
```

The server will start running and can be accessed through http://localhost:5000 and get connected to mongoDB database.

API endpoint for creating Notes:

   POST: http://localhost:5000/notes/create

API endpoint for retrieving all Notes:

   GET: http://localhost:5000/notes

API endpoint for retrieving a Note by it's id:

   GET: http://localhost:5000/notes/:id

API endpoint for updating a Note by it's id:

   PUT: http://localhost:5000/notes/:id

API endpoint for deleting a Note by it's id:

   DELETE: http://localhost:5000/notes/:id

********************************************************
For building and running Docker containers:

Make sure docker is installed in your local machine before running the below command.

Run this command in the terminal:

```bash
sudo docker compose up
```

The database conatiner along with API container will be build and started.

The server starts running and can be accessed through http://localhost:5001 (as in docker container PORT 5000 is mapped to 5001) and get connected to mongoDB database.

API endpoint for creating Notes:

   POST: http://localhost:5001/notes/create

API endpoint for retrieving all Notes:

   GET: http://localhost:5001/notes

API endpoint for retrieving a Note by it's id:

   GET: http://localhost:5001/notes/:id

API endpoint for updating a Note by it's id:

   PUT: http://localhost:5001/notes/:id

API endpoint for deleting a Note by it's id:

   DELETE: http://localhost:5001/notes/:id