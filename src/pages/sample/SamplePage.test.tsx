import { fireEvent, render, screen } from '@testing-library/react';
import wrapComponent from "../../resources/react_testing/wrapper";
import SamplePage from "./SamplePage";

describe("In the SamplePage",()=>{
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
       expect(screen.getByText(/increment/)).toBeInTheDocument()
    })

    it("when click on the button increase the counter",()=>{
        test.todo("pass increase")
    })
})