import { Control } from '../supports/core/Control'
import { expect } from '@playwright/test'

export class Favourite_Page {
    #page

    /**
     * 
     * @param {import('@playwright/test').Page} page 
     */
    constructor(page){
        this.#page = page
    }

    #elements = {
        txtProductName: () => new Control(this.#page, '//div[@class="item_name" and contains(text(),"%s")]', null),
    }

    async verifyProductIsDispay(product_name){
        await expect(this.#elements.txtProductName().setDynamicLocator(product_name).get()).toBeVisible()
    }
}