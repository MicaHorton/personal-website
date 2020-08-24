# Personal-Website
My personal website (work in progress) built with the MERN stack. See at https://personal-website-279319.wl.r.appspot.com/

## Resources

MERN Tutorial
https://www.youtube.com/watch?v=7CqJlxBYj-M&t=2437s

React Beginner Mistakes Tutorial
https://www.youtube.com/watch?v=oZbTqEmQpDo

React Responsive Github Repository
https://github.com/contra/react-responsive

How To Font Awesome
https://stackoverflow.com/questions/23116591/how-to-include-a-font-awesome-icon-in-reacts-render

Deploy with Google
https://dev.to/ryanmercadante/deploy-your-mern-stack-application-to-google-app-engine-2g2c

CreateError
https://github.com/axios/axios/issues/1414

Google Application Security
https://cloud.google.com/appengine/docs/standard/java/application-security

Another Deploy Tutorial 
https://www.youtube.com/watch?v=PnIjfte7284

Example
https://github.com/joaopedrodcf/blog-mern

## Steps
1) create navbar and page frames
2) create basic backend for blog
3) create backend for contact
4) create admin console for blog

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