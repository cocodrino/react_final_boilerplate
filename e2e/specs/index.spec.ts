import { load, close, getTitle, page } from '../pageObjects';
import {expect} from '@playwright/test';
import it from "@playwright/test"

//DOCS https://github.com/hoverinc/playwright-testing-library
// https://github.com/playwright-community/expect-playwright



describe("React App", () => {
    beforeAll(async () => {
        await load();
    });

    afterAll(async () => {
        await close();
    });

    it("should be titled 'React App'", async () => {
        expect(await getTitle()).toBe('React App');
    });

    it("must match snapshot", async ({ page }) => {
        //test.todo("snapshot works")
        expect(await page.screenshot()).toMatchSnapshot('home.png');
    });

    it("must show message about page", async()=>{
        //const $document = await getDocument(page)
        //const message = await getByText($document,/Este es el home/i)
        //console.info(message)
        //expect(message).toBeInTheDocument()

        await expect(page).toMatchText(/Este es el home/)
    })

    it("when click in button 'GO TO SAMPLE PAGE' go to /sample url",async()=>{
        await page.click('text=GO TO SAMPLE PAGE');
        expect(page.url()).toBe('http://localhost:3000/sample');

    })

    it("when click in the increment button count must increase",async()=>{
        const oldV = await page.$eval("#count",(el)=>el.textContent)
        await page.click('text=increment');
        const newV = await page.$eval("#count",(el)=>el.textContent)

        if(oldV && newV)
            // eslint-disable-next-line jest/no-conditional-expect
            expect(parseInt(oldV)+1).toEqual(parseInt(newV))
    })

    // EJEMPLO USANDO SELECTORES
/*    it('should display list of blog posts', async () => {
        // Get all blog posts as an array of objects
        const blogPosts = await page.$$eval('css=.post', elems => elems.map(el => {
            return {
                title: el.querySelector('.post-title').textContent.trim(),
                description: el.querySelector('.post-description').textContent.trim(),
                href: el.href,
            }
        }));

        // Check if list length is greater than 0
        expect(blogPosts.length).toBeGreaterThan(0);
    })*/

});