const express = require('express');
const path = require('path');
const app = express()
const fs = require('fs');
const mime = require('mime');
const {connectDB} = require("./mongodbcon");
const html = fs.readFileSync('/Users/arham/webinars/video_module/frontend.html', 'utf8');
const {playVideo}=require("./readvid")
const multer = require('multer');
const router=require('router');
connectDB();



const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './public/videos')
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname)
    }
  })
  
  const upload = multer({ storage: storage })
  app.post('/public', upload.single('video'), function (req, res, next) {
  
    res.send('Video uploaded successfully')
  })
  

//playing the videosssss ----------------- 


    app.use('/videos', express.static(path.join(__dirname, 'public/videos'), {
      setHeaders: function(res, path) {
        if (mime.getType(path) === 'video/mp4') {
          res.setHeader('Content-Type', 'video/mp4');
        }
      }
    }));
    
    app.set('view engine', 'ejs');
    
    app.get('/playvideo', function (req, res) {
      // Read the video files in the 'videos' directory
      fs.readdir(path.join(__dirname, './public/videos'), function (err, files) {
        if (err) {
          console.error(err);
          return;
        }
        // Render the video player template with the list of video files
        res.render('video-player', { files: files });
      });
    });
    
    //const port = process.env.PORT || 3037;
    //app.listen(port, () => {
      //console.log('Server is up on port ' + port);/
    //});
    

const port = process.env.PORT || 5005
app.get('/', (req, res) => { 
    res.send( html); 
});
app.listen(port, () => {
    console.log('Server is up on port ' + port);
})
