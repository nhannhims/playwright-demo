import { Control } from '../supports/core/Control'

export class Product_Detail_Page {
    #page

    /**
     * 
     * @param {import('@playwright/test').Page} page
     */
    constructor(page){
        this.#page = page
    }

    #elements = {
        iconFavourite: () => new Control(this.#page, '//div[@id="js-addFavorite"]', null)
    }

    async clickFavouriteIcon(){
        await this.#elements.iconFavourite().get().click()
    }
}