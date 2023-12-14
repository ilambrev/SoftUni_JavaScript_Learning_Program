import { render, screen, cleanup } from "@testing-library/react";
import React from "react";
import ReactDOM from "react-dom";
import Header from "./Header";

describe('Header Component', () => {

    beforeEach(() => {
        // not recomended - used only for demo (to be possible 2 tests pass at the same time)
        document.body.innerHTML = '';

        // recomended when using testing library
        cleanup();
    });

    test('Has heading without testing library', () => {
        const roortElement = document.createElement('div');
        roortElement.id = 'root';

        document.body.appendChild(roortElement);

        ReactDOM.render(<Header />, roortElement);

        const actualElement = roortElement.querySelector('h1.heading');
        expect(actualElement.textContent).toBe('Unit Testing');
    });

    test('Has heading with testing library', () => {

        render(<Header />);

        const element = screen.getByText('Unit Testing');

        expect(element).toBeInTheDocument();

    });
});