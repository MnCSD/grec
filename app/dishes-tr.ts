export interface MenuItem {
  name: string;
  description?: string;
  price: string;
  image?: string;
}

export interface MenuCategory {
  title: string;
  items: MenuItem[];
}

export const menu: MenuCategory[] = [
  {
    title: "BAHÇEMİZDEN",
    items: [
      {
        name: "Şeftalili Valeriana Salatası",
        description:
          "Taze valeriana, roka, susam ve bal ile yapılmış hamur işi, şeftali, böğürtlen ve narenciye vinegret",
        price: "6.80 €",
      },
      {
        name: "Modern Yunan Salatası",
        description:
          "Domates, salatalık, yeşil soğan, biber, Girit keçiboynuzu gevreği, kapari yaprakları, zeytin ve sızma zeytinyağı",
        price: "6.80 €",
        image: "/assets/dishes/xoriatikh.png",
      },
      {
        name: "Girit Salatası (Dakos)",
        description:
          "Girit arpa gevreği, domates, ufalanmış beyaz peynir ve sızma zeytinyağı ile",
        price: "5.80 €",
      },
    ],
  },
  {
    title: "MEZELER",
    items: [
      {
        name: "Ev Yapımı Cacık",
        description:
          "Pide ekmeği ile servis edilen ünlü kremsi, lezzetli ve sağlıklı Yunan sosu",
        price: "3.60 €",
      },
      {
        name: "Santorini Fava",
        description:
          "Kapari ve sızma zeytinyağı ile servis edilen sarı mercimek püresi",
        price: "4.20 €",
      },
      {
        name: "Tirokafteri",
        description:
          "Beyaz peynir ve kırmızı biberden yapılmış acılı kremsi sos",
        price: "3.80 €",
      },
      {
        name: "yarpaq dolması",
        description: "Yoğurt sosu ile servis edilen pirinçli yaprak sarması",
        price: "4.80 €",
      },
      {
        name: "Feta Peyniri",
        description: "4 aylık Makedonya feta PDO",
        price: "3.30 €",
      },
    ],
  },
  {
    title: "SICAK MEZELERİMİZ",
    items: [
      {
        name: "Çıtır Kabak Çubukları",
        description: "Yoğurt dip sosu ve taze otlar ile",
        price: "4.80 €",
      },
      {
        name: "Ballı Feta",
        description:
          "Çıtır yufka içinde susamla sarılmış, Yunan kekik balı ve susam tohumları ile süslenmiş",
        price: "4.80 €",
        image: "/assets/dishes/feta_with_honey.png",
      },
      {
        name: "Talagani Peyniri",
        description: "Izgara, ev yapımı incir çatnisi ile servis edilir",
        price: "4.80 €",
      },
      {
        name: "Makedon 'Bujurdi'",
        description:
          "Acı biber, domates ve sızma zeytinyağı ile fırınlanmış feta peyniri",
        price: "5.20 €",
      },
      {
        name: "El Kesimi Taze Patates Kızartması",
        description: "Girit anthotiro peyniri ile",
        price: "3.80 €",
      },
      {
        name: "Tigania Grec",
        description:
          "Yunan otları ve taze domates ile sızma zeytinyağında sote edilmiş domuz eti, pastırma ve mantar",
        price: "7.80 €",
      },
      {
        name: "Sote 'Grevena' Mantarı",
        description:
          "Sarımsak, taze tereyağı, beyaz şarap, kekik ile kavrulmuş ve kefalotyri peyniri ile süslenmiş mantar",
        price: "5.80 €",
      },
      {
        name: "Tütsülenmiş 'Kekikli' Uskumru Fileto",
        description: "Hafif ızgara, sızma zeytinyağı ile servis edilir",
        price: "5.20 €",
      },
    ],
  },
  {
    title: "KARADAN VE DAĞLARDAN",
    items: [
      {
        name: "Izgara Kuzu Pirzola",
        description:
          "Biberiye, sarımsak, kırmızı biber ile tatlandırılmış, sote 'baby' patates ile servis edilir",
        price: "9.80 €",
      },
      {
        name: "Yunan Usulü Burger",
        description:
          "Pide ekmeği üzerinde taze domates sosu, yoğurt sosu ve tatlı biber ile servis edilen dana mini burgerler",
        price: "7.80 €",
      },
      {
        name: "Keftedakia",
        description:
          "Izgara köfte, pide ekmeği ve el kesimi taze patates kızartması ile servis edilir",
        price: "6.80 €",
      },
      {
        name: "Izgara Domuz Bonfile",
        description: "Kremsi havuç sosu ve pilav ile servis edilir",
        price: "9.00 €",
      },
      {
        name: "Domuz Şiş",
        description:
          "Pide ekmeği ve el kesimi taze patates kızartması ile servis edilir",
        price: "8.50 €",
      },
      {
        name: "Izgara Dana Antrikot",
        description: "Izgara sebzeler ile servis edilir",
        price: "13.50 €",
      },
      {
        name: "Izgara Tavuk Fileto",
        description:
          "İstiridye mantarı, yaban pirinci ve ev yapımı acılı hardal ile",
        price: "9.80 €",
      },
      {
        name: "Karışık Izgara Tabağı",
        description: "Köfte, tavuk fileto, sosis ve domuz şiş ile",
        price: "14.80 €",
      },
    ],
  },
  {
    title: "DENİZDEN",
    items: [
      {
        name: "Izgara Kalamar",
        description:
          "Santorini fava püresi, rendelenmiş badem ve limon vinegret ile servis edilir",
        price: "8.50 €",
      },
      {
        name: "Çıtır Kızarmış Kalamar",
        description:
          "Kekikli limonlu mayonez dip sosu ile servis edilir, aioli dip sosu ile",
        price: "7.80 €",
      },
      {
        name: "Karides 'Saganaki'",
        description:
          "Sıcak 'Saganaki' tavasında taze domates, feta peyniri, uzo ve fesleğen ile pişirilmiş",
        price: "8.90 €",
      },
      {
        name: "Izgara Ahtapot",
        description:
          "Santorini fava püresi ve karamelize cherry domates ile servis edilir",
        price: "11.50 €",
      },
      {
        name: "Çipura Fileto",
        description: "Karışık sebzeler ve limon vinegret ile servis edilir",
        price: "10.80 €",
      },
      {
        name: "Limon Vinegretli Izgara Karides",
        description: "Izgara sebzeler ve susam tohumları ile",
        price: "11.50 €",
      },
      {
        name: "Karidesli Linguine",
        description: "Özel taze domates sosumuz ile pişirilmiş",
        price: "12.00 €",
      },
    ],
  },
  {
    title: "EKMEĞİMİZ VE ZEYTİNYAĞIMIZ",
    items: [
      {
        name: "Taze Fırın Ekmeği (kişi başı)",
        description:
          "Sızma zeytinyağı, Yunan zeytinleri ve domates biberli dip sos ile",
        price: "1.20 €",
      },
      {
        name: "Sızma Zeytinyağı 60 ml",
        price: "1.00 €",
      },
    ],
  },
];
