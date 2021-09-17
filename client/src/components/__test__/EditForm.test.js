import { render, screen, cleanup } from "@testing-library/react";
import EditForm from '../EditForm/EditForm';

test("test", () => {
    expect(true).toBe(true);
})

test("should render EditForm component", () => {
    render(<EditForm />);
    const editFormScreenElement = screen.getByTestId('editFormScreen-1');
    expect(editFormScreenElement).toBeInTheDocument();
})