import { z } from "zod";

export type GrantData = z.infer<typeof GrantDataSchema>;
export type TranslatedData = z.infer<typeof TranslatedDataSchema>;
export type Contribution = z.infer<typeof ContributionSchema>;
export type AggregatedGrantContributions = z.infer<
  typeof AggregatedGrantContributionsSchema
>;

export const ContributionSchema = z.record(z.string(), z.number());

export const GrantDataSchema = z.object({
  id: z.string(),
  contributions: z.array(ContributionSchema),
});

export const GrantDataArraySchema = z.array(GrantDataSchema);

export const TranslatedDataSchema = z.tuple([
  z.string(),
  z.string(),
  z.number(),
]);

export const TranslatedDataArraySchema = z.array(TranslatedDataSchema);

export const AggregatedGrantContributionsSchema = z.record(
  z.string(),
  z.record(z.string(), z.number())
);
