# The Complete Guide to Advanced React Component Patterns

## Table of Contents

- [The Complete Guide to Advanced React Component Patterns](#the-complete-guide-to-advanced-react-component-patterns)
  - [Table of Contents](#table-of-contents)
  - [**Section 1: Welcome**](#section-1-welcome)
  - [**Section 2: Installing and Exploring Node.js**](#section-2-installing-and-exploring-nodejs)
    - [Importing Node.js Core Modules](#importing-nodejs-core-modules)
    - [Importing Your Own Files](#importing-your-own-files)
    - [Importing npm Modules](#importing-npm-modules)
    - [Printing in Color](#printing-in-color)
  - [**Section 3: Node.js Module System (Notes App)**](#section-3-nodejs-module-system-notes-app)
  - [**Section 4: File System and Command Line Args (Notes App)**](#section-4-file-system-and-command-line-args-notes-app)
  - [**Section 5: Debugging Node.js (Notes Apps)**](#section-5-debugging-nodejs-notes-apps)
  - [**Section 6: Asynchronous Node.js (Weather App)**](#section-6-asynchronous-nodejs-weather-app)
  - [**Section 7: Web Servers (Weather App)**](#section-7-web-servers-weather-app)
  - [**Section 8: Accessing API from Browser (Weather App)**](#section-8-accessing-api-from-browser-weather-app)
  - [**Section 9: Application Deployment (Weather App)**](#section-9-application-deployment-weather-app)
  - [**Section 10: MongoDB and Promises (Task App)**](#section-10-mongodb-and-promises-task-app)
  - [**Section 11: REST APIs and Mongoose (Task App)**](#section-11-rest-apis-and-mongoose-task-app)
  - [**Section 12: API Authentication and Security (Task App)**](#section-12-api-authentication-and-security-task-app)
  - [**Section 13: Sorting, Pagination, and Filtering (Task App)**](#section-13-sorting-pagination-and-filtering-task-app)
  - [**Section 14: File Uploads (Task App)**](#section-14-file-uploads-task-app)
  - [**Section 15: Sending Emails (Task App)**](#section-15-sending-emails-task-app)
  - [**Section 16: Testing Node.js (Task App)**](#section-16-testing-nodejs-task-app)
  - [**Section 17: Real-Time Web Applications with Socket.io (Chat App)**](#section-17-real-time-web-applications-with-socketio-chat-app)
  - [**Section 18: Wrapping Up**](#section-18-wrapping-up)

## **Section 1: Welcome**

- [Complete NodeJS](complete-node-js.pdf)
- [Source Code](https://github.com/andrewjmead/node-course-v3-code)

**[⬆ back to top](#table-of-contents)**

## **Section 2: Installing and Exploring Node.js**

### Importing Node.js Core Modules

```javascript
const fs = require('fs')

fs.writeFileSync('notes.txt', 'My name is Chester.')
fs.appendFileSync('notes.txt', ' I live in Singapore.')
```

**[⬆ back to top](#table-of-contents)**

### Importing Your Own Files

[Introduction to CommonJS](https://flaviocopes.com/commonjs/)

```javascript
const getNotes = () => 'Your notes...'

module.exports = getNotes 
```

```javascript
const getNotes = require('./notes.js')
const msg = getNotes()
```

**[⬆ back to top](#table-of-contents)**

### Importing npm Modules

```console
npm init -y
```

```javascript
const validator = require('validator')
console.log(validator.isURL('https://mead.io/')) 
```

**[⬆ back to top](#table-of-contents)**

### Printing in Color

```javascript
const chalk = require('chalk')
const greenMsg = chalk.green.inverse.bold('Success!')
```

**[⬆ back to top](#table-of-contents)**

## **Section 3: Node.js Module System (Notes App)**

**[⬆ back to top](#table-of-contents)**

## **Section 4: File System and Command Line Args (Notes App)**

**[⬆ back to top](#table-of-contents)**

## **Section 5: Debugging Node.js (Notes Apps)**

**[⬆ back to top](#table-of-contents)**

## **Section 6: Asynchronous Node.js (Weather App)**

**[⬆ back to top](#table-of-contents)**

## **Section 7: Web Servers (Weather App)**

**[⬆ back to top](#table-of-contents)**

## **Section 8: Accessing API from Browser (Weather App)**

**[⬆ back to top](#table-of-contents)**

## **Section 9: Application Deployment (Weather App)**

**[⬆ back to top](#table-of-contents)**

## **Section 10: MongoDB and Promises (Task App)**

**[⬆ back to top](#table-of-contents)**

## **Section 11: REST APIs and Mongoose (Task App)**

**[⬆ back to top](#table-of-contents)**

## **Section 12: API Authentication and Security (Task App)**

**[⬆ back to top](#table-of-contents)**

## **Section 13: Sorting, Pagination, and Filtering (Task App)**

**[⬆ back to top](#table-of-contents)**

## **Section 14: File Uploads (Task App)**

**[⬆ back to top](#table-of-contents)**

## **Section 15: Sending Emails (Task App)**

**[⬆ back to top](#table-of-contents)**

## **Section 16: Testing Node.js (Task App)**

**[⬆ back to top](#table-of-contents)**

## **Section 17: Real-Time Web Applications with Socket.io (Chat App)**

**[⬆ back to top](#table-of-contents)**

## **Section 18: Wrapping Up**

**[⬆ back to top](#table-of-contents)**
