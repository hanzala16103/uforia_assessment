import React from "react";
import { render, screen } from "@testing-library/react";
import Content from "../Content";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const renderWithTheme = (ui) => {
  return render(<ThemeProvider theme={createTheme()}>{ui}</ThemeProvider>);
};

describe("Content Component", () => {
  test("renders 'Liked Form Submissions' title", () => {
    renderWithTheme(<Content submissions={[]} />);
    expect(screen.getByText(/liked form submissions/i)).toBeInTheDocument();
  });

  test("displays 'No liked submissions yet.' when there are no submissions", () => {
    renderWithTheme(<Content submissions={[]} />);
    expect(screen.getByText(/no liked submissions yet/i)).toBeInTheDocument();
  });

  test("displays a list of liked submissions when provided", () => {
    const mockSubmissions = [
      {
        id: "1",
        data: { firstName: "John", lastName: "Doe", email: "john@example.com" },
      },
      {
        id: "2",
        data: {
          firstName: "Jane",
          lastName: "Smith",
          email: "jane@example.com",
        },
      },
    ];

    renderWithTheme(<Content submissions={mockSubmissions} />);

    expect(screen.getByText("John Doe")).toBeInTheDocument();
    expect(screen.getByText("jane@example.com")).toBeInTheDocument();
  });

  test("renders a favorite icon button for each submission", () => {
    const mockSubmissions = [
      {
        id: "1",
        data: { firstName: "John", lastName: "Doe", email: "john@example.com" },
      },
    ];

    renderWithTheme(<Content submissions={mockSubmissions} />);

    const favoriteButtons = screen.getAllByRole("button");
    expect(favoriteButtons.length).toBe(mockSubmissions.length);
  });
});
