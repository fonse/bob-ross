export type color = "alizarin_crimson" | "bright_red" | "cadmium_yellow" | "phthalo_green" | "prussian_blue" | "sap_green" | "titanium_white" |
             "van_dyke_brown" | "burnt_umber" | "indian_yellow" | "phthalo_blue" | "yellow_ochre" | "midnight_black" | "dark_sienna";

export interface Painting {
  index: number;
  title: string;
  season: number;
  episode: number;
  youtubeUrl: string;
  colors: color[];
  contactPaper: boolean;
  gesso: boolean;
}

export const colors: color[] = [
  "titanium_white",
  "phthalo_green",
  "phthalo_blue",
  "prussian_blue",
  "midnight_black",
  "dark_sienna",
  "burnt_umber",
  "van_dyke_brown",
  "alizarin_crimson",
  "sap_green",
  "cadmium_yellow",
  "yellow_ochre",
  "indian_yellow",
  "bright_red",
];