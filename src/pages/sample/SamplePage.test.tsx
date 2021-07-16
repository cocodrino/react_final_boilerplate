import {fireEvent, render, screen, waitFor} from '@testing-library/react';
import wrapComponent from "../../shared/resources/react_testing/wrapper";
import SamplePage from "./SamplePage";
import {setupServer} from "msw/node";
import {handlers} from "../../mocks/handlers";

const apiServer =    setupServer(...handlers)

describe("In the SamplePage",()=>{
    beforeAll(()=>{
        apiServer.listen()
    })

    afterEach(() => apiServer.resetHandlers());

    afterAll(() => apiServer.close());

    beforeEach(()=>{
        render(wrapComponent(SamplePage))
    })

    it("must show message about page", ()=>{
        expect(screen.getByText(/this is a simple page!/i)).toBeInTheDocument()
    })

    it("have a counter",()=>{
        expect(screen.getByRole(/main/)).toBeInTheDocument()
    })

    it("have a clickable button",()=>{
       expect(screen.getByText(/increment/)).toBeInTheDocument();
    })

    it("show a count value",async()=>{
        let content : string | null | undefined

        await waitFor(()=>{
            // waitFor going to loop and run the callback until expect doesn't cause an exception
            content = document.getElementById("count")?.textContent
            expect(content).not.toBeUndefined()
        },{interval:1000,timeout:10000})



        if (content) {
            // eslint-disable-next-line jest/no-conditional-expect
            expect(typeof parseInt(content)).toBe('number');
        }
    })


    it("when click on the button increase the counter",()=>{
        test.todo("pass increase")
    })
})