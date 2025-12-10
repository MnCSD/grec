export interface MenuItem {
  name: string;
  description?: string;
  price: string;
}

export interface MenuCategory {
  title: string;
  items: MenuItem[];
}

export const menu: MenuCategory[] = [
  {
    title: "FROM OUR GARDEN",
    items: [
      {
        name: "Valeriana salad with peach",
        description:
          "Fresh valeriana, arugula, pastel made with sesame and honey, peaches, berries and citrus vinaigrette",
        price: "6.80 €",
      },
      {
        name: "Modern Greek salad",
        description:
          "Tomatoes, cucumber, green onions, peppers, Cretan carob rusk, caper leaves, olives and extra virgin olive oil",
        price: "6.80 €",
      },
      {
        name: "Cretan salad (Dakos)",
        description:
          "With Cretan barley rusk, tomatoes, crumbled feta cheese and extra virgin olive oil",
        price: "5.80 €",
      },
    ],
  },
  {
    title: "APPETIZERS",
    items: [
      {
        name: "Tzatziki homemade",
        description:
          "The famous creamy, flavorful, and healthy Greek spread served with pita bread",
        price: "3.60 €",
      },
      {
        name: "Fava Santorini",
        description:
          "Yellow split peas purée served with capers and extra virgin olive oil",
        price: "4.20 €",
      },
      {
        name: "Tirokafteri",
        description: "Spicy creamy spread made of feta cheese and red peppers",
        price: "3.80 €",
      },
      {
        name: "Dolmadakia",
        description: "Stuffed vine leaves with rice served with yogurt sauce",
        price: "4.80 €",
      },
      {
        name: "Feta Cheese",
        description: "Macedonian feta PDO 4 months",
        price: "3.30 €",
      },
    ],
  },
  {
    title: "OUR WARM APPETIZERS",
    items: [
      {
        name: "Crispy zucchini sticks",
        description: "With yogurt dip and fresh herbs",
        price: "4.80 €",
      },
      {
        name: "Feta with honey",
        description:
          "Wrapped with sesame in crispy phyllo dough topped with Greek thyme honey and sesame seeds",
        price: "4.80 €",
      },
      {
        name: "Talagani cheese",
        description: "Grilled and served with homemade fig chutney",
        price: "4.80 €",
      },
      {
        name: "Macedonian 'Bujurdi'",
        description:
          "Baked feta cheese with hot peppers, tomato and extra virgin olive oil",
        price: "5.20 €",
      },
      {
        name: "Hand cut fresh potato fries",
        description: "Topped with Cretan anthotiro cheese",
        price: "3.80 €",
      },
      {
        name: "Tigania Grec",
        description:
          "Pork, bacon and mushrooms sautéed in extra virgin olive oil with Greek herbs and fresh tomato",
        price: "7.80 €",
      },
      {
        name: "Sautéed 'Grevena' mushrooms",
        description:
          "Mushrooms roasted in garlic, fresh butter, white wine, thyme and topped with kefalotyri cheese",
        price: "5.80 €",
      },
      {
        name: "Smoked 'Oregano' mackerel fillet",
        description: "Lightly grilled, served with extra virgin olive oil",
        price: "5.20 €",
      },
    ],
  },
  {
    title: "FROM THE LAND AND THE MOUNTAINS",
    items: [
      {
        name: "Lamb ribs on the grill",
        description:
          "Seasoned with rosemary, garlic, red pepper and served with sautéed 'baby' potatoes",
        price: "9.80 €",
      },
      {
        name: "Burgers ala grec",
        description:
          "Beef mini burgers served over pita bread with fresh tomato sauce, yogurt sauce and sweet pepper",
        price: "7.80 €",
      },
      {
        name: "Keftedakia",
        description:
          "Meatballs on the grill, served with pita bread and hand cut fresh potato fries",
        price: "6.80 €",
      },
      {
        name: "Pork fillets (tenderloin) on the grill",
        description: "Served with creamy carrot sauce and fried rice",
        price: "9.00 €",
      },
      {
        name: "Pork hanging skewer",
        description: "Served with pita bread and hand cut fresh potato fries",
        price: "8.50 €",
      },
      {
        name: "Beef rib steak on the grill",
        description: "Served with grilled vegetables",
        price: "13.50 €",
      },
      {
        name: "Chicken fillet on the grill",
        description:
          "With oyster mushrooms, wild rice and homemade spicy mustard",
        price: "9.80 €",
      },
      {
        name: "Mix grill plate",
        description:
          "With meatballs, chicken fillet, sausage and pork hanging skewer",
        price: "14.80 €",
      },
    ],
  },
  {
    title: "FROM THE SEA",
    items: [
      {
        name: "Grilled Calamari",
        description:
          "Served with Santorini fava purée, shaved almonds and lemon vinaigrette",
        price: "8.50 €",
      },
      {
        name: "Calamari crispy pan-fried",
        description:
          "Served with oregano lemon mayo dip, fried, served with aioli dip",
        price: "7.80 €",
      },
      {
        name: "Prawns 'Saganaki'",
        description:
          "Cooked with fresh tomato, feta cheese, ouzo and basil in hot 'Saganaki' pan",
        price: "8.90 €",
      },
      {
        name: "Octopus on the grill",
        description:
          "Served with Santorini fava purée and caramelized cherry tomatoes",
        price: "11.50 €",
      },
      {
        name: "Sea Bream fillet",
        description: "Served with mixed vegetables and lemon vinaigrette",
        price: "10.80 €",
      },
      {
        name: "Grilled Prawns with lemon vinaigrette",
        description: "With grilled vegetables and sesame seeds",
        price: "11.50 €",
      },
      {
        name: "Linguine with prawns",
        description: "Cooked with our signature fresh tomato sauce",
        price: "12.00 €",
      },
    ],
  },
  {
    title: "OUR BREAD AND OLIVE OIL",
    items: [
      {
        name: "Freshly baked bread (per person)",
        description:
          "With extra virgin olive oil Greek olives and tomato paprika dip",
        price: "1.20 €",
      },
      {
        name: "Extra virgin olive oil 60 ml",
        price: "1.00 €",
      },
    ],
  },
];
