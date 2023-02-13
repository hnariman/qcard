import { render, screen } from "@testing-library/react";
import Card from "./index.jsx";
import Context from "../../context.js";
import { useState } from "react";

const renderWithContext = (component, { value, ...renderOptions }) =>
    render(
        <Context.Provider {...value}>
            {component}
        </Context.Provider>,
        renderOptions
    )

test('loads card', async () => {
    const value = {
        user: [['test'], () => { }]
    }
    renderWithContext(<Card />, { ...value })
    screen.debug()
    const title = screen.getByText(/Result/i);
    expect(title).toBeInTheDocument;
})