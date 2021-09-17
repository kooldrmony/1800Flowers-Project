import { render, screen, cleanup } from "@testing-library/react";
import Home from '../Home/Home';

test("test", () => {
    expect(true).toBe(true);
})

test("should render Home component", () => {
    render(<Home />);
    const homeScreenElement = screen.getByTestId('homeScreen-1');
    expect(homeScreenElement).toBeInTheDocument();
})