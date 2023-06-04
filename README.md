## Install
### VSCode
```shell
https://code.visualstudio.com/download
```
### Node
```shell
https://nodejs.org/en/download
```

## Install all package dependencies
```shell
npm install
```
## Run script with Chrome
```shell
npm run chrome
```
## Run script with Chrome and headed
```shell
npm run chrome-headed
```
## Run script with all browser
```shell
npm run all
```
## Run script with all browser and headed
```shell
npm run all-headed
```

## Setting User And Environment
### Step 1: Create config file
```shell
File name [project-name]-config.js
```

### Step 2: Content of config file
```shell
export const config = {
    env: {
        staging: {
            url: "",
            username: "",
            password: ""
        },
        production: {
            url: "",
            username: "",
            password: ""
        }
    }
}
```

### Step 3: import config to use
```shell
import { config } from '../[project-name]-config
```