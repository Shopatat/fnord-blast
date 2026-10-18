const { app, BrowserWindow, Menu } = require("electron");
const path = require("path");

function createWindow() {
  Menu.setApplicationMenu(null);
  const win = new BrowserWindow({
    width: 720, height: 900, minWidth: 360, minHeight: 450,
    title: "Fnord Blast", backgroundColor: "#120a1f",
    webPreferences: { contextIsolation: true }
  });
  win.loadFile(path.join(__dirname, "index.html"));
  win.webContents.on("before-input-event", (e, i) => {
    if (i.type === "keyDown" && i.key === "F11") win.setFullScreen(!win.isFullScreen());
  });
}

app.whenReady().then(createWindow);
app.on("window-all-closed", () => app.quit());
