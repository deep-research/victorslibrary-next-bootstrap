/**
* @jest-environment jsdom
*/

import RandomButton from "$lib/RandomButton.svelte";
import { render, fireEvent } from "@testing-library/svelte";

test("Random Number on click", async () => {
  const randomButton = render(RandomButton);
  const button = randomButton.getByRole("button");
  await fireEvent.click(button);

  const randomNumber = randomButton.getByTestId("random-value");
  expect(randomNumber).toBeInTheDocument();
  expect(randomNumber).not.toBeVisible();
  expect(randomNumber).toHaveTextContent(/(.|\s)*\S(.|\s)*/);
});
