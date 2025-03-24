import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import ToastNotification from "../ToastNotification";

describe("ToastNotification Component", () => {
  const mockSubmission = {
    data: { firstName: "John", lastName: "Doe" },
  };
  const mockOnClose = jest.fn();
  const mockOnLike = jest.fn();

  test("renders ToastNotification with correct message", () => {
    render(
      <ToastNotification
        submission={mockSubmission}
        open={true}
        onClose={mockOnClose}
        onLike={mockOnLike}
      />
    );

    expect(screen.getByText("John Doe just signed up!")).toBeInTheDocument();
  });

  test("calls onClose when close button is clicked", () => {
    render(
      <ToastNotification
        submission={mockSubmission}
        open={true}
        onClose={mockOnClose}
        onLike={mockOnLike}
      />
    );

    const closeButton = screen.getByRole("button", { name: /close/i });
    fireEvent.click(closeButton);

    expect(mockOnClose).toHaveBeenCalledTimes(1);
  });

  test("calls onLike when like button is clicked", () => {
    render(
      <ToastNotification
        submission={mockSubmission}
        open={true}
        onClose={mockOnClose}
        onLike={mockOnLike}
      />
    );

    const likeButton = screen.getByRole("button", { name: /favorite/i });
    fireEvent.click(likeButton);

    expect(mockOnLike).toHaveBeenCalledTimes(1);
  });

  test("does not render if submission is null", () => {
    render(
      <ToastNotification
        submission={null}
        open={true}
        onClose={mockOnClose}
        onLike={mockOnLike}
      />
    );

    expect(screen.queryByText(/just signed up!/)).not.toBeInTheDocument();
  });
});
