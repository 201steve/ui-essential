import { render, screen } from "@testing-library/react";
import Accordion from "./Accordion.tsx";

describe("Accordion", () => {
  it("섹션 제목들을 렌더한다", () => {
    render(
      <Accordion
        sections={[
          {
            value: "html",
            title: "HTML",
            contents:
              "'The HyperText Markup Language or HTML is the standard markup language for documents designed to be displayed in a web browser.',",
          },
          {
            value: "css",
            title: "CSS",
            contents:
              "Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML or XML.",
          },
          {
            value: "javascript",
            title: "JavaScript",
            contents:
              "JavaScript, often abbreviated as JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS.",
          },
        ]}
      />,
    );
    expect(screen.getByRole("button", { name: /html/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /css/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /javascript/i })).toBeInTheDocument();
  });
});
