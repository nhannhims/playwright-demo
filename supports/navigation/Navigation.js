import { LONG_TIMEOUT } from '../utils/Constants'

export class Navigation {
    #page

    /**
     * 
     * @param {import('@playwright/test').Page} page 
     */
    constructor(page){
        this.#page = page
    }

    async visit(url){
        await this.#page.goto(url, {timeout: LONG_TIMEOUT})
        await this.#page.waitForLoadState()
    }

    async to(url) {
        await this.#page.goto(url, { timeout: LONG_TIMEOUT, storageState: 'persisted'})
        await this.#page.waitForLoadState()
    }

    async toBack() {
        await this.#page.goBack()
        await this.#page.waitForLoadState()
    }

    async toNext() {
        await this.#page.goForward()
        await this.#page.waitForLoadState()
    }

    async toRefresh() {
        await this.#page.reload()
    }
}