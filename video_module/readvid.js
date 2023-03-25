/*const express = require('express');
const path = require('path');
const fs = require('fs');
const mime = require('mime');

const app = express();
//app.use('./public/videos', express.static(path.join(__dirname, 'public')));
app.use('/public/videos', express.static(path.join(__dirname, 'public'), {
    setHeaders: function (res, path) {
      const mimeType = mime.getType(path);
      res.setHeader('Content-Type', mimeType);
    }
  }));

  app.set('view engine', 'ejs');
app.get('/', function (req, res) {
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
  
  const port = process.env.PORT || 3030

  app.get('/', (req, res) => { 
    
    res.send('video-player'); 
});
app.listen(port, () => {
    console.log('Server is up on port ' + port);
})
*/

const express = require('express');
const path = require('path');
const fs = require('fs');
const mime = require('mime');
const { Module } = require('module');


const app = express();


const playVideo = async () => {
app.use('/videos', express.static(path.join(__dirname, 'public/videos'), {
  setHeaders: function(res, path) {
    if (mime.getType(path) === 'video/mp4') {
      res.setHeader('Content-Type', 'video/mp4');
    }
  }
}));

app.set('view engine', 'ejs');

app.get('/', function (req, res) {
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
}

module.exports={playVideo}