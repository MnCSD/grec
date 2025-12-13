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
    title: "ΚΡΑΣΙ ΑΠΟ ΒΑΡΕΛΙ",
    items: [
      // ΛΕΥΚΟ ΚΡΑΣΙ
      {
        name: "Μοσχάτο Αλεξανδρείας 150 ml / 250 ml / 500 ml",
        description: "Συνεταιρισμός Λήμνου",
        price: "2.00 / 2.50 / 4.50 €",
      },
      {
        name: "Sauvignon Blanc 150 ml / 250 ml / 500 ml",
        description: "Οινοποιείο Νέο Μεσσηνιακό",
        price: "2.30 / 3.20 / 5.80 €",
      },

      // ΚΟΚΚΙΝΟ ΚΡΑΣΙ
      {
        name: "Αγιωργίτικο 150 ml / 250 ml / 500 ml",
        price: "2.00 / 2.50 / 4.50 €",
      },
      {
        name: "Αγιωργίτικο Λημνιό 150 ml / 250 ml / 500 ml",
        price: "2.00 / 2.50 / 4.50 €",
      },
      {
        name: "Merlot 150 ml / 250 ml / 500 ml",
        price: "2.50 / 3.40 / 6.00 €",
      },

      // ΡΟΖΕ
      {
        name: "Μοσχάτο Αλεξανδρείας 150 ml / 250 ml / 500 ml",
        price: "2.00 / 2.50 / 4.50 €",
      },
      {
        name: "Μοσχάτο Αμβούργου 150 ml / 250 ml / 500 ml",
        description: "Οινοποιείο Νέο Μεσσηνιακό",
        price: "2.30 / 3.20 / 5.80 €",
      },

      // ΡΕΤΣΙΝΑ
      {
        name: "Βασιλική 500 ml",
        price: "3.80 €",
      },
      {
        name: "Κεχριμπάρι 500 ml",
        price: "4.80 €",
      },
    ],
  },

  {
    title: "ΕΜΦΙΑΛΩΜΕΝΑ ΚΡΑΣΙΑ 750 ml – ΛΕΥΚΟ ΚΡΑΣΙ",
    items: [
      {
        name: "Μαλαγουζιά Alfa Estate",
        price: "21.00 €",
      },
      {
        name: "Σαμαρόπετρα Κτήμα Κυρ-Γιάννη (Sauvignon Blanc – Ροδίτης)",
        price: "20.50 €",
      },
      {
        name: "Μοσχοφίλερο Boutari (Μοσχοφίλερο)",
        price: "19.00 €",
      },
      {
        name: "Κτήμα Γεροβασιλείου (Ασύρτικο – Μαλαγουζιά)",
        price: "22.00 €",
      },
      {
        name: "Kostatanta (Sauvignon Blanc)",
        price: "19.00 €",
      },
    ],
  },

  {
    title: "ΕΜΦΙΑΛΩΜΕΝΑ ΚΡΑΣΙΑ 750 ml – ΡΟΖΕ ΚΡΑΣΙ",
    items: [
      {
        name: "Ζωηφόρος Οινοποιείο Νέο Μεσημβρία (Syrah)",
        price: "15.50 €",
      },
      {
        name: "Ακακίες Κτήμα Κυρ-Γιάννη (Ξινόμαυρο)",
        price: "17.00 €",
      },
      {
        name: "Merlot Κ. Λαζαρίδη (Merlot)",
        price: "23.50 €",
      },
    ],
  },

  {
    title: "ΕΜΦΙΑΛΩΜΕΝΑ ΚΡΑΣΙΑ 750 ml – ΚΟΚΚΙΝΟ ΚΡΑΣΙ",
    items: [
      {
        name: "Alfa Estate (Syrah)",
        price: "22.00 €",
      },
      {
        name: "Αμέθυστος Κ. Λαζαρίδη (Αγιωργίτικο – Cab. Sauv. – Merlot)",
        price: "23.50 €",
      },
      {
        name: "Κτήμα Κυρ-Γιάννη (Ξινόμαυρο)",
        price: "21.00 €",
      },
      {
        name: "Κτήμα Παπαϊωάννου (Αγιωργίτικο)",
        price: "17.00 €",
      },
      {
        name: "Κτήμα Γεροβασιλείου (Λημνιό – Merlot – Syrah)",
        price: "26.00 €",
      },
      {
        name: "Detoros (Cabernet Sauvignon – Merlot)",
        price: "17.00 €",
      },
    ],
  },

  {
    title: "ΤΣΙΠΟΥΡΟ",
    items: [
      {
        name: "2 Ημερών Απόσταγμα 200 ml (με / χωρίς γλυκάνισο)",
        description: "2 ημερών απόσταγμα από την Κρήτη",
        price: "5.00 €",
      },
      {
        name: "Εμφιαλωμένο Τσίπουρο 200 ml – Ιδωνικό (με / χωρίς γλυκάνισο)",
        price: "7.00 €",
      },
      {
        name: "Αποστολάκης (με / χωρίς γλυκάνισο)",
        price: "7.00 €",
      },
      {
        name: "Τσιλιλή (με / χωρίς γλυκάνισο)",
        price: "7.00 €",
      },
      {
        name: "Μπαμπατζίμ (με / χωρίς γλυκάνισο)",
        price: "7.00 €",
      },
      {
        name: "Ποτήρι τσίπουρο 50 ml",
        price: "2.00 €",
      },
    ],
  },

  {
    title: "ΟΥΖΟ 200 ml",
    items: [
      { name: "Βαρβαγιάννη Green", price: "6.50 €" },
      { name: "Πλωμάρι", price: "6.50 €" },
    ],
  },

  {
    title: "ΜΠΥΡΕΣ – ΒΑΡΕΛΙΣΙΕΣ",
    items: [
      { name: "Mythos 300 ml", price: "2.20 €" },
      { name: "Mythos 500 ml", price: "3.70 €" },
    ],
  },

  {
    title: "ΜΠΥΡΕΣ – ΕΜΦΙΑΛΩΜΕΝΕΣ 500 ml",
    items: [
      { name: "Kaiser", price: "3.60 €" },
      { name: "Mythos", price: "3.20 €" },
      { name: "Fix", price: "3.20 €" },
      { name: "Vergina Lager", price: "3.00 €" },
      { name: "Vergina Weiss", price: "3.20 €" },
      { name: "Carlsberg", price: "3.50 €" },
      { name: "Fix χωρίς αλκοόλ", price: "3.20 €" },
    ],
  },

  {
    title: "ΑΝΑΨΥΚΤΙΚΑ – ΕΜΦΙΑΛΩΜΕΝΟ ΝΕΡΟ",
    items: [
      { name: "ΗΒΗ πορτοκαλάδα", price: "1.70 €" },
      { name: "ΗΒΗ λεμονάδα", price: "1.70 €" },
      { name: "Pepsi Cola", price: "1.70 €" },
      { name: "Pepsi Cola max", price: "1.70 €" },
      { name: "ΗΒΗ τόνικ", price: "1.70 €" },
      { name: "Σουρωτή ανθρακούχο νερό 1 λτ", price: "3.00 €" },
      { name: "Ζαγόρι εμφιαλωμένο νερό 1 λτ", price: "1.20 €" },
    ],
  },

  {
    title: "ΚΑΦΕΣ",
    items: [
      { name: "Espresso", price: "2.00 €" },
      { name: "Espresso διπλό", price: "2.50 €" },
    ],
  },

  {
    title: "ΑΛΚΟΟΛΟΥΧΑ ΠΟΤΑ",
    items: [
      { name: "Απλό ποτό", price: "5.00 €" },
      { name: "Σπέσιαλ ποτό", price: "7.00 €" },
    ],
  },
];
