const { app, BrowserWindow, Menu } = require("electron");
const path = require("path");

function createWindow() {
  Menu.setApplicationMenu(null);
  const win = new BrowserWindow({
    width: 540, height: 960, minWidth: 270, minHeight: 480, useContentSize: true,
    title: "Fnord Blast", backgroundColor: "#3b2210",
    webPreferences: { contextIsolation: true }
  });
  win.loadFile(path.join(__dirname, "index.html"));
  win.webContents.on("before-input-event", (e, i) => {
    if (i.type === "keyDown" && i.key === "F11") win.setFullScreen(!win.isFullScreen());
  });
}

app.whenReady().then(createWindow);
app.on("window-all-closed", () => app.quit());
