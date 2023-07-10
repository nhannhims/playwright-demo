import { test} from '@playwright/test'
import { Home_Page } from '../pages/Home_Page';
import { Search_Page } from '../pages/Search_Page';
import { Product_Detail_Page } from '../pages/Product_Detail_Page';
import { FLYMEE_COLOR_MENU, FLYMEE_FILTER_OPTION, FLYMEE_MAIN_MENU } from '../supports/utils/Enum/Common'
import { Favourite_Page } from '../pages/Favourite_Page';
import { Filter_Page } from '../pages/Filter_Page';
import { Navigation } from '../supports/navigation/Navigation';
import { BrowserActions } from '../supports/browsers/BrowserActions';

test.beforeEach(async ({page}) => {
  const navigation = new Navigation(page)
  await navigation.visit('https://flymee.jp')
})

test.describe('FlyMee Function', () => {
  test('TC0001: Verify Product is display on Search Page', async ({ page }) => {
    const HomePage = new Home_Page(page)
    const SearchPage = new Search_Page(page)
    await HomePage.excuteSearchProduct('エレファントソファー シェーズロング')
    await SearchPage.verifyProductIsDisPlay('エレファントソファー シェーズロング')
  });
  
  test('TC0002: Verify Product is display in favourite page', async ({ page }) => {
    const HomePage = new Home_Page(page)
    const SearchPage = new Search_Page(page)
    const ProductDetailPage = new Product_Detail_Page(page)
    const FavouritePage = new Favourite_Page(page)
    await HomePage.excuteSearchProduct('エレファントソファー シェーズロング')
    await SearchPage.verifyProductIsDisPlay('エレファントソファー シェーズロング')
    await SearchPage.clickGoToProductDetail('エレファントソファー シェーズロング')
    await ProductDetailPage.clickFavouriteIcon()
    await HomePage.selectMenuOnNavBar(FLYMEE_MAIN_MENU.FAVOURITE)
    await FavouritePage.verifyProductIsDispay('エレファントソファー シェーズロング')
  });
  
  test('TC0003: Verify Archive Color Page', async ({ page }) => {
    const HomePage = new Home_Page(page)
    const FilterPage = new Filter_Page(page)
    await HomePage.selectChildMenuOnNavBar(FLYMEE_MAIN_MENU.COLOUR, FLYMEE_COLOR_MENU.YELLOW)
    await FilterPage.verifyFilterSearchTitle(FLYMEE_FILTER_OPTION.YELLOW)
    await FilterPage.verifyFitlerNameDisplay(FLYMEE_FILTER_OPTION.YELLOW)
  });

  test('TC0004: Verify New Tab', async ({ page }) => {
    const HomePage = new Home_Page(page)
    const SearchPage = new Search_Page(page)
    await HomePage.excuteSearchProduct('エレファントソファー シェーズロング')
    await SearchPage.verifyProductIsDisPlay('エレファントソファー シェーズロング')
    await SearchPage.clickGoToProductDetail('エレファントソファー シェーズロング')
    const BrowserAction = new BrowserActions(page)
  });
})