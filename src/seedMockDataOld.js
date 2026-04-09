import { writeBatch, doc, Timestamp } from "firebase/firestore";
import { db } from "./Firebase";

const seededAt = Timestamp.fromDate(new Date("2026-03-31T12:00:00Z"));

export async function seedMockData() {
  const batch = writeBatch(db);

  const docs = [
    // wineResults


    // region_overview
    {
      path: ["region_overview", "piemonte"],
      data: {
        region: "Piemonte",
        tastingsCount: 142,
        enjoymentSum: 945,
        enjoymentAvg: 6.65,
        redTastingsCount: 118,
        whiteTastingsCount: 3,
        roseTastingsCount: 0,
        sparklingTastingsCount: 21,
        specialTastingsCount: 0,
        updatedAt: seededAt,
      },
    },
    {
      path: ["region_overview", "veneto"],
      data: {
        region: "Veneto",
        tastingsCount: 198,
        enjoymentSum: 1236,
        enjoymentAvg: 6.24,
        redTastingsCount: 74,
        whiteTastingsCount: 58,
        roseTastingsCount: 0,
        sparklingTastingsCount: 66,
        specialTastingsCount: 0,
        updatedAt: seededAt,
      },
    },
    {
      path: ["region_overview", "toscana"],
      data: {
        region: "Toscana",
        tastingsCount: 156,
        enjoymentSum: 978,
        enjoymentAvg: 6.27,
        redTastingsCount: 139,
        whiteTastingsCount: 12,
        roseTastingsCount: 5,
        sparklingTastingsCount: 0,
        specialTastingsCount: 0,
        updatedAt: seededAt,
      },
    },
    {
      path: ["region_overview", "sicilia"],
      data: {
        region: "Sicilia",
        tastingsCount: 181,
        enjoymentSum: 1154,
        enjoymentAvg: 6.38,
        redTastingsCount: 71,
        whiteTastingsCount: 77,
        roseTastingsCount: 8,
        sparklingTastingsCount: 0,
        specialTastingsCount: 25,
        updatedAt: seededAt,
      },
    },
    {
      path: ["region_overview", "lombardia"],
      data: {
        region: "Lombardia",
        tastingsCount: 137,
        enjoymentSum: 894,
        enjoymentAvg: 6.53,
        redTastingsCount: 18,
        whiteTastingsCount: 16,
        roseTastingsCount: 0,
        sparklingTastingsCount: 103,
        specialTastingsCount: 0,
        updatedAt: seededAt,
      },
    },

    // grape_overview
    {
      path: ["grape_overview", "nebbiolo"],
      data: {
        grape: "Nebbiolo",
        guessCount: 96,
        correctGuessCount: 67,
        wrongGuessCount: 29,
        correctGuessRate: 0.7,
        updatedAt: seededAt,
      },
    },
    {
      path: ["grape_overview", "chardonnay"],
      data: {
        grape: "Chardonnay",
        guessCount: 141,
        correctGuessCount: 82,
        wrongGuessCount: 59,
        correctGuessRate: 0.58,
        updatedAt: seededAt,
      },
    },
    {
      path: ["grape_overview", "glera"],
      data: {
        grape: "Glera",
        guessCount: 118,
        correctGuessCount: 74,
        wrongGuessCount: 44,
        correctGuessRate: 0.63,
        updatedAt: seededAt,
      },
    },
    {
      path: ["grape_overview", "garganega"],
      data: {
        grape: "Garganega",
        guessCount: 74,
        correctGuessCount: 39,
        wrongGuessCount: 35,
        correctGuessRate: 0.53,
        updatedAt: seededAt,
      },
    },
    {
      path: ["grape_overview", "sangiovese"],
      data: {
        grape: "Sangiovese",
        guessCount: 112,
        correctGuessCount: 61,
        wrongGuessCount: 51,
        correctGuessRate: 0.54,
        updatedAt: seededAt,
      },
    },

    // price_overview
    {
      path: ["price_overview", "global"],
      data: {
        scope: "global",
        buckets: {
          "Entry Level": { count: 31, enjoymentSum: 152, enjoymentAvg: 4.9 },
          "Mid-Range": { count: 94, enjoymentSum: 524, enjoymentAvg: 5.57 },
          Premium: { count: 207, enjoymentSum: 1291, enjoymentAvg: 6.24 },
          "Super Premium": { count: 143, enjoymentSum: 940, enjoymentAvg: 6.57 },
          Luxury: { count: 66, enjoymentSum: 455, enjoymentAvg: 6.89 },
        },
        updatedAt: seededAt,
      },
    },
    {
      path: ["price_overview", "red"],
      data: {
        scope: "red",
        buckets: {
          "Entry Level": { count: 4, enjoymentSum: 18, enjoymentAvg: 4.5 },
          "Mid-Range": { count: 21, enjoymentSum: 112, enjoymentAvg: 5.33 },
          Premium: { count: 79, enjoymentSum: 496, enjoymentAvg: 6.28 },
          "Super Premium": { count: 92, enjoymentSum: 611, enjoymentAvg: 6.64 },
          Luxury: { count: 58, enjoymentSum: 403, enjoymentAvg: 6.95 },
        },
        updatedAt: seededAt,
      },
    },

    // category_overview
    {
      path: ["category_overview", "red"],
      data: {
        category: "red",
        tastingsCount: 432,
        enjoymentSum: 2731,
        enjoymentAvg: 6.32,
        aromaSum: 2608,
        aromaAvg: 6.04,
        balanceSum: 2512,
        balanceAvg: 5.81,
        structureSum: 501,
        structureAvg: 1.16,
        drinkabilitySum: 206,
        drinkabilityAvg: 0.48,
        updatedAt: seededAt,
      },
    },
    {
      path: ["category_overview", "white"],
      data: {
        category: "white",
        tastingsCount: 386,
        enjoymentSum: 2398,
        enjoymentAvg: 6.21,
        aromaSum: 2310,
        aromaAvg: 5.98,
        balanceSum: 2275,
        balanceAvg: 5.89,
        structureSum: 138,
        structureAvg: 0.36,
        drinkabilitySum: 248,
        drinkabilityAvg: 0.64,
        updatedAt: seededAt,
      },
    },
    {
      path: ["category_overview", "sparkling"],
      data: {
        category: "sparkling",
        tastingsCount: 297,
        enjoymentSum: 1907,
        enjoymentAvg: 6.42,
        aromaSum: 1814,
        aromaAvg: 6.11,
        balanceSum: 1778,
        balanceAvg: 5.99,
        structureSum: 77,
        structureAvg: 0.26,
        drinkabilitySum: 218,
        drinkabilityAvg: 0.73,
        updatedAt: seededAt,
      },
    },

    // category facets
    {
      path: ["category_overview", "red", "facets", "descriptors"],
      data: {
        counts: {
          Fruity: 91,
          Spicy: 136,
          Floral: 39,
          Herbal: 41,
          Earthy: 104,
          Tannic: 149,
          Smooth: 84,
          "Full-bodied": 108,
          Elegant: 63,
          Complex: 47,
        },
        updatedAt: seededAt,
      },
    },
    {
      path: ["category_overview", "white", "facets", "descriptors"],
      data: {
        counts: {
          Fruity: 144,
          Spicy: 12,
          Floral: 101,
          Herbal: 54,
          Earthy: 17,
          Tannic: 3,
          Smooth: 127,
          "Full-bodied": 28,
          Elegant: 82,
          Complex: 26,
        },
        updatedAt: seededAt,
      },
    },
    {
      path: ["category_overview", "sparkling", "facets", "descriptors"],
      data: {
        counts: {
          Fruity: 118,
          Spicy: 7,
          Floral: 74,
          Herbal: 21,
          Earthy: 6,
          Tannic: 0,
          Smooth: 111,
          "Full-bodied": 17,
          Elegant: 93,
          Complex: 19,
        },
        updatedAt: seededAt,
      },
    },
    {
      path: ["category_overview", "red", "facets", "price_descriptor_counts"],
      data: {
        buckets: {
          "Entry Level": { Fruity: 6, Smooth: 4, Floral: 1 },
          "Mid-Range": { Fruity: 12, Spicy: 7, Elegant: 5 },
          Premium: { Tannic: 15, Earthy: 11, Elegant: 9 },
          "Super Premium": { Tannic: 19, Complex: 14, Earthy: 13 },
          Luxury: { Complex: 17, Tannic: 16, Earthy: 15 },
        },
        updatedAt: seededAt,
      },
    },
    {
      path: ["category_overview", "red", "facets", "enjoyment_structure_drinkability"],
      data: {
        buckets: {
          "1": { structureSum: 3, drinkabilitySum: 2, count: 2 },
          "2": { structureSum: 7, drinkabilitySum: 5, count: 4 },
          "3": { structureSum: 13, drinkabilitySum: 8, count: 7 },
          "4": { structureSum: 21, drinkabilitySum: 11, count: 11 },
          "5": { structureSum: 33, drinkabilitySum: 15, count: 15 },
          "6": { structureSum: 46, drinkabilitySum: 19, count: 18 },
          "7": { structureSum: 54, drinkabilitySum: 16, count: 20 },
        },
        updatedAt: seededAt,
      },
    },

    {
        path: ["global_overview", "stats"],
        data: {
          totalSubmissions: 2314,
          updatedAt: seededAt,
        },
      },

    // global_overview facet
    {
    path: ["global_overview", "stats", "facets", "descriptors"],
    data: {
        counts: {
        Fruity: 241,
        Spicy: 158,
        Floral: 180,
        Herbal: 84,
        Earthy: 131,
        Tannic: 152,
        Smooth: 211,
        "Full-bodied": 153,
        Elegant: 174,
        Complex: 92,
        },
        updatedAt: seededAt,
    },
    },

    // leaderboards
    {
      path: ["leaderboards", "global_top_wines_by_enjoyment"],
      data: {
        metric: "top_wines_by_enjoyment",
        scope: "global",
        updatedAt: seededAt,
        items: [
          { wineId: "wine_001", label: "Barolo DOCG 2019", category: "red", region: "Piemonte", value: 6.79, tastingsCount: 24 },
          { wineId: "wine_005", label: "Franciacorta Brut NV", category: "sparkling", region: "Lombardia", value: 6.72, tastingsCount: 31 },
          { wineId: "wine_009", label: "Etna Bianco 2023", category: "white", region: "Sicilia", value: 6.68, tastingsCount: 22 },
          { wineId: "wine_003", label: "Chianti Classico 2020", category: "red", region: "Toscana", value: 6.61, tastingsCount: 26 },
          { wineId: "wine_008", label: "Soave Classico 2023", category: "white", region: "Veneto", value: 6.57, tastingsCount: 19 },
          { wineId: "wine_002", label: "Etna Rosso 2021", category: "red", region: "Sicilia", value: 6.54, tastingsCount: 23 },
          { wineId: "wine_006", label: "Prosecco Superiore DOCG", category: "sparkling", region: "Veneto", value: 6.46, tastingsCount: 28 },
          { wineId: "wine_007", label: "Verdicchio dei Castelli di Jesi 2023", category: "white", region: "Marche", value: 6.42, tastingsCount: 17 },
          { wineId: "wine_004", label: "Amarone della Valpolicella 2018", category: "red", region: "Veneto", value: 6.39, tastingsCount: 16 },
          { wineId: "wine_010", label: "Cerasuolo d’Abruzzo 2023", category: "rose", region: "Abruzzo", value: 6.31, tastingsCount: 14 },
        ],
      },
    },
    {
      path: ["leaderboards", "global_top_wines_by_balance"],
      data: {
        metric: "top_wines_by_balance",
        scope: "global",
        updatedAt: seededAt,
        items: [
          { wineId: "wine_005", label: "Franciacorta Brut NV", value: 6.81, tastingsCount: 31 },
          { wineId: "wine_001", label: "Barolo DOCG 2019", value: 6.67, tastingsCount: 24 },
          { wineId: "wine_009", label: "Etna Bianco 2023", value: 6.58, tastingsCount: 22 },
        ],
      },
    },
    {
      path: ["leaderboards", "global_top_regions_by_enjoyment"],
      data: {
        metric: "top_regions_by_enjoyment",
        scope: "global",
        updatedAt: seededAt,
        items: [
          { region: "Piemonte", value: 6.65, tastingsCount: 142, red: 118, white: 3, rose: 0, sparkling: 21, special: 0 },
          { region: "Lombardia", value: 6.53, tastingsCount: 137, red: 18, white: 16, rose: 0, sparkling: 103, special: 0 },
          { region: "Sicilia", value: 6.38, tastingsCount: 181, red: 71, white: 77, rose: 8, sparkling: 0, special: 25 },
          { region: "Toscana", value: 6.27, tastingsCount: 156, red: 139, white: 12, rose: 5, sparkling: 0, special: 0 },
          { region: "Veneto", value: 6.24, tastingsCount: 198, red: 74, white: 58, rose: 0, sparkling: 66, special: 0 },
        ],
      },
    },
    {
      path: ["leaderboards", "global_bubble_price_vs_enjoyment"],
      data: {
        metric: "bubble_price_vs_enjoyment",
        scope: "global",
        updatedAt: seededAt,
        items: [
          { wineId: "wine_001", label: "Barolo DOCG 2019", category: "red", priceRange: "Luxury", enjoymentAvg: 6.79, tastingsCount: 24 },
          { wineId: "wine_005", label: "Franciacorta Brut NV", category: "sparkling", priceRange: "Super Premium", enjoymentAvg: 6.72, tastingsCount: 31 },
          { wineId: "wine_009", label: "Etna Bianco 2023", category: "white", priceRange: "Premium", enjoymentAvg: 6.68, tastingsCount: 22 },
          { wineId: "wine_003", label: "Chianti Classico 2020", category: "red", priceRange: "Premium", enjoymentAvg: 6.61, tastingsCount: 26 },
          { wineId: "wine_008", label: "Soave Classico 2023", category: "white", priceRange: "Mid-Range", enjoymentAvg: 6.57, tastingsCount: 19 },
        ],
      },
    },
    {
      path: ["leaderboards", "category_red_top_wines_by_enjoyment"],
      data: {
        metric: "top_wines_by_enjoyment",
        scope: "category_red",
        updatedAt: seededAt,
        items: [
          { wineId: "wine_001", label: "Barolo DOCG 2019", value: 6.79, tastingsCount: 24 },
          { wineId: "wine_003", label: "Chianti Classico 2020", value: 6.61, tastingsCount: 26 },
          { wineId: "wine_002", label: "Etna Rosso 2021", value: 6.54, tastingsCount: 23 },
          { wineId: "wine_004", label: "Amarone della Valpolicella 2018", value: 6.39, tastingsCount: 16 },
        ],
      },
    },
    {
      path: ["leaderboards", "category_red_top_wines_by_balance"],
      data: {
        metric: "top_wines_by_balance",
        scope: "category_red",
        updatedAt: seededAt,
        items: [
          { wineId: "wine_001", label: "Barolo DOCG 2019", value: 6.67, tastingsCount: 24 },
          { wineId: "wine_003", label: "Chianti Classico 2020", value: 6.42, tastingsCount: 26 },
          { wineId: "wine_002", label: "Etna Rosso 2021", value: 6.33, tastingsCount: 23 },
        ],
      },
    },
    {
      path: ["leaderboards", "category_red_top_recognized_wines"],
      data: {
        metric: "top_recognized_wines",
        scope: "category_red",
        updatedAt: seededAt,
        items: [
          { wineId: "wine_001", label: "Barolo DOCG 2019", guessedRight: 16, guessedWrong: 8, correctRate: 0.67, tastingsCount: 24 },
          { wineId: "wine_003", label: "Chianti Classico 2020", guessedRight: 14, guessedWrong: 12, correctRate: 0.54, tastingsCount: 26 },
          { wineId: "wine_002", label: "Etna Rosso 2021", guessedRight: 11, guessedWrong: 12, correctRate: 0.48, tastingsCount: 23 },
          { wineId: "wine_004", label: "Amarone della Valpolicella 2018", guessedRight: 7, guessedWrong: 9, correctRate: 0.44, tastingsCount: 16 },
        ],
      },
    },
    {
      path: ["leaderboards", "category_red_top_regions"],
      data: {
        metric: "top_regions_by_enjoyment",
        scope: "category_red",
        updatedAt: seededAt,
        items: [
          { region: "Piemonte", value: 6.65, tastingsCount: 118 },
          { region: "Toscana", value: 6.27, tastingsCount: 139 },
          { region: "Sicilia", value: 6.21, tastingsCount: 71 },
        ],
      },
    },
    {
      path: ["leaderboards", "category_red_bubble_price_vs_enjoyment"],
      data: {
        metric: "bubble_price_vs_enjoyment",
        scope: "category_red",
        updatedAt: seededAt,
        items: [
          { wineId: "wine_001", label: "Barolo DOCG 2019", priceRange: "Luxury", enjoymentAvg: 6.79, tastingsCount: 24 },
          { wineId: "wine_003", label: "Chianti Classico 2020", priceRange: "Premium", enjoymentAvg: 6.61, tastingsCount: 26 },
          { wineId: "wine_002", label: "Etna Rosso 2021", priceRange: "Premium", enjoymentAvg: 6.54, tastingsCount: 23 },
          { wineId: "wine_004", label: "Amarone della Valpolicella 2018", priceRange: "Super Premium", enjoymentAvg: 6.39, tastingsCount: 16 },
        ],
      },
    },
    {
      path: ["global_overview", "regions"],
      data: {
        topRegions: [
          {
            region: "Piemonte",
            count: 142,
            enjoymentAvg: 6.65,
            categories: {
              red: 118,
              white: 3,
              rose: 0,
              sparkling: 21,
              special: 0,
            },
          },
          {
            region: "Lombardia",
            count: 137,
            enjoymentAvg: 6.53,
            categories: {
              red: 18,
              white: 16,
              rose: 0,
              sparkling: 103,
              special: 0,
            },
          },
          {
            region: "Sicilia",
            count: 181,
            enjoymentAvg: 6.38,
            categories: {
              red: 71,
              white: 77,
              rose: 8,
              sparkling: 0,
              special: 25,
            },
          },
          {
            region: "Toscana",
            count: 156,
            enjoymentAvg: 6.27,
            categories: {
              red: 139,
              white: 12,
              rose: 5,
              sparkling: 0,
              special: 0,
            },
          },
          {
            region: "Veneto",
            count: 198,
            enjoymentAvg: 6.24,
            categories: {
              red: 74,
              white: 58,
              rose: 0,
              sparkling: 66,
              special: 0,
            },
          },
        ],
        totalTastings: 814,
        regionsRepresented: 5,
        updatedAt: seededAt,
      },
    },
    {
      path: ["global_overview", "regions_by_category"],
      data: {
        red: [
          { region: "Toscana", count: 139, enjoymentAvg: 6.27 },
          { region: "Piemonte", count: 118, enjoymentAvg: 6.65 },
          { region: "Veneto", count: 74, enjoymentAvg: 6.24 },
          { region: "Sicilia", count: 71, enjoymentAvg: 6.21 },
          { region: "Lombardia", count: 18, enjoymentAvg: 6.05 },
        ],
        white: [
          { region: "Sicilia", count: 77, enjoymentAvg: 6.44 },
          { region: "Veneto", count: 58, enjoymentAvg: 6.18 },
          { region: "Lombardia", count: 16, enjoymentAvg: 6.12 },
          { region: "Toscana", count: 12, enjoymentAvg: 6.01 },
          { region: "Piemonte", count: 3, enjoymentAvg: 5.96 },
        ],
        rose: [
          { region: "Sicilia", count: 8, enjoymentAvg: 6.29 },
          { region: "Toscana", count: 5, enjoymentAvg: 6.11 },
          { region: "Veneto", count: 0, enjoymentAvg: 0 },
          { region: "Piemonte", count: 0, enjoymentAvg: 0 },
          { region: "Lombardia", count: 0, enjoymentAvg: 0 },
        ],
        sparkling: [
          { region: "Lombardia", count: 103, enjoymentAvg: 6.53 },
          { region: "Veneto", count: 66, enjoymentAvg: 6.24 },
          { region: "Piemonte", count: 21, enjoymentAvg: 6.18 },
          { region: "Sicilia", count: 0, enjoymentAvg: 0 },
          { region: "Toscana", count: 0, enjoymentAvg: 0 },
        ],
        special: [
          { region: "Sicilia", count: 25, enjoymentAvg: 6.33 },
          { region: "Veneto", count: 0, enjoymentAvg: 0 },
          { region: "Piemonte", count: 0, enjoymentAvg: 0 },
          { region: "Lombardia", count: 0, enjoymentAvg: 0 },
          { region: "Toscana", count: 0, enjoymentAvg: 0 },
        ],
        updatedAt: seededAt,
      },
    },
    {
      path: ["leaderboards", "category_white_top_recognized_wines"],
      data: {
        metric: "top_recognized_wines",
        scope: "category_white",
        updatedAt: seededAt,
        items: [
          {
            wineId: "wine_101",
            label: "Soave Classico 2023",
            correctGuesses: 17,
            wrongGuesses: 5,
            totalGuesses: 22,
          },
          {
            wineId: "wine_102",
            label: "Verdicchio dei Castelli di Jesi 2023",
            correctGuesses: 15,
            wrongGuesses: 6,
            totalGuesses: 21,
          },
          {
            wineId: "wine_103",
            label: "Vermentino di Gallura 2024",
            correctGuesses: 13,
            wrongGuesses: 7,
            totalGuesses: 20,
          },
          {
            wineId: "wine_104",
            label: "Pinot Grigio Collio 2023",
            correctGuesses: 12,
            wrongGuesses: 8,
            totalGuesses: 20,
          },
          {
            wineId: "wine_105",
            label: "Greco di Tufo 2023",
            correctGuesses: 11,
            wrongGuesses: 8,
            totalGuesses: 19,
          },
        ],
      },
    },
    {
      path: ["leaderboards", "category_white_top_regions"],
      data: {
        metric: "top_regions",
        scope: "category_white",
        updatedAt: seededAt,
        items: [
          {
            region: "Veneto",
            label: "Veneto",
            value: 6.42,
            count: 22,
            categories: {
              red: 0,
              white: 22,
              rose: 0,
              sparkling: 0,
              special: 0,
            },
          },
          {
            region: "Marche",
            label: "Marche",
            value: 6.31,
            count: 19,
            categories: {
              red: 0,
              white: 19,
              rose: 0,
              sparkling: 0,
              special: 0,
            },
          },
          {
            region: "Friuli Venezia Giulia",
            label: "Friuli Venezia Giulia",
            value: 6.19,
            count: 17,
            categories: {
              red: 0,
              white: 17,
              rose: 0,
              sparkling: 0,
              special: 0,
            },
          },
        ],
      },
    },
    {
      path: ["leaderboards", "category_white_top_wines_by_enjoyment"],
      data: {
        metric: "top_wines_by_enjoyment",
        scope: "category_white",
        updatedAt: seededAt,
        items: [
          { wineId: "wine_101", label: "Soave Classico 2023", value: 6.58, tastingsCount: 22 },
          { wineId: "wine_102", label: "Verdicchio dei Castelli di Jesi 2023", value: 6.46, tastingsCount: 21 },
          { wineId: "wine_103", label: "Vermentino di Gallura 2024", value: 6.33, tastingsCount: 20 },
          { wineId: "wine_104", label: "Pinot Grigio Collio 2023", value: 6.21, tastingsCount: 18 },
          { wineId: "wine_105", label: "Greco di Tufo 2023", value: 6.12, tastingsCount: 19 },
        ],
      },
    },
    
    {
      path: ["leaderboards", "category_rose_top_recognized_wines"],
      data: {
        metric: "top_recognized_wines",
        scope: "category_rose",
        updatedAt: seededAt,
        items: [
          {
            wineId: "wine_201",
            label: "Cerasuolo d'Abruzzo 2024",
            correctGuesses: 14,
            wrongGuesses: 5,
            totalGuesses: 19,
          },
          {
            wineId: "wine_202",
            label: "Rosato Salento 2024",
            correctGuesses: 12,
            wrongGuesses: 6,
            totalGuesses: 18,
          },
          {
            wineId: "wine_203",
            label: "Chiaretto di Bardolino 2024",
            correctGuesses: 10,
            wrongGuesses: 7,
            totalGuesses: 17,
          },
          {
            wineId: "wine_204",
            label: "Etna Rosato 2024",
            correctGuesses: 9,
            wrongGuesses: 7,
            totalGuesses: 16,
          },
          {
            wineId: "wine_205",
            label: "Rosé Toscana IGT 2024",
            correctGuesses: 8,
            wrongGuesses: 8,
            totalGuesses: 16,
          },
        ],
      },
    },
    {
      path: ["leaderboards", "category_rose_top_regions"],
      data: {
        metric: "top_regions",
        scope: "category_rose",
        updatedAt: seededAt,
        items: [
          {
            region: "Abruzzo",
            label: "Abruzzo",
            value: 6.18,
            count: 19,
            categories: {
              red: 0,
              white: 0,
              rose: 19,
              sparkling: 0,
              special: 0,
            },
          },
          {
            region: "Puglia",
            label: "Puglia",
            value: 6.02,
            count: 17,
            categories: {
              red: 0,
              white: 0,
              rose: 17,
              sparkling: 0,
              special: 0,
            },
          },
          {
            region: "Veneto",
            label: "Veneto",
            value: 5.94,
            count: 15,
            categories: {
              red: 0,
              white: 0,
              rose: 15,
              sparkling: 0,
              special: 0,
            },
          },
        ],
      },
    },
    {
      path: ["leaderboards", "category_rose_top_wines_by_enjoyment"],
      data: {
        metric: "top_wines_by_enjoyment",
        scope: "category_rose",
        updatedAt: seededAt,
        items: [
          { wineId: "wine_201", label: "Cerasuolo d'Abruzzo 2024", value: 6.24, tastingsCount: 19 },
          { wineId: "wine_202", label: "Rosato Salento 2024", value: 6.09, tastingsCount: 18 },
          { wineId: "wine_203", label: "Chiaretto di Bardolino 2024", value: 5.97, tastingsCount: 17 },
          { wineId: "wine_204", label: "Etna Rosato 2024", value: 5.91, tastingsCount: 16 },
          { wineId: "wine_205", label: "Rosé Toscana IGT 2024", value: 5.84, tastingsCount: 16 },
        ],
      },
    },
    
    {
      path: ["leaderboards", "category_sparkling_top_recognized_wines"],
      data: {
        metric: "top_recognized_wines",
        scope: "category_sparkling",
        updatedAt: seededAt,
        items: [
          {
            wineId: "wine_301",
            label: "Franciacorta Brut NV",
            correctGuesses: 19,
            wrongGuesses: 4,
            totalGuesses: 23,
          },
          {
            wineId: "wine_302",
            label: "Prosecco Superiore DOCG NV",
            correctGuesses: 17,
            wrongGuesses: 5,
            totalGuesses: 22,
          },
          {
            wineId: "wine_303",
            label: "Trento DOC Brut NV",
            correctGuesses: 15,
            wrongGuesses: 6,
            totalGuesses: 21,
          },
          {
            wineId: "wine_304",
            label: "Alta Langa Brut 2021",
            correctGuesses: 12,
            wrongGuesses: 7,
            totalGuesses: 19,
          },
          {
            wineId: "wine_305",
            label: "Lambrusco di Sorbara NV",
            correctGuesses: 10,
            wrongGuesses: 8,
            totalGuesses: 18,
          },
        ],
      },
    },
    {
      path: ["leaderboards", "category_sparkling_top_regions"],
      data: {
        metric: "top_regions",
        scope: "category_sparkling",
        updatedAt: seededAt,
        items: [
          {
            region: "Lombardia",
            label: "Lombardia",
            value: 6.63,
            count: 23,
            categories: {
              red: 0,
              white: 0,
              rose: 0,
              sparkling: 23,
              special: 0,
            },
          },
          {
            region: "Veneto",
            label: "Veneto",
            value: 6.28,
            count: 22,
            categories: {
              red: 0,
              white: 0,
              rose: 0,
              sparkling: 22,
              special: 0,
            },
          },
          {
            region: "Trentino-Alto Adige",
            label: "Trentino-Alto Adige",
            value: 6.11,
            count: 18,
            categories: {
              red: 0,
              white: 0,
              rose: 0,
              sparkling: 18,
              special: 0,
            },
          },
        ],
      },
    },
    {
      path: ["leaderboards", "category_sparkling_top_wines_by_enjoyment"],
      data: {
        metric: "top_wines_by_enjoyment",
        scope: "category_sparkling",
        updatedAt: seededAt,
        items: [
          { wineId: "wine_301", label: "Franciacorta Brut NV", value: 6.71, tastingsCount: 23 },
          { wineId: "wine_302", label: "Prosecco Superiore DOCG NV", value: 6.37, tastingsCount: 22 },
          { wineId: "wine_303", label: "Trento DOC Brut NV", value: 6.19, tastingsCount: 21 },
          { wineId: "wine_304", label: "Alta Langa Brut 2021", value: 6.04, tastingsCount: 19 },
          { wineId: "wine_305", label: "Lambrusco di Sorbara NV", value: 5.92, tastingsCount: 18 },
        ],
      },
    },
    
    {
      path: ["leaderboards", "category_special_top_recognized_wines"],
      data: {
        metric: "top_recognized_wines",
        scope: "category_special",
        updatedAt: seededAt,
        items: [
          {
            wineId: "wine_401",
            label: "Passito di Pantelleria 2021",
            correctGuesses: 11,
            wrongGuesses: 5,
            totalGuesses: 16,
          },
          {
            wineId: "wine_402",
            label: "Vin Santo del Chianti 2018",
            correctGuesses: 10,
            wrongGuesses: 6,
            totalGuesses: 16,
          },
          {
            wineId: "wine_403",
            label: "Recioto della Valpolicella 2019",
            correctGuesses: 9,
            wrongGuesses: 6,
            totalGuesses: 15,
          },
          {
            wineId: "wine_404",
            label: "Marsala Superiore 2018",
            correctGuesses: 8,
            wrongGuesses: 7,
            totalGuesses: 15,
          },
          {
            wineId: "wine_405",
            label: "Aleatico Passito 2022",
            correctGuesses: 7,
            wrongGuesses: 7,
            totalGuesses: 14,
          },
        ],
      },
    },
    {
      path: ["leaderboards", "category_special_top_regions"],
      data: {
        metric: "top_regions",
        scope: "category_special",
        updatedAt: seededAt,
        items: [
          {
            region: "Sicilia",
            label: "Sicilia",
            value: 6.32,
            count: 16,
            categories: {
              red: 0,
              white: 0,
              rose: 0,
              sparkling: 0,
              special: 16,
            },
          },
          {
            region: "Toscana",
            label: "Toscana",
            value: 6.08,
            count: 15,
            categories: {
              red: 0,
              white: 0,
              rose: 0,
              sparkling: 0,
              special: 15,
            },
          },
          {
            region: "Veneto",
            label: "Veneto",
            value: 5.96,
            count: 14,
            categories: {
              red: 0,
              white: 0,
              rose: 0,
              sparkling: 0,
              special: 14,
            },
          },
        ],
      },
    },
    {
      path: ["leaderboards", "category_special_top_wines_by_enjoyment"],
      data: {
        metric: "top_wines_by_enjoyment",
        scope: "category_special",
        updatedAt: seededAt,
        items: [
          { wineId: "wine_401", label: "Passito di Pantelleria 2021", value: 6.41, tastingsCount: 16 },
          { wineId: "wine_402", label: "Vin Santo del Chianti 2018", value: 6.18, tastingsCount: 16 },
          { wineId: "wine_403", label: "Recioto della Valpolicella 2019", value: 6.07, tastingsCount: 15 },
          { wineId: "wine_404", label: "Marsala Superiore 2018", value: 5.94, tastingsCount: 15 },
          { wineId: "wine_405", label: "Aleatico Passito 2022", value: 5.83, tastingsCount: 14 },
        ],
      },
    },
    {
      path: ["leaderboards", "global_top_grapes_by_recognition"],
      data: {
        metric: "top_grapes_by_recognition",
        scope: "global",
        updatedAt: seededAt,
        items: [
          {
            grapeId: "chardonnay",
            label: "Chardonnay",
            guessCount: 141,
            correctGuessCount: 82,
            wrongGuessCount: 59,
            correctGuessRate: 0.58,
          },
          {
            grapeId: "glera",
            label: "Glera",
            guessCount: 118,
            correctGuessCount: 74,
            wrongGuessCount: 44,
            correctGuessRate: 0.63,
          },
          {
            grapeId: "sangiovese",
            label: "Sangiovese",
            guessCount: 112,
            correctGuessCount: 61,
            wrongGuessCount: 51,
            correctGuessRate: 0.54,
          },
          {
            grapeId: "nebbiolo",
            label: "Nebbiolo",
            guessCount: 96,
            correctGuessCount: 67,
            wrongGuessCount: 29,
            correctGuessRate: 0.70,
          },
          {
            grapeId: "garganega",
            label: "Garganega",
            guessCount: 74,
            correctGuessCount: 39,
            wrongGuessCount: 35,
            correctGuessRate: 0.53,
          },
        ],
      },
    },
    {
      path: ["leaderboards", "category_red_top_wines_by_enjoyment"],
      data: {
        metric: "top_wines_by_enjoyment",
        scope: "category_red",
        updatedAt: seededAt,
        items: [
          { label: "Barolo DOCG 2019", value: 6.79, tastingsCount: 24, wineId: "wine_001" },
          { label: "Chianti Classico 2020", value: 6.64, tastingsCount: 22, wineId: "wine_002" },
          { label: "Etna Rosso 2021", value: 6.51, tastingsCount: 21, wineId: "wine_003" },
          { label: "Amarone della Valpolicella 2018", value: 6.42, tastingsCount: 19, wineId: "wine_004" },
          { label: "Brunello di Montalcino 2019", value: 6.36, tastingsCount: 18, wineId: "wine_005" },
          { label: "Bolgheri Rosso 2021", value: 6.28, tastingsCount: 17, wineId: "wine_006" },
          { label: "Vino Nobile di Montepulciano 2020", value: 6.15, tastingsCount: 15, wineId: "wine_007" },
          { label: "Aglianico del Vulture 2019", value: 6.04, tastingsCount: 14, wineId: "wine_008" },
          { label: "Valpolicella Ripasso 2021", value: 5.92, tastingsCount: 13, wineId: "wine_009" },
          { label: "Montepulciano d’Abruzzo Riserva 2020", value: 5.81, tastingsCount: 12, wineId: "wine_010" },
        ],
      },
    },
    {
      path: ["leaderboards", "category_red_top_wines_by_balance"],
      data: {
        metric: "top_wines_by_balance",
        scope: "category_red",
        updatedAt: seededAt,
        items: [
          { label: "Etna Rosso 2021", value: 6.88, tastingsCount: 21, wineId: "wine_003" },
          { label: "Barolo DOCG 2019", value: 6.82, tastingsCount: 24, wineId: "wine_001" },
          { label: "Brunello di Montalcino 2019", value: 6.74, tastingsCount: 18, wineId: "wine_005" },
        ],
      },
    },
    {
      path: ["category_overview", "red", "facets", "descriptors"],
      data: {
        counts: {
          fruity: 48,
          elegant: 41,
          structured: 36,
          spicy: 31,
          intense: 27,
          persistent: 24,
          velvety: 19,
          earthy: 16,
        },
        updatedAt: seededAt,
      },
    },

    // -------------------- Screen 2B: WHITE --------------------
    {
      path: ["leaderboards", "category_white_top_wines_by_enjoyment"],
      data: {
        metric: "top_wines_by_enjoyment",
        scope: "category_white",
        updatedAt: seededAt,
        items: [
          { label: "Soave Classico 2023", value: 6.72, tastingsCount: 23, wineId: "wine_101" },
          { label: "Roero Arneis 2023", value: 6.61, tastingsCount: 21, wineId: "wine_102" },
          { label: "Verdicchio dei Castelli di Jesi 2022", value: 6.54, tastingsCount: 20, wineId: "wine_103" },
          { label: "Etna Bianco 2023", value: 6.43, tastingsCount: 19, wineId: "wine_104" },
          { label: "Fiano di Avellino 2022", value: 6.35, tastingsCount: 18, wineId: "wine_105" },
          { label: "Gavi del Comune di Gavi 2023", value: 6.24, tastingsCount: 17, wineId: "wine_106" },
          { label: "Lugana 2023", value: 6.16, tastingsCount: 16, wineId: "wine_107" },
          { label: "Greco di Tufo 2022", value: 6.03, tastingsCount: 14, wineId: "wine_108" },
          { label: "Vermentino di Gallura 2023", value: 5.91, tastingsCount: 13, wineId: "wine_109" },
          { label: "Pecorino 2023", value: 5.84, tastingsCount: 12, wineId: "wine_110" },
        ],
      },
    },
    {
      path: ["leaderboards", "category_white_top_wines_by_balance"],
      data: {
        metric: "top_wines_by_balance",
        scope: "category_white",
        updatedAt: seededAt,
        items: [
          { label: "Etna Bianco 2023", value: 6.83, tastingsCount: 19, wineId: "wine_104" },
          { label: "Fiano di Avellino 2022", value: 6.76, tastingsCount: 18, wineId: "wine_105" },
          { label: "Soave Classico 2023", value: 6.68, tastingsCount: 23, wineId: "wine_101" },
        ],
      },
    },
    {
      path: ["category_overview", "white", "facets", "descriptors"],
      data: {
        counts: {
          fresh: 45,
          floral: 38,
          mineral: 34,
          citrus: 32,
          elegant: 28,
          crisp: 24,
          delicate: 21,
          savory: 17,
        },
        updatedAt: seededAt,
      },
    },

    // -------------------- Screen 2B: ROSE --------------------
    {
      path: ["leaderboards", "category_rose_top_wines_by_enjoyment"],
      data: {
        metric: "top_wines_by_enjoyment",
        scope: "category_rose",
        updatedAt: seededAt,
        items: [
          { label: "Chiaretto di Bardolino 2023", value: 6.49, tastingsCount: 20, wineId: "wine_201" },
          { label: "Cerasuolo d’Abruzzo 2023", value: 6.41, tastingsCount: 19, wineId: "wine_202" },
          { label: "Rosato Salento 2023", value: 6.32, tastingsCount: 18, wineId: "wine_203" },
          { label: "Etna Rosato 2023", value: 6.24, tastingsCount: 17, wineId: "wine_204" },
          { label: "Valtènesi Rosé 2023", value: 6.13, tastingsCount: 16, wineId: "wine_205" },
          { label: "Toscana Rosato 2023", value: 6.04, tastingsCount: 14, wineId: "wine_206" },
          { label: "Lagrein Kretzer 2023", value: 5.96, tastingsCount: 13, wineId: "wine_207" },
          { label: "Cirò Rosato 2023", value: 5.88, tastingsCount: 12, wineId: "wine_208" },
          { label: "Montepulciano Rosato 2023", value: 5.79, tastingsCount: 11, wineId: "wine_209" },
          { label: "Sicilia Rosato 2023", value: 5.71, tastingsCount: 10, wineId: "wine_210" },
        ],
      },
    },
    {
      path: ["leaderboards", "category_rose_top_wines_by_balance"],
      data: {
        metric: "top_wines_by_balance",
        scope: "category_rose",
        updatedAt: seededAt,
        items: [
          { label: "Cerasuolo d’Abruzzo 2023", value: 6.63, tastingsCount: 19, wineId: "wine_202" },
          { label: "Etna Rosato 2023", value: 6.54, tastingsCount: 17, wineId: "wine_204" },
          { label: "Chiaretto di Bardolino 2023", value: 6.47, tastingsCount: 20, wineId: "wine_201" },
        ],
      },
    },
    {
      path: ["category_overview", "rose", "facets", "descriptors"],
      data: {
        counts: {
          fresh: 36,
          fruity: 34,
          floral: 29,
          delicate: 24,
          crisp: 21,
          elegant: 18,
          juicy: 15,
          light: 13,
        },
        updatedAt: seededAt,
      },
    },

    // -------------------- Screen 2B: SPARKLING --------------------
    {
      path: ["leaderboards", "category_sparkling_top_wines_by_enjoyment"],
      data: {
        metric: "top_wines_by_enjoyment",
        scope: "category_sparkling",
        updatedAt: seededAt,
        items: [
          { label: "Franciacorta Satèn", value: 6.91, tastingsCount: 24, wineId: "wine_301" },
          { label: "Trento DOC Brut", value: 6.84, tastingsCount: 23, wineId: "wine_302" },
          { label: "Prosecco Superiore DOCG", value: 6.73, tastingsCount: 22, wineId: "wine_303" },
          { label: "Alta Langa", value: 6.58, tastingsCount: 19, wineId: "wine_304" },
          { label: "Lambrusco di Sorbara", value: 6.31, tastingsCount: 18, wineId: "wine_305" },
          { label: "Franciacorta Rosé", value: 6.22, tastingsCount: 17, wineId: "wine_306" },
          { label: "Trento DOC Rosé", value: 6.12, tastingsCount: 16, wineId: "wine_307" },
          { label: "Asolo Prosecco Superiore", value: 6.03, tastingsCount: 14, wineId: "wine_308" },
          { label: "Metodo Classico Pas Dosé", value: 5.94, tastingsCount: 13, wineId: "wine_309" },
          { label: "Conegliano Valdobbiadene Extra Dry", value: 5.86, tastingsCount: 12, wineId: "wine_310" },
        ],
      },
    },
    {
      path: ["leaderboards", "category_sparkling_top_wines_by_balance"],
      data: {
        metric: "top_wines_by_balance",
        scope: "category_sparkling",
        updatedAt: seededAt,
        items: [
          { label: "Franciacorta Satèn", value: 6.92, tastingsCount: 24, wineId: "wine_301" },
          { label: "Trento DOC Brut", value: 6.85, tastingsCount: 23, wineId: "wine_302" },
          { label: "Alta Langa", value: 6.74, tastingsCount: 19, wineId: "wine_304" },
        ],
      },
    },
    {
      path: ["category_overview", "sparkling", "facets", "descriptors"],
      data: {
        counts: {
          fresh: 44,
          elegant: 37,
          crisp: 35,
          citrus: 29,
          refined: 24,
          vibrant: 22,
          creamy: 18,
          mineral: 16,
        },
        updatedAt: seededAt,
      },
    },

    // -------------------- Screen 2B: SPECIAL --------------------
    {
      path: ["leaderboards", "category_special_top_wines_by_enjoyment"],
      data: {
        metric: "top_wines_by_enjoyment",
        scope: "category_special",
        updatedAt: seededAt,
        items: [
          { label: "Passito di Pantelleria", value: 6.82, tastingsCount: 18, wineId: "wine_401" },
          { label: "Vin Santo del Chianti", value: 6.71, tastingsCount: 17, wineId: "wine_402" },
          { label: "Marsala Superiore", value: 6.53, tastingsCount: 16, wineId: "wine_403" },
          { label: "Recioto della Valpolicella", value: 6.41, tastingsCount: 15, wineId: "wine_404" },
          { label: "Aleatico Passito", value: 6.27, tastingsCount: 14, wineId: "wine_405" },
          { label: "Moscato Passito", value: 6.12, tastingsCount: 13, wineId: "wine_406" },
          { label: "Malvasia delle Lipari", value: 6.04, tastingsCount: 12, wineId: "wine_407" },
          { label: "Torcolato", value: 5.93, tastingsCount: 11, wineId: "wine_408" },
          { label: "Sagrantino Passito", value: 5.82, tastingsCount: 10, wineId: "wine_409" },
          { label: "Lacrima di Morro Passito", value: 5.73, tastingsCount: 9, wineId: "wine_410" },
        ],
      },
    },
    {
      path: ["leaderboards", "category_special_top_wines_by_balance"],
      data: {
        metric: "top_wines_by_balance",
        scope: "category_special",
        updatedAt: seededAt,
        items: [
          { label: "Passito di Pantelleria", value: 6.84, tastingsCount: 18, wineId: "wine_401" },
          { label: "Vin Santo del Chianti", value: 6.73, tastingsCount: 17, wineId: "wine_402" },
          { label: "Recioto della Valpolicella", value: 6.61, tastingsCount: 15, wineId: "wine_404" },
        ],
      },
    },
    {
      path: ["category_overview", "special", "facets", "descriptors"],
      data: {
        counts: {
          rich: 33,
          sweet: 31,
          intense: 27,
          honeyed: 22,
          "dried fruit": 19,
          velvety: 17,
          opulent: 14,
          persistent: 12,
        },
        updatedAt: seededAt,
      },
    },
  ];

  for (const entry of docs) {
    const ref = doc(db, ...entry.path);
    batch.set(ref, entry.data, { merge: true });
  }

  await batch.commit();
  return docs.length;
}