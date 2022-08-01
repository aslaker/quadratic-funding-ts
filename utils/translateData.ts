import {
  GrantData,
  GrantDataArraySchema,
  TranslatedData,
  TranslatedDataArraySchema,
  TranslatedDataSchema,
} from "../types";

type Args = {
  grants_data: GrantData[];
};

export function translateData({ grants_data }: Args): TranslatedData[] {
  const grants: TranslatedData[] = [];
  GrantDataArraySchema.parse(grants_data).forEach((grant) => {
    grant.contributions.forEach((contribution) => {
      const userId = Object.keys(contribution)[0];
      const summedContributions = Object.values(contribution)[0];
      grants.push([grant.id, userId, summedContributions]);
    });
  });
  return TranslatedDataArraySchema.parse(grants);
}
