import {cleanup, render} from "@testing-library/react";
import React from "react";
import ArabicConverter from "../../components/ArabicConverter";

describe('<ArabicConverter />', () => {
    afterEach(cleanup)
    it('should have an input', function () {
        const {getByLabelText} = render(<ArabicConverter />)
        expect(() => {
            getByLabelText(/roman/i)
        }).not.toThrow();
    });
    it('should show no arabic number by default', function () {
        const {getByText} = render(<ArabicConverter />)
        expect(() => {
            getByText("Arabic: none")
        }).not.toThrow();
    });
})