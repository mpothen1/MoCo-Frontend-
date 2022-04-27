const express = require('express')
const reload = require('livereload')
const dotenv = require('dotenv')
const path = require('path')

dotenv.config();
const dirname = path.resolve();

const app = express();
const PORT = process.env.PORT || 3000;
const staticFolder = 'client';
let liveReloadServer;

if (process.env.CONTEXT === 'development') {
  liveReloadServer = reload.createServer();
  liveReloadServer.watch(path.join(dirname, staticFolder));
}

app.use(express.static(staticFolder));

async function bootServer() {
  try {
    app.listen(PORT, async () => {
      console.log(`Listening on: http//localhost:${PORT}`);
    });
  } catch (err) {
    console.log(err);
  }
}

bootServer();