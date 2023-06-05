## Install
### VSCode
```shell
https://code.visualstudio.com/download
```
### Node
```shell
https://nodejs.org/en/download
```
### Folder Structure
```shell
- fixtures
    + download
    + files
        + csv
        + excels
        + images
        + videos
- modals
- pages
- supports
    + browsers
    + core
    + navigation
    + utils
        + Enum
- tests
```

## Install all package dependencies
```shell
npm install
```
## Install Playwright
```shell
npx playwright install
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

## Coding Convention
```shell
1. File name like as [Screen_Name]_Page.js

2. Content of file
export class [Screen_Name]_Page {
    #page

    /**
     * 
     * @param {import('@playwright/test').Page} page 
     */
    constructor(page){
        this.#page = page
    }

    // All control at here
    #elements = {
        
    }

    // Function at here
    async selectMainMenuOnNavBar() {
        // Use element like this.#element.elementName()
        await [execute action]
    }
}

3. Import this file to use: import { [Screen_Name]_Page } from '../pages/[Screen-Name]_Page'

4. Declaration and naming
Element : 
input Tag has prefix ipt (Ex: iptUserName)
button Tag has prefix btn (Ex: btnLogin)
label Tag has prefix lbl (Ex: lblUserName)
another Tag with text has prefix txt (Ex: txtMessage)
icon has prefix icon (Ex: iconFavourite)
dropdown or combobox:
    - Action [Select dropdown or combobox] has prefix drd (Ex: drdCity)
    - Action [Select option] has prefix opt (Ex: optCity)
....

Variable: declaration with snake case (use lowercase letters) (Ex: product_name)

Constant & Enum : declaration with snake case (use uppercase letters) (Ex: WAIT_TIMEOUT)

Function Name: first letter is lowercase and it is action (Ex selectMenuOnNavBar() { })

```

## Script File
```shell
1. Name of file : [System]_[Function]_[...].spec.js
2. Save to folder : /tests/[System]_[Function]_[...].spec.js
3. In the file: import { test} from '@playwright/test'
    - Use test.beforeEach(() => { }) : New test will perform the actions here first
    - Use test.describe('[System] [Function] [...]', () => { }) : All script will be here
    - Use test('[TC001] Verify ...', async({page}) => { }) : Write script at here 
    ...
```
