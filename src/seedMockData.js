import { writeBatch, doc, Timestamp } from "firebase/firestore";
import { db } from "./Firebase";

const seededAt = Timestamp.fromDate(new Date("2026-03-31T12:00:00Z"));

export async function seedMockData() {
  const batch = writeBatch(db);

  const docs = [
    { 
        path: [
            "wineResults",
            "white_01"
        ], 
        data: { 
            wineId: "white_01", 
            name: "Chlamys Vermentino di Sardegna DOC", 
            producer: "Tenute Fois", 
            vintage: null, 
            category: "white", 
            region: "Sardegna", 
            appellation: "Vermentino di Sardegna DOC", 
            country: "Italy", 
            grapeVarieties: [
                "Vermentino"
            ], 
            answerKey: { 
                wineName: "Vermentino",
                region: "Sardegna", 
                grapeVarieties: [
                    "Vermentino"
                ],
            }, 
            isActive: true,
        },
    },

    {
        path: [
            "wineResults",
            "white_02"
        ], 
        data: { 
            wineId: "white_02", 
            name: "Tziu Martine Vermentino di Sardegna DOC", 
            producer: "Cantina Berritta", 
            vintage: null, 
            category: "white", 
            region: "Sardegna", 
            appellation: "Vermentino di Sardegna DOC", 
            country: "Italy", 
            grapeVarieties: [
                "Vermentino"
            ], 
            answerKey: { 
                wineName: "Vermentino",
                region: "Sardegna", 
                grapeVarieties: [
                    "Vermentino"
                ],
            }, 
            isActive: true,
        },
    },

    {
        path: [
            "wineResults",
            "white_03"
        ], 
        data: { 
            wineId: "white_03", 
            name: "Aghiloja Oro Vermentino di Gallura DOCG Superiore", 
            producer: "Cantina del Vermentino Monti", 
            vintage: null, 
            category: "white", 
            region: "Sardegna", 
            appellation: "Vermentino di Gallura DOCG Superiore", 
            country: "Italy", 
            grapeVarieties: [
                "Vermentino"
            ], 
            answerKey: { 
                wineName: "Vermentino",
                region: "Sardegna", 
                grapeVarieties: [
                    "Vermentino"
                ],
            }, 
            isActive: true,
        },
    },

    {
        path: [
            "wineResults",
            "white_04"
        ], 
        data: { 
            wineId: "white_04", 
            name: "Taerra Vermentino di Gallura DOCG Superiore", 
            producer: "Cantina Tani", 
            vintage: null, 
            category: "white", 
            region: "Sardegna", 
            appellation: "Vermentino di Gallura DOCG Superiore", 
            country: "Italy", 
            grapeVarieties: [
                "Vermentino"
            ], 
            answerKey: { 
                wineName: "Vermentino",
                region: "Sardegna", 
                grapeVarieties: [
                    "Vermentino"
                ],
            }, 
            isActive: true,
        },
    },

    {
        path: [
            "wineResults",
            "white_05"
        ], 
        data: { 
            wineId: "white_05", 
            name: "Titus Grechetto Umbria IGT", 
            producer: "Chiorri", 
            vintage: null, 
            category: "white", 
            region: "Umbria", 
            appellation: "Umbria IGT", 
            country: "Italy", 
            grapeVarieties: [
                "Grechetto"
            ], 
            answerKey: { 
                wineName: "Grechetto",
                region: "Umbria", 
                grapeVarieties: [
                    "Grechetto"
                ],
            }, 
            isActive: true,
        },
    },

    {
    path: [
        "wineResults",
        "white_06"
    ], 
    data: { 
        wineId: "white_06", 
        name: "Ilvania Coda di Volpe IGP", 
        producer: "CorteCorbo", 
        vintage: null, 
        category: "white", 
        region: "Campania", 
        appellation: "Coda di Volpe IGP", 
        country: "Italy", 
        grapeVarieties: [
            "Coda di Volpe",
            "Falanghina"
        ], 
        answerKey: { 
            wineName: "Coda di Volpe",
            region: "Campania", 
            grapeVarieties: [
                "Coda di Volpe",
                "Falanghina"
            ],
        }, 
        isActive: true,
    },
},

{
    path: [
        "wineResults",
        "white_07"
    ], 
    data: { 
        wineId: "white_07", 
        name: "Narami Vermentino di Sardegna DOC", 
        producer: "Deaddis", 
        vintage: 2024, 
        category: "white", 
        region: "Sardegna", 
        appellation: "Vermentino di Sardegna DOC", 
        country: "Italy", 
        grapeVarieties: [
            "Vermentino"
        ], 
        answerKey: { 
            wineName: "Vermentino",
            region: "Sardegna", 
            grapeVarieties: [
                "Vermentino"
            ],
        }, 
        isActive: true,
    },
},

{
    path: [
        "wineResults",
        "white_08"
    ], 
    data: { 
        wineId: "white_08", 
        name: "Funtanafrisca Isola dei Nuraghi IGT", 
        producer: "Fradiles", 
        vintage: null, 
        category: "white", 
        region: "Sardegna", 
        appellation: "Isola dei Nuraghi IGT", 
        country: "Italy", 
        grapeVarieties: [
            "Local White Grapes"
        ], 
        answerKey: { 
            wineName: "White Blend",
            region: "Sardegna", 
            grapeVarieties: [
                "Nuragus"
            ],
        }, 
        isActive: true,
    },
},

{
    path: [
        "wineResults",
        "white_09"
    ], 
    data: { 
        wineId: "white_09", 
        name: "Nou Vermentino di Gallura DOCG", 
        producer: "Cantina Li Duni", 
        vintage: null, 
        category: "white", 
        region: "Sardegna", 
        appellation: "Vermentino di Gallura DOCG", 
        country: "Italy", 
        grapeVarieties: [
            "Vermentino"
        ], 
        answerKey: { 
            wineName: "Vermentino",
            region: "Sardegna", 
            grapeVarieties: [
                "Vermentino"
            ],
        }, 
        isActive: true,
    },
},

{
    path: [
        "wineResults",
        "white_10"
    ], 
    data: { 
        wineId: "white_10", 
        name: "Fluusa Falanghina del Sannio DOC", 
        producer: "Nifo Sarrapochiello", 
        vintage: null, 
        category: "white", 
        region: "Campania", 
        appellation: "Falanghina del Sannio DOC", 
        country: "Italy", 
        grapeVarieties: [
            "Falanghina"
        ], 
        answerKey: { 
            wineName: "Falanghina",
            region: "Campania", 
            grapeVarieties: [
                "Falanghina"
            ],
        }, 
        isActive: true,
    },
},


{
    path: [
        "wineResults",
        "red_01"
    ], 
    data: { 
        wineId: "red_01", 
        name: "Kiri Cannonau di Sardegna DOC", 
        producer: "Cantina del Vermentino Monti", 
        vintage: null, 
        category: "red", 
        region: "Sardegna", 
        appellation: "Cannonau di Sardegna DOC", 
        country: "Italy", 
        grapeVarieties: [
            "Cannonau"
        ], 
        answerKey: { 
            wineName: "Cannonau",
            region: "Sardegna", 
            grapeVarieties: [
                "Cannonau"
            ],
        }, 
        isActive: true,
    },
},

{
    path: [
        "wineResults",
        "red_02"
    ], 
    data: { 
        wineId: "red_02", 
        name: "D’Erasmo Aglianico del Taburno DOCG Riserva", 
        producer: "Nifo Sarrapochiello", 
        vintage: null, 
        category: "red", 
        region: "Campania", 
        appellation: "Aglianico del Taburno DOCG Riserva", 
        country: "Italy", 
        grapeVarieties: [
            "Aglianico"
        ], 
        answerKey: { 
            wineName: "Aglianico",
            region: "Campania", 
            grapeVarieties: [
                "Aglianico"
            ],
        }, 
        isActive: true,
    },
},

{
    path: [
        "wineResults",
        "red_03"
    ], 
    data: { 
        wineId: "red_03", 
        name: "Angraris Mandrolisai Rosso Superiore DOC", 
        producer: "Mandrolisai", 
        vintage: null, 
        category: "red", 
        region: "Sardegna", 
        appellation: "Mandrolisai Rosso Superiore DOC", 
        country: "Italy", 
        grapeVarieties: [
            "Bovale Sardo",
            "Cannonau",
            "Monica"
        ], 
        answerKey: { 
            wineName: "Mandrolisai",
            region: "Sardegna", 
            grapeVarieties: [
                "Bovale Sardo",
                "Cannonau",
                "Monica"
            ],
        }, 
        isActive: true,
    },
},

{
    path: [
        "wineResults",
        "red_04"
    ], 
    data: { 
        wineId: "red_04", 
        name: "Azzara Mandrolisai DOC", 
        producer: "Mandrolisai", 
        vintage: null, 
        category: "red", 
        region: "Sardegna", 
        appellation: "Mandrolisai DOC", 
        country: "Italy", 
        grapeVarieties: [
            "Bovale Sardo",
            "Cannonau",
            "Monica"
        ], 
        answerKey: { 
            wineName: "Mandrolisai",
            region: "Sardegna", 
            grapeVarieties: [
                "Bovale Sardo",
                "Cannonau",
                "Monica"
            ],
        }, 
        isActive: true,
    },
},

{
    path: [
        "wineResults",
        "red_05"
    ], 
    data: { 
        wineId: "red_05", 
        name: "Bagadìu Isola dei Nuraghi Bovale IGT", 
        producer: "Fradiles", 
        vintage: null, 
        category: "red", 
        region: "Sardegna", 
        appellation: "Isola dei Nuraghi IGT", 
        country: "Italy", 
        grapeVarieties: [
            "Bovale Sardo"
        ], 
        answerKey: { 
            wineName: "Bovale",
            region: "Sardegna", 
            grapeVarieties: [
                "Bovale Sardo"
            ],
        }, 
        isActive: true,
    },
},

{
    path: [
        "wineResults",
        "red_06"
    ], 
    data: { 
        wineId: "red_06", 
        name: "Fradiles Mandrolisai DOC", 
        producer: "Fradiles", 
        vintage: null, 
        category: "red", 
        region: "Sardegna", 
        appellation: "Mandrolisai DOC", 
        country: "Italy", 
        grapeVarieties: [
            "Bovale Sardo",
            "Cannonau",
            "Monica"
        ], 
        answerKey: { 
            wineName: "Mandrolisai",
            region: "Sardegna", 
            grapeVarieties: [
                "Bovale Sardo",
                "Cannonau",
                "Monica"
            ],
        }, 
        isActive: true,
    },
},

{
    path: [
        "wineResults",
        "red_07"
    ], 
    data: { 
        wineId: "red_07", 
        name: "Istentu Mandrolisai Rosso Superiore DOC", 
        producer: "Fradiles", 
        vintage: null, 
        category: "red", 
        region: "Sardegna", 
        appellation: "Mandrolisai Rosso Superiore DOC", 
        country: "Italy", 
        grapeVarieties: [
            "Bovale Sardo",
            "Cannonau",
            "Monica"
        ], 
        answerKey: { 
            wineName: "Mandrolisai",
            region: "Sardegna", 
            grapeVarieties: [
                "Bovale Sardo",
                "Cannonau",
                "Monica"
            ],
        }, 
        isActive: true,
    },
},

{
    path: [
        "wineResults",
        "red_08"
    ], 
    data: { 
        wineId: "red_08", 
        name: "Arcano Aglianico Sannio DOP Riserva", 
        producer: "Terre Stregate", 
        vintage: null, 
        category: "red", 
        region: "Campania", 
        appellation: "Aglianico Sannio DOP Riserva", 
        country: "Italy", 
        grapeVarieties: [
            "Aglianico"
        ], 
        answerKey: { 
            wineName: "Aglianico",
            region: "Campania", 
            grapeVarieties: [
                "Aglianico"
            ],
        }, 
        isActive: true,
    },
},

{
    path: [
        "wineResults",
        "red_09"
    ], 
    data: { 
        wineId: "red_09", 
        name: "Antyco Taurasi DOCG", 
        producer: "CorteCorbo", 
        vintage: null, 
        category: "red", 
        region: "Campania", 
        appellation: "Taurasi DOCG", 
        country: "Italy", 
        grapeVarieties: [
            "Aglianico"
        ], 
        answerKey: { 
            wineName: "Aglianico",
            region: "Campania", 
            grapeVarieties: [
                "Aglianico"
            ],
        }, 
        isActive: true,
    },
},

{
    path: [
        "wineResults",
        "red_10"
    ], 
    data: { 
        wineId: "red_10", 
        name: "Anthonia Campi Taurasini DOC", 
        producer: "CorteCorbo", 
        vintage: null, 
        category: "red", 
        region: "Campania", 
        appellation: "Campi Taurasini DOC", 
        country: "Italy", 
        grapeVarieties: [
            "Aglianico",
            "Syrah"
        ], 
        answerKey: { 
            wineName: "Aglianico",
            region: "Campania", 
            grapeVarieties: [
                "Aglianico",
                "Syrah"
            ],
        }, 
        isActive: true,
    },
},

{
    path: [
        "wineResults",
        "red_11"
    ], 
    data: { 
        wineId: "red_11", 
        name: "Carammare Cannonau di Sardegna DOC", 
        producer: "Ligios", 
        vintage: null, 
        category: "red", 
        region: "Sardegna", 
        appellation: "Cannonau di Sardegna DOC", 
        country: "Italy", 
        grapeVarieties: [
            "Cannonau"
        ], 
        answerKey: { 
            wineName: "Cannonau",
            region: "Sardegna", 
            grapeVarieties: [
                "Cannonau"
            ],
        }, 
        isActive: true,
    },
},

{
    path: [
        "wineResults",
        "red_12"
    ], 
    data: { 
        wineId: "red_12", 
        name: "Cerasio Cannonau di Sardegna DOC", 
        producer: "Pedres", 
        vintage: null, 
        category: "red", 
        region: "Sardegna", 
        appellation: "Cannonau di Sardegna DOC", 
        country: "Italy", 
        grapeVarieties: [
            "Cannonau"
        ], 
        answerKey: { 
            wineName: "Cannonau",
            region: "Sardegna", 
            grapeVarieties: [
                "Cannonau"
            ],
        }, 
        isActive: true,
    },
},

{
    path: [
        "wineResults",
        "red_13"
    ], 
    data: { 
        wineId: "red_13", 
        name: "Chiaroscuro Isola dei Nuraghi IGT", 
        producer: "Mulleri", 
        vintage: 2021, 
        category: "red", 
        region: "Sardegna", 
        appellation: "Isola dei Nuraghi IGT", 
        country: "Italy", 
        grapeVarieties: [
            "Monica",
            "Ciliegiolo",
            "Barbera Sarda"
        ], 
        answerKey: { 
            wineName: "Monica, Ciliegiolo e Barbera Sarda",
            region: "Sardegna", 
            grapeVarieties: [
                "Monica",
                "Ciliegiolo",
                "Barbera Sarda"
            ],
        }, 
        isActive: true,
    },
},

{
    path: [
        "wineResults",
        "red_14"
    ], 
    data: { 
        wineId: "red_14", 
        name: "Arcuentu Terralba Bovale Superiore DOC", 
        producer: "Cantine del Bovale", 
        vintage: null, 
        category: "red", 
        region: "Sardegna", 
        appellation: "Terralba Bovale Superiore DOC", 
        country: "Italy", 
        grapeVarieties: [
            "Bovale"
        ], 
        answerKey: { 
            wineName: "Bovale",
            region: "Sardegna", 
            grapeVarieties: [
                "Bovale"
            ],
        }, 
        isActive: true,
    },
},

{
    path: [
        "wineResults",
        "red_15"
    ], 
    data: { 
        wineId: "red_15", 
        name: "Terra Pintada Cannonau di Sardegna DOC", 
        producer: "Cantine del Bovale", 
        vintage: null, 
        category: "red", 
        region: "Sardegna", 
        appellation: "Cannonau di Sardegna DOC", 
        country: "Italy", 
        grapeVarieties: [
            "Cannonau"
        ], 
        answerKey: { 
            wineName: "Cannonau",
            region: "Sardegna", 
            grapeVarieties: [
                "Cannonau"
            ],
        }, 
        isActive: true,
    },
},

{
    path: [
        "wineResults",
        "red_16"
    ], 
    data: { 
        wineId: "red_16", 
        name: "Connubio Terre del Volturno IGT", 
        producer: "Vestini Campagnano", 
        vintage: 2011, 
        category: "red", 
        region: "Campania", 
        appellation: "Terre del Volturno IGT", 
        country: "Italy", 
        grapeVarieties: [
            "Pallagrello Nero",
            "Casavecchia"
        ], 
        answerKey: { 
            wineName: "Pallagrello Nero e Casavecchia",
            region: "Campania", 
            grapeVarieties: [
                "Pallagrello Nero",
                "Casavecchia"
            ],
        }, 
        isActive: true,
    },
},

{
    path: [
        "wineResults",
        "red_17"
    ], 
    data: { 
        wineId: "red_17", 
        name: "Serranu Isola dei Nuraghi IGT", 
        producer: "Cantina Tani", 
        vintage: null, 
        category: "red", 
        region: "Sardegna", 
        appellation: "Isola dei Nuraghi IGT", 
        country: "Italy", 
        grapeVarieties: [
            "Cannonau",
            "Muristellu",
            "Merlot"
        ], 
        answerKey: { 
            wineName: "Cannonau",
            region: "Sardegna", 
            grapeVarieties: [
                "Cannonau",
		            "Muristellu",
		            "Merlot"
            ],
        }, 
        isActive: true,
    },
},

{
    path: [
        "wineResults",
        "red_18"
    ], 
    data: { 
        wineId: "red_18", 
        name: "Caudio Irpinia DOP Sciascinoso", 
        producer: "Tenuta Vitagliano", 
        vintage: null, 
        category: "red", 
        region: "Campania", 
        appellation: "Irpinia DOP", 
        country: "Italy", 
        grapeVarieties: [
            "Sciascinoso"
        ], 
        answerKey: { 
            wineName: "Sciascinoso",
            region: "Campania", 
            grapeVarieties: [
                "Sciascinoso"
            ],
        }, 
        isActive: true,
    },
},

{
    path: [
        "wineResults",
        "red_19"
    ], 
    data: { 
        wineId: "red_19", 
        name: "Padres Isola dei Nuraghi IGT Rosso", 
        producer: "Cantina Gianluigi Deaddis", 
        vintage: 2022, 
        category: "red", 
        region: "Sardegna", 
        appellation: "Isola dei Nuraghi IGT Rosso", 
        country: "Italy", 
        grapeVarieties: [
            "Cannonau",
            "Bovale Sardo"
        ], 
        answerKey: { 
            wineName: "Cannonau",
            region: "Sardegna", 
            grapeVarieties: [
                "Cannonau"
            ],
        }, 
        isActive: true,
    },
},

{
    path: [
        "wineResults",
        "sparkling_01"
    ], 
    data: { 
        wineId: "sparkling_01", 
        name: "Ventiventi Rosé Lambrusco di Modena DOC", 
        producer: "Ventiventi", 
        vintage: null, 
        category: "sparkling", 
        region: "Emilia-Romagna", 
        appellation: "Lambrusco di Modena DOC", 
        country: "Italy", 
        grapeVarieties: [
            "Lambrusco di Sorbara"
        ], 
        answerKey: { 
            wineName: "Lambrusco",
            region: "Emilia-Romagna", 
            grapeVarieties: [
                "Lambrusco"
            ],
        }, 
        isActive: true,
    },
},

{
    path: [
        "wineResults",
        "sparkling_02"
    ], 
    data: { 
        wineId: "sparkling_02", 
        name: "La Vie Lambrusco di Modena DOC", 
        producer: "Ventiventi", 
        vintage: null, 
        category: "sparkling", 
        region: "Emilia-Romagna", 
        appellation: "Lambrusco di Modena DOC", 
        country: "Italy", 
        grapeVarieties: [
            "Lambrusco di Sorbara"
        ], 
        answerKey: { 
            wineName: "Lambrusco",
            region: "Emilia-Romagna", 
            grapeVarieties: [
                "Lambrusco"
            ],
        }, 
        isActive: true,
    },
},

{
    path: [
        "wineResults",
        "sparkling_03"
    ], 
    data: { 
        wineId: "sparkling_03", 
        name: "Rouge de Noirs Lambrusco Salamino di Santa Croce DOC", 
        producer: "Ventiventi", 
        vintage: null, 
        category: "sparkling", 
        region: "Emilia-Romagna", 
        appellation: "Lambrusco Salamino di Santa Croce DOC", 
        country: "Italy", 
        grapeVarieties: [
            "Lambrusco Salamino"
        ], 
        answerKey: { 
            wineName: "Lambrusco",
            region: "Emilia-Romagna", 
            grapeVarieties: [
                "Lambrusco"
            ],
        }, 
        isActive: true,
    },
},

{
    path: [
        "wineResults",
        "sparkling_04"
    ], 
    data: { 
        wineId: "sparkling_04", 
        name: "Li Junchi Rosé Isola dei Nuraghi IGT", 
        producer: "Cantina Li Duni", 
        vintage: null, 
        category: "sparkling", 
        region: "Sardegna", 
        appellation: "Isola dei Nuraghi IGT", 
        country: "Italy", 
        grapeVarieties: [
            "Cannonau",
            "Monica",
        ], 
        answerKey: { 
            wineName: "Cannonau Rosé",
            region: "Sardegna", 
            grapeVarieties: [
                "Cannonau",
                "Monica",
            ],
        }, 
        isActive: true,
    },
},

{
    path: [
        "wineResults",
        "sparkling_05"
    ], 
    data: { 
        wineId: "sparkling_05", 
        name: "Pedres Brut Vermentino di Gallura DOCG", 
        producer: "Pedres", 
        vintage: null, 
        category: "sparkling", 
        region: "Sardegna", 
        appellation: "Vermentino di Gallura DOCG", 
        country: "Italy", 
        grapeVarieties: [
            "Vermentino"
        ], 
        answerKey: { 
            wineName: "Vermentino",
            region: "Sardegna", 
            grapeVarieties: [
                "Vermentino"
            ],
        }, 
        isActive: true,
    },
},

{
    path: [
        "wineResults",
        "sparkling_06"
    ], 
    data: { 
        wineId: "sparkling_06", 
        name: "Spumante Rosato Metodo Classico Brut", 
        producer: "Ligios", 
        vintage: null, 
        category: "sparkling", 
        region: "Sardegna", 
        appellation: null, 
        country: "Italy", 
        grapeVarieties: [
            "Native Red Grapes"
        ], 
        answerKey: { 
            wineName: "Rosé Sparkling",
            region: "Sardegna", 
            grapeVarieties: [
                "Native Red Grapes"
            ],
        }, 
        isActive: true,
    },
},

{
    path: [
        "wineResults",
        "sparkling_07"
    ], 
    data: { 
        wineId: "sparkling_07", 
        name: "Pallium Falanghina Frizzante Campania IGP", 
        producer: "Tenuta Vitagliano", 
        vintage: null, 
        category: "white", 
        region: "Campania", 
        appellation: "Campania IGP", 
        country: "Italy", 
        grapeVarieties: [
            "Falanghina"
        ], 
        answerKey: { 
            wineName: "Falanghina",
            region: "Campania", 
            grapeVarieties: [
                "Falanghina"
            ],
        }, 
        isActive: true,
    },
},

{
    path: [
        "wineResults",
        "rose_01"
    ], 
    data: { 
        wineId: "rose_01", 
        name: "Ventiventi Rosé Lambrusco di Modena DOC", 
        producer: "Ventiventi", 
        vintage: null, 
        category: "rose", 
        region: "Emilia-Romagna", 
        appellation: "Lambrusco di Modena DOC", 
        country: "Italy", 
        grapeVarieties: [
            "Lambrusco di Sorbara"
        ], 
        answerKey: { 
            wineName: "Lambrusco",
            region: "Emilia-Romagna", 
            grapeVarieties: [
                "Lambrusco"
            ],
        }, 
        isActive: true,
    },
},

{
    path: [
        "wineResults",
        "rose_02"
    ], 
    data: { 
        wineId: "rose_02", 
        name: "Durusia Isola dei Nuraghi Rosato IGT", 
        producer: "Fradiles", 
        vintage: null, 
        category: "rose", 
        region: "Sardegna", 
        appellation: "Isola dei Nuraghi Rosato IGT", 
        country: "Italy", 
        grapeVarieties: [
            "Bovale Sardo",
            "Cannonau",
            "Monica"
        ], 
        answerKey: { 
            wineName: "Rosato",
            region: "Sardegna", 
            grapeVarieties: [
                "Bovale Sardo",
                "Cannonau",
                "Monica"
            ],
        }, 
        isActive: true,
    },
},


{
    path: [
        "wineResults",
        "rose_04"
    ], 
    data: { 
        wineId: "rose_04", 
        name: "Li Junchi Rosé Isola dei Nuraghi IGT", 
        producer: "Cantina Li Duni", 
        vintage: null, 
        category: "rose", 
        region: "Sardegna", 
        appellation: "Isola dei Nuraghi IGT", 
        country: "Italy", 
        grapeVarieties: [
            "Native Red Grapes"
        ], 
        answerKey: { 
            wineName: "Rosé Sparkling",
            region: "Sardegna", 
            grapeVarieties: [
                "Native Red Grapes"
            ],
        }, 
        isActive: true,
    },
},

{
    path: [
        "wineResults",
        "rose_06"
    ], 
    data: { 
        wineId: "rose_06", 
        name: "Spumante Rosato Metodo Classico Brut", 
        producer: "Ligios", 
        vintage: null, 
        category: "rose", 
        region: "Sardegna", 
        appellation: null, 
        country: "Italy", 
        grapeVarieties: [
            "Native Red Grapes"
        ], 
        answerKey: { 
            wineName: "Rosé Sparkling",
            region: "Sardegna", 
            grapeVarieties: [
                "Native Red Grapes"
            ],
        }, 
        isActive: true,
    },
},

{
    path: [
        "wineResults",
        "special_01"
    ], 
    data: { 
        wineId: "special_01", 
        name: "Chiaroscuro Orange Wine", 
        producer: "Mulleri", 
        vintage: 2020, 
        category: "special", 
        region: "Sardegna", 
        appellation: "Orange Wine", 
        country: "Italy", 
        grapeVarieties: [
            "Nuragus",
            "Local White Grapes"
        ], 
        answerKey: { 
            wineName: "Orange Wine",
            region: "Sardegna", 
            grapeVarieties: [
                "Nuragus"
            ],
        }, 
        isActive: true,
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