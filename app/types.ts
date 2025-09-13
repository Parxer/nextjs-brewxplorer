import { FC, ReactNode } from "react";

export type FCWithChildren<T> = FC<T & { children?: ReactNode }>;

export interface Beer {
  id: number;
  name: string;
  tagline: string;
  first_brewed: string;
  description: string;
  image: string;
  abv: number;
  ibu: number;
  target_fg: number;
  target_og: number;
  ebc: number;
  srm: number;
  ph: number;
  attenuation_level: number;
  volume: {
    value: number;
    unit: string;
  };
  boil_volume: {
    value: number;
    unit: string;
  };
  // method: {
  //   mash_temp: [
  //     {
  //       temp: {
  //         value: 65;
  //         unit: "celsius";
  //       };
  //       duration: 65;
  //     },
  //   ];
  //   fermentation: {
  //     temp: {
  //       value: 11;
  //       unit: "celsius";
  //     };
  //   };
  //   twist: "Amyloglucosidase: 1g";
  // };
  // ingredients: {
  //   malt: [
  //     {
  //       name: "Pilsner Malt";
  //       amount: {
  //         value: 3.36;
  //         unit: "kilograms";
  //       };
  //     },
  //     {
  //       name: "Carapils Malt";
  //       amount: {
  //         value: 0.24;
  //         unit: "kilograms";
  //       };
  //     },
  //   ];
  //   hops: [
  //     {
  //       name: "Hallertauer Taurus";
  //       amount: {
  //         value: 8;
  //         unit: "grams";
  //       };
  //       add: "60";
  //       attribute: "Bitter";
  //     },
  //     {
  //       name: "Select Spalter";
  //       amount: {
  //         value: 15;
  //         unit: "grams";
  //       };
  //       add: "20";
  //       attribute: "Flavour";
  //     },
  //     {
  //       name: "Select Spalter";
  //       amount: {
  //         value: 15;
  //         unit: "grams";
  //       };
  //       add: "10";
  //       attribute: "Aroma";
  //     },
  //     {
  //       name: "Saphir";
  //       amount: {
  //         value: 30;
  //         unit: "grams";
  //       };
  //       add: "0";
  //       attribute: "Aroma";
  //     },
  //     {
  //       name: "Saphir";
  //       amount: {
  //         value: 30;
  //         unit: "grams";
  //       };
  //       add: "Dry Hop";
  //       attribute: "Aroma";
  //     },
  //   ];
  //   yeast: "W34/70";
  // };
  food_pairing: string[];
  brewers_tips?: string;
  contributed_by?: string;
}
