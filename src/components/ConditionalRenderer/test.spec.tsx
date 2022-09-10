/**
 * @jest-environment jsdom
 */

import { describe, expect, it } from "@jest/globals";
import { render } from "@testing-library/react";

import { ConditionalRender } from ".";

describe("[Component] - Conditional Renderer", () => {
  const headingText = "Conditional Rendered H1";

  it("Should display nothing when prop is false", () => {
    const { queryByText } = render(
      <ConditionalRender condition={false}>
        <h1>{headingText}</h1>
      </ConditionalRender>
    );

    const component = queryByText(headingText);

    expect(component).toBe(null);
  });

  it("Should display nothing when prop is false", () => {
    const { queryByText } = render(
      <ConditionalRender condition={true}>
        <h1>{headingText}</h1>
      </ConditionalRender>
    );

    const component = !!queryByText(headingText);

    expect(component).toBe(true);
  });
});
