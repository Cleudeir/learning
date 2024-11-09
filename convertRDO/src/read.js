const fs = require('fs');
const path = require('path');
const readFiles = async function (dir, processFile) {
  // read directory
  fs.readdir(dir, (error, fileNames) => {
    if (error) throw error;

    fileNames.forEach((filename, index) => {
      // get current file name
      const name = path.parse(filename).name;
      // get current file extension
      const ext = path.parse(filename).ext;
      // get current file path
      const filepath = path.resolve(dir, filename);

      const done = index === (fileNames.length -1 )
      // get information about the file
      fs.stat(filepath, function (error, stat) {
        if (error) throw error;

        // check if the current path is a file or a folder
        const isFile = stat.isFile();

        // exclude folders
        if (isFile) {
          // callback, do something with the file
          processFile(filepath, name, done);
        }
      });
    });
  });
}

module.exports = readFiles;
