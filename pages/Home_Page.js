import { Control } from '../supports/core/Control'

export class Home_Page {
    #page

    /**
     * 
     * @param {import('@playwright/test').Page} page 
     */
    constructor(page){
        this.#page = page
    }

    #elements = {
        inputSearch: () => new Control(this.#page, '//input[@id="js-searchKeywords"]', null),
        txtMainMenuName: () => new Control(this.#page, '//div[@class="header"]//a[text()="%s"]', null),
        txtChildMenuName: () => new Control(this.#page, '//div[@class="header"]//a//*[text()="%s"]', null)
    }

    async navigationTo(url){
        
        await this.#page.goto(url, {timeout: 60000})
        await this.#page.waitForLoadState()
    }

    async excuteSearchProduct(productName){
        await this.#elements.inputSearch().get().fill(productName)
        await this.#elements.inputSearch().get().press('Enter')
        await this.#page.waitForLoadState()
    }

    async selectMenuOnNavBar(menuName){
        await this.#elements.txtMainMenuName().setDynamicLocator(menuName).get().click()
        await this.#page.waitForLoadState()
    }

    async selectChildMenuOnNavBar(mainMenu, childMenu){
        await this.#elements.txtMainMenuName().setDynamicLocator(mainMenu).get().hover()
        await this.#elements.txtChildMenuName().setDynamicLocator(childMenu).get().hover()
        await this.#elements.txtChildMenuName().setDynamicLocator(childMenu).get().click()
        await this.#page.waitForLoadState()
    }
}