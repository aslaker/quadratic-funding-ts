import { TranslatedData, AggregatedGrantContributions } from "../types";

type Args = {
  grant_contributions: TranslatedData[];
};

export function aggregateContributions({
  grant_contributions,
}: Args): AggregatedGrantContributions {
  return grant_contributions.reduce<AggregatedGrantContributions>(
    (finalObject, currentContribution) => {
      const [grant, userId, contribution] = currentContribution;
      if (!Object.hasOwn(currentContribution, grant)) {
        finalObject[grant] = { [userId]: 0 };
      }
      finalObject[grant][userId] = finalObject[grant][userId] + contribution;
      return finalObject;
    },
    {}
  );
}
