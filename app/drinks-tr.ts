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
    title: "FICI ŞARAP",
    items: [
      // BEYAZ ŞARAP
      {
        name: "İskenderiye Misketi 150 ml / 250 ml / 500 ml",
        description: "Limnos Adası Kooperatifi",
        price: "2.00 / 2.50 / 4.50 €",
      },
      {
        name: "Sauvignon Blanc 150 ml / 250 ml / 500 ml",
        description: "Neo Messiniako şaraphanesi",
        price: "2.30 / 3.20 / 5.80 €",
      },

      // KIRMIZI ŞARAP
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

      // ROZE
      {
        name: "İskenderiye Misketi 150 ml / 250 ml / 500 ml",
        price: "2.00 / 2.50 / 4.50 €",
      },
      {
        name: "Hamburg Misketi 150 ml / 250 ml / 500 ml",
        description: "Neo Messiniako şaraphanesi",
        price: "2.30 / 3.20 / 5.80 €",
      },

      // RETSİNA
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
    title: "ŞİŞE ŞARAPLAR 750 ml – BEYAZ ŞARAP",
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
    title: "ŞİŞE ŞARAPLAR 750 ml – ROZE ŞARAP",
    items: [
      {
        name: "Zoeferos Neo Messimvria şaraphanesi (Syrah)",
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
    title: "ŞİŞE ŞARAPLAR 750 ml – KIRMIZI ŞARAP",
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
    title: "TSİPURO",
    items: [
      {
        name: "2 Gün Damıtılmış 200 ml (anasonlu / anasonsuz)",
        description: "Girit'ten 2 gün damıtılmış",
        price: "5.00 €",
      },
      {
        name: "Şişe Tsipuro 200 ml – Idoniko (anasonlu / anasonsuz)",
        price: "7.00 €",
      },
      {
        name: "Apostolakis (anasonlu / anasonsuz)",
        price: "7.00 €",
      },
      {
        name: "Tsilili (anasonlu / anasonsuz)",
        price: "7.00 €",
      },
      {
        name: "Babatzim (anasonlu / anasonsuz)",
        price: "7.00 €",
      },
      {
        name: "Kadeh tsipuro 50 ml",
        price: "2.00 €",
      },
    ],
  },

  {
    title: "UZO 200 ml",
    items: [
      { name: "Varvayanni Green", price: "6.50 €" },
      { name: "Plomari", price: "6.50 €" },
    ],
  },

  {
    title: "BİRALAR – FICI",
    items: [
      { name: "Mythos 300 ml", price: "2.20 €" },
      { name: "Mythos 500 ml", price: "3.70 €" },
    ],
  },

  {
    title: "BİRALAR – ŞİŞE 500 ml",
    items: [
      { name: "Kaiser", price: "3.60 €" },
      { name: "Mythos", price: "3.20 €" },
      { name: "Fix", price: "3.20 €" },
      { name: "Vergina Lager", price: "3.00 €" },
      { name: "Vergina Weiss", price: "3.20 €" },
      { name: "Carlsberg", price: "3.50 €" },
      { name: "Fix alkolsüz", price: "3.20 €" },
    ],
  },

  {
    title: "MEŞRUBATLAR – ŞİŞE SU",
    items: [
      { name: "IVI portakallı gazoz", price: "1.70 €" },
      { name: "IVI limonata", price: "1.70 €" },
      { name: "Pepsi Cola", price: "1.70 €" },
      { name: "Pepsi Cola max", price: "1.70 €" },
      { name: "Ivi tonik", price: "1.70 €" },
      { name: "Souroti maden suyu 1 lt", price: "3.00 €" },
      { name: "Zagori şişe su 1 lt", price: "1.20 €" },
    ],
  },

  {
    title: "KAHVE",
    items: [
      { name: "Espresso", price: "2.00 €" },
      { name: "Espresso double", price: "2.50 €" },
    ],
  },

  {
    title: "ALKOLLÜ İÇECEKLER",
    items: [
      { name: "Basit içki", price: "5.00 €" },
      { name: "Özel içki", price: "7.00 €" },
    ],
  },
];
