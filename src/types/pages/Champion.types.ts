import { Spell } from "../shared/riot.api.types";

export type Params = {
  id: string;
};

export type TipData = {
  title: string;
  contents: string[];
};

export type TitleContainerProps = {
  title: string;
  name: string;
  lore: string;
};

export type TipSectionProps = {
  list: TipData;
};

export type SkillSectionProps = { name: string; spells: Spell[] };
