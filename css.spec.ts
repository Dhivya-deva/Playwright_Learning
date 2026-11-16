import {test} from "@playwright/test"
test("Learn CSS Selectors",async({page}) => {
    await page.goto("https://leaftaps.com/opentaps/control/main")
    await page.locator('[id="username"]').fill("democsr2")
    await page.locator('[id="password"]').fill("crmsfa")
    await page.locator('[class="decorativeSubmit"]').click()
    await page.waitForTimeout(3000)
})
