# Personal Website
My personal website (work in progress) built with the MERN stack. See at https://micahorton.com

## Deploy Instructions
### Frontend
1) Build react app
```
cd frontend
npm run build
```
2) Change project.js and contact.js to use api instead of localhost
3) Deploy with gcloud
```
gcloud app deploy
```
### Backend
1) modify things: set https only (secure: true) for cookies
2) deploy with gcloud
```
cd backend
gcloud app deploy
```
