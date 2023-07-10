export class BrowserActions {
    #page

    /**
     * 
     * @param {import('@playwright/test').Page} page 
     */
    constructor(page) {
        this.#page = page
    }

    async getDefaultTab() {
        let tabs = this.#page.context().pages()
        return tabs[0]
    }

    async getNewTab() {
        let tabs = this.#page.context().pages()
        return tabs[tabs.length - 1]
    }

    async getTabByIndex(idx){
        let tabs = this.#page.context().pages()
        if(idx > (tabs.length - 1) || idx < 0){
            return null
        } else {
            return tabs[idx]
        }
    }

    async createNewTab(url){
        const newPage = await this.#page.context().newPage()
        await newPage.goto(url)
    }
}