import { Control } from '../supports/core/Control'
import { expect } from '@playwright/test'

export class Search_Page {
    #page

    /**
     * 
     * @param {import('@playwright/test').Page} page 
     */
    constructor(page){
        this.#page = page
    }

    #elements = {
        txtProductName: () => new Control(this.#page, '//div[@class="search_result_area"]//div[@class="item_name" and contains(text(),"%s")]', null),
    }

    async verifyProductIsDisPlay(productName){
        await expect(this.#elements.txtProductName().setDynamicLocator(productName).get()).toBeVisible()
    }

    async clickGoToProductDetail(productName){
        await this.#elements.txtProductName().setDynamicLocator(productName).get().click()
        await this.#page.waitForLoadState()
    }
}