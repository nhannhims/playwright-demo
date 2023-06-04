import { expect } from '@playwright/test'
import { Control } from '../supports/core/Control'

export class Filter_Page {
    #page
    
    /**
     * 
     * @param {import('@playwright/test').Page} page 
     */
    constructor(page){
        this.#page = page
    }

    #elements = {
        txtFilterTitle: () => new Control(this.#page, '//h1[@class="title" and contains(text(),"%s")]', null),
        txtFilterName: () => new Control(this.#page, '//div[@id="search-option-chips"]//div[contains(text(),"絞り込み条件")]/..//ul/li/*[text()="%s"]', null)
    }

    async verifyFilterSearchTitle(filter_title) {
        await expect(this.#elements.txtFilterTitle().setDynamicLocator(filter_title).get()).toBeVisible()
    }

    async verifyFitlerNameDisplay(filter_name) {
        await expect(this.#elements.txtFilterName().setDynamicLocator(filter_name).get()).toBeVisible()
    }
}