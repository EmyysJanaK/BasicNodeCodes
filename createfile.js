/*Include file system module. */
var fs = require('fs');

fs.write('newtfile.html','This file is created by write() method',function(err){
    if (err) throw err;
    console.log('Saved!');
});
