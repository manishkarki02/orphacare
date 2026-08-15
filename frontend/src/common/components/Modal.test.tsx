import { fireEvent, render, screen } from "@testing-library/react";
import { afterEach, describe, expect, it, vi } from "vitest";
import Modal from "@/common/components/Modal";

describe("Modal", () => {
  afterEach(() => {
    document.body.style.overflow = "";
  });

  it("exposes dialog semantics and focuses the close button", () => {
    render(
      <Modal isOpen onClose={vi.fn()} title="Donation details">
        <p>Modal content</p>
      </Modal>
    );

    expect(
      screen.getByRole("dialog", { name: "Donation details" })
    ).toHaveAttribute("aria-modal", "true");
    expect(screen.getByRole("button", { name: "Close modal" })).toHaveFocus();
  });

  it("closes when Escape is pressed", () => {
    const onClose = vi.fn();
    render(
      <Modal isOpen onClose={onClose} title="Donation details">
        <p>Modal content</p>
      </Modal>
    );

    fireEvent.keyDown(document, { key: "Escape" });

    expect(onClose).toHaveBeenCalledOnce();
  });

  it("restores the existing body overflow style when unmounted", () => {
    document.body.style.overflow = "scroll";
    const { unmount } = render(
      <Modal isOpen onClose={vi.fn()} title="Donation details">
        <p>Modal content</p>
      </Modal>
    );

    expect(document.body.style.overflow).toBe("hidden");

    unmount();

    expect(document.body.style.overflow).toBe("scroll");
  });
});
