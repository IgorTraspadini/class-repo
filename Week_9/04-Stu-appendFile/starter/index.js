// TODO: What are we importing?
// module fs from node.js 
const fs = require('fs');

// TODO: Add comments to explain each of the three arguments of appendFile()
// add the first argument passed via command line to the log.txt file
fs.appendFile('log.txt', `${process.argv[2]}\n`, (err) =>
  // TODO: Describe how this ternary operator works
  // if the error occur print the error on console, otherwise print "Commit logged!".
  err ? console.error(err) : console.log('Commit logged!')
);
