import { translateData } from "./translateData";
import {
  sampleContributions,
  sampleTranslatedValues,
} from "../sampleContributions";

test("processes incoming data", () => {
  const result = translateData({ grants_data: sampleContributions });
  expect(result).toEqual(sampleTranslatedValues);
});
