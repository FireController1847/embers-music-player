const { app, BrowserWindow } = require('electron');
const path = require('path');
const url = require('url');

require('electron-reload')(__dirname, {
  electron: path.join(__dirname, '../node_modules', '.bin', 'electron'),
  hardResetMethod: 'exit'
});

let window;

app.on('ready', () => {
  window = new BrowserWindow({
    width: 432,
    height: 528,
    minHeight: 528,
    minWidth: 432
  });
  window.loadURL(url.format({
    pathname: path.join(__dirname, 'index.html'),
    protocol: 'file:',
    slashes: true
  }));
  window.show();
});


// 7E57C2