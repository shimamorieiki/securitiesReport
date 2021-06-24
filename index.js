const { app, BrowserWindow, Menu, MenuItem } = require('electron');

// function createWindow1() {
//     let win = new BrowserWindow({
//         width: 400,
//         height: 200,
//         webPreferences: {
//             nodeIntegration: true
//         }
//     });
//     win.loadFile('index.html');

//     let child = new BrowserWindow({
//         width: 350,
//         height: 200,
//         parent: win,
//         frame: false,
//         transparent: true,
//         webPreferences: {
//             nodeIntegration: true
//         }
//     });
//     child.loadFile('child.html');

//     let child2 = new BrowserWindow({
//         width: 350,
//         height: 200,
//         parent: win,
//         frame: false,
//         opacity: 0.5,
//         webPreferences: {
//             nodeIntegration: true
//         }
//     });
//     child2.loadFile('child.html');
// }

// function createWindow2() {
//     let win1 = new BrowserWindow({
//         width: 400,
//         height: 200
//     });
//     win1.loadURL('http://www.tuyano.com');
//     win.on('ready-to-show', () => {
//         win.show();
//     });

//     win.on('show', () => {
//         console.log('show browser-window');
//     });

//     // let win2 = new BrowserWindow({
//     //     width: 400,
//     //     height: 200
//     // });
//     // win2.loadFile('index.html');
// }
// app.on('will-finish-launching', () => {
//     console.log("will-finish-launching");
// });

// app.on('browser-window-focus', (event) => {
//     console.log('browser-window-focus' + event.sender.id);
// });

// app.on('browser-window-blur', (event) => {
//     console.log('browser-window-blur' + event.sender.id);
// });
function createWindow() {
    win = new BrowserWindow({
        width: 400,
        height: 200
    });
    win.loadFile('index.html');
}

function createMenu() {
    let menu_temp = [{
            label: 'File',
            submenu: [
                { label: 'New',click:()=>{
                    console.log('New menu');
                    createWindow();
                }},
                {type:'separator'},
                { label: 'Quit',click:()=>{
                    console.log('Quit menu');
                    app.quit();
                }}
            ]
        },
        {
            label: 'Edit',
            submenu: [
                { role: 'cut' },
                { role: 'copy' },
                { role: 'paste' }
            ]
        }
    ];
    let menu = Menu.buildFromTemplate(menu_temp);
    Menu.setApplicationMenu(menu);
}
createMenu();
app.whenReady().then(createWindow);