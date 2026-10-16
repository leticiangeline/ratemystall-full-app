import { expect, test } from "vitest";
import { countRatings, averageRating } from "./rating.js";

test("countRatings counts the ratings", () => {
  expect(countRatings([5, 4, 5])).toBe(3);
});

test("averageRating gives the average", () => {
  expect(averageRating([4, 5, 3])).toBe(4);
});
