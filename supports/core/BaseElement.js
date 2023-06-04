export class BaseElement {
    #page
    #xpathOrCssSelector
    #iframe

    /**
     * 
     * @param {import('@playwright/test').Page} page 
     */
    constructor(page, xpathOrCssSelector, iframe){  
        this.#page = page   
        this.#xpathOrCssSelector = xpathOrCssSelector
        this.#iframe = iframe
    }

    get(){
        if(this.#iframe == null) {
            return this.#page.locator(this.#xpathOrCssSelector)
        } else {
            return this.#page.frameLocator(this.#iframe).locator(this.#xpathOrCssSelector)
        }
    }

    setDynamicLocator(...args){
        for (let loop of args) {
            this.#xpathOrCssSelector = this.#xpathOrCssSelector.replace("%s", loop)
        }
        return this;
    }

    getLocator(){
        return this.#xpathOrCssSelector;
    }
}