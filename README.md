# Chromeless Test Sample

## How to use

Install the latest version of Chrome (59+) and run the following command to have Chrome running headless

```
cd "C:\Program Files (x86)\Google\Chrome\Application"
chrome --headless --remote-debugging-port=9222 https://chromium.org
```

then install project dependencies

```
npm install
```

and finally run the test

```
npm test
```

The **mochawesome** library will show test results in a html file located in the the following address

```
./mochawesome-report/mochawesome.html
```

## How to debug tests in Visual Studio Code

Go to `Debug` menu and select `Open Configurations`.

Copy the following configuration to `launch.js` file:

```
      {
            "name": "Run mocha",
            "type": "node",
            "request": "launch",
            "program": "${workspaceRoot}/node_modules/mocha/bin/_mocha",
            "stopOnEntry": false,

            "args": ["${file}", "--no-timeouts"],

            "cwd": "${workspaceRoot}",
            "runtimeExecutable": null,
            "env": { "NODE_ENV": "testing"}
        }
```

Save the file

## How to start 

Go to the desired test file pane in editor and press `F5` to start debugging

