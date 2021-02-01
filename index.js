
const server = require('./server.js');

const PORT = process.env.PORT || 7000;
server.listen(PORT, () => {
  console.log(`\n=== Server listening on port ${PORT} ===\n`);
});

// start your server here

