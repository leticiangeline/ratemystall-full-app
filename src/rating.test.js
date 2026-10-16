import { expect, test } from "vitest";
import { countRatings } from "./rating.js";

test("countRatings counts the ratings", () => {
  expect(countRatings([5, 4, 5])).toBe(3);
});
