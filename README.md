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