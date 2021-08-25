# Personal Website Template
This website template is based on the template provided by [StyleShout; their Ceevee template](https://www.styleshout.com/free-templates/ceevee/). 

# Getting Started
```
npm install
npm start
```
The will app in the development mode. \
Open http://localhost:3000 to view it in the browser.

The page will reload if you make edits. \
You will also see any lint errors in the console. 



# Modifying Template
To modify the template refer to the `resumeData.js`. Replace the data with your own info such as your name, the bio, work experience, extracurriculars, etc. 

*NOTE:* You can modifiy everything EXCEPT `"image": "./images/profile-picture.png",`on line 6.


## Updating Images
To use a picture of yourself for the profile picture, replace the image `profile-picture.png` in `./public/images`.

To use your own background image replace the image `header-background.jpg` in `./public/images`.

_PLEASE KEEP THE FILES NAMES THE SAME._

In the projects section, you can use your own images to represent each picture. Simply add your images to the images folder (`./public/images/portfolio`) and update the reference link inside `resumeData.js` within the projects object, specifical the `url` key.
