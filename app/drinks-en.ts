export interface MenuItem {
  name: string;
  description?: string;
  price: string;
}

export interface MenuCategory {
  title: string;
  items: MenuItem[];
}

export const drinksMenu: MenuCategory[] = [
  {
    title: "WINE FROM BARREL",
    items: [
      // WHITE WINE
      {
        name: "Muscat of Alexandria 150 ml / 250 ml / 500 ml",
        description: "Cooperative of Limnos island",
        price: "2.00 / 2.50 / 4.50 €",
      },
      {
        name: "Sauvignon Blanc 150 ml / 250 ml / 500 ml",
        description: "Neo Messiniako winery",
        price: "2.30 / 3.20 / 5.80 €",
      },

      // RED WINE
      {
        name: "Agiorgitiko 150 ml / 250 ml / 500 ml",
        price: "2.00 / 2.50 / 4.50 €",
      },
      {
        name: "Agiorgitiko Limnio 150 ml / 250 ml / 500 ml",
        price: "2.00 / 2.50 / 4.50 €",
      },
      {
        name: "Merlot 150 ml / 250 ml / 500 ml",
        price: "2.50 / 3.40 / 6.00 €",
      },

      // ROSE
      {
        name: "Muscat of Alexandria 150 ml / 250 ml / 500 ml",
        price: "2.00 / 2.50 / 4.50 €",
      },
      {
        name: "Muscat of Hamburg 150 ml / 250 ml / 500 ml",
        description: "Neo Messiniako winery",
        price: "2.30 / 3.20 / 5.80 €",
      },

      // RETSINA
      {
        name: "Vasiliki 500 ml",
        price: "3.80 €",
      },
      {
        name: "Kechribari 500 ml",
        price: "4.80 €",
      },
    ],
  },

  {
    title: "BOTTLED WINES 750 ml – WHITE WINE",
    items: [
      {
        name: "Malagousia Alfa Estate",
        price: "21.00 €",
      },
      {
        name: "Samaropetra Kir-Yianni Estate (Sauvignon Blanc – Roditis)",
        price: "20.50 €",
      },
      {
        name: "Moschofilero Boutari (Moschofilero)",
        price: "19.00 €",
      },
      {
        name: "Ktima (Estate) Gerovassiliou (Assyrtiko – Malagousia)",
        price: "22.00 €",
      },
      {
        name: "Kostatanta (Sauvignon Blanc)",
        price: "19.00 €",
      },
    ],
  },

  {
    title: "BOTTLED WINES 750 ml – ROSE WINE",
    items: [
      {
        name: "Zoeferos Neo Messimvria winery (Syrah)",
        price: "15.50 €",
      },
      {
        name: "Akakies Kir-Yianni Estate (Xinomavro)",
        price: "17.00 €",
      },
      {
        name: "Merlot K.-Lazaridis (Merlot)",
        price: "23.50 €",
      },
    ],
  },

  {
    title: "BOTTLED WINES 750 ml – RED WINE",
    items: [
      {
        name: "Alfa Estate (Syrah)",
        price: "22.00 €",
      },
      {
        name: "Amethystos K. Lazaridis (Agiorgitiko – Cab. Sauv. – Merlot)",
        price: "23.50 €",
      },
      {
        name: "Ktima (Estate) Kir-Yianni (Xinomavro)",
        price: "21.00 €",
      },
      {
        name: "Estate Papaioannou (Agiorgitiko)",
        price: "17.00 €",
      },
      {
        name: "Ktima (Estate) Gerovassiliou (Limnio – Merlot – Syrah)",
        price: "26.00 €",
      },
      {
        name: "Detoros (Cabernet Sauvignon – Merlot)",
        price: "17.00 €",
      },
    ],
  },

  {
    title: "TSIPOURO",
    items: [
      {
        name: "2 Days Distilled 200 ml (with / without anise)",
        description: "2 days distilled from Crete",
        price: "5.00 €",
      },
      {
        name: "Bottled Tsipouro 200 ml – Idoniko (with / without anise)",
        price: "7.00 €",
      },
      {
        name: "Apostolakis (with / without anise)",
        price: "7.00 €",
      },
      {
        name: "Tsilili (with / without anise)",
        price: "7.00 €",
      },
      {
        name: "Babatzim (with / without anise)",
        price: "7.00 €",
      },
      {
        name: "Glass of tsipouro 50 ml",
        price: "2.00 €",
      },
    ],
  },

  {
    title: "OUZO 200 ml",
    items: [
      { name: "Varvayanni Green", price: "6.50 €" },
      { name: "Plomari", price: "6.50 €" },
    ],
  },

  {
    title: "BEERS – DRAFT",
    items: [
      { name: "Mythos 300 ml", price: "2.20 €" },
      { name: "Mythos 500 ml", price: "3.70 €" },
    ],
  },

  {
    title: "BEERS – BOTTLED 500 ml",
    items: [
      { name: "Kaiser", price: "3.60 €" },
      { name: "Mythos", price: "3.20 €" },
      { name: "Fix", price: "3.20 €" },
      { name: "Vergina Lager", price: "3.00 €" },
      { name: "Vergina Weiss", price: "3.20 €" },
      { name: "Carlsberg", price: "3.50 €" },
      { name: "Fix alcohol-free", price: "3.20 €" },
    ],
  },

  {
    title: "SOFT DRINKS – BOTTLED WATER",
    items: [
      { name: "IVI orangeade", price: "1.70 €" },
      { name: "IVI lemonade", price: "1.70 €" },
      { name: "Pepsi Cola", price: "1.70 €" },
      { name: "Pepsi Cola max", price: "1.70 €" },
      { name: "Ivi tonic", price: "1.70 €" },
      { name: "Souroti carbonated spring water 1 ltr", price: "3.00 €" },
      { name: "Zagori bottled water 1 ltr", price: "1.20 €" },
    ],
  },

  {
    title: "COFFEE",
    items: [
      { name: "Espresso", price: "2.00 €" },
      { name: "Espresso double", price: "2.50 €" },
    ],
  },

  {
    title: "ALCOHOLIC DRINKS",
    items: [
      { name: "Simple drink", price: "5.00 €" },
      { name: "Special drink", price: "7.00 €" },
    ],
  },
];
