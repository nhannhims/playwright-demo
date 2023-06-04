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

    async excuteSearchProduct(product_name){
        await this.#elements.inputSearch().get().fill(product_name)
        await this.#elements.inputSearch().get().press('Enter')
        await this.#page.waitForLoadState()
    }

    async selectMenuOnNavBar(menu_name){
        await this.#elements.txtMainMenuName().setDynamicLocator(menu_name).get().click()
        await this.#page.waitForLoadState()
    }

    async selectChildMenuOnNavBar(main_nenu, child_menu){
        await this.#elements.txtMainMenuName().setDynamicLocator(main_nenu).get().hover()
        await this.#elements.txtChildMenuName().setDynamicLocator(child_menu).get().hover()
        await this.#elements.txtChildMenuName().setDynamicLocator(child_menu).get().click()
        await this.#page.waitForLoadState()
    }
}