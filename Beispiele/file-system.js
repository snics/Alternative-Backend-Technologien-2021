var fs = require('fs');

fs.readFile('text.html', function(err, data) {
  if (err) return 0;
  console.log(data.toString('utf8'));
});
