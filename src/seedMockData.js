import { writeBatch, doc, Timestamp } from "firebase/firestore";
import { db } from "./Firebase";

const seededAt = Timestamp.fromDate(new Date("2026-03-31T12:00:00Z"));

export async function seedMockData() {
  const batch = writeBatch(db);

  const docs = [
    {
        path: [
            "wineResults",
            "red_03"
        ], 
        data: { 
            wineId: "red_03", 
            name: "Thurcalesu Cannonau di Sardegna DOC Classico", 
            producer: "Cantine Berritra", 
            vintage: 2022, 
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
            "red_04"
        ], 
        data: { 
            wineId: "red_04", 
            name: "Baillanu Cannonau di Sardegna DOC", 
            producer: "Berritta", 
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
            "red_21"
        ], 
        data: { 
            wineId: "red_21", 
            name: "Vignato Cataratte", 
            producer: "Fontana Vecchia", 
            vintage: 2020, 
            category: "red", 
            region: "Campania", 
            appellation: "Aglianico del Taburno DOCG", 
            country: "Italy", 
            grapeVarieties: [
                "Cabernet",
                "Ciliegiolo",
                "Sangiovese",
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
            "red_07"
        ], 
        data: { 
            wineId: "red_07", 
            name: "Eptesio Orvietano Rosso", 
            producer: "Castello di Montegiovese", 
            vintage: 2019, 
            category: "red", 
            region: "Umbria", 
            appellation: "Orvietano Rosso DOC", 
            country: "Italy", 
            grapeVarieties: [
                "Sangiovese",
                "Canaiolo",
            ], 
            answerKey: { 
                wineName: "Cabernet",
                region: "Umbria", 
                grapeVarieties: [
                    "Cabernet",
                    "Ciliegiolo",
                    "San Giovese",
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
            name: "Libero Falanghina del Sannio DOP", 
            producer: "Fontana Vecchia", 
            vintage: 2019, 
            category: "white", 
            region: "Campania", 
            appellation: "Falanghina del Sannio DOP", 
            country: "Italy", 
            grapeVarieties: [
                "Falanghina",
            ], 
            answerKey: { 
                wineName: "Falanghina",
                region: "Campania", 
                grapeVarieties: [
                    "Falanghina",
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
            name: "Rosada Cannonau di Sardegna Rosato", 
            producer: "Dolia Nova", 
            vintage: 2025, 
            category: "rose", 
            region: "Campania", 
            appellation: "Cannonau di Sardegna DOC", 
            country: "Italy", 
            grapeVarieties: [
                "Cannonau",
            ], 
            answerKey: { 
                wineName: "Cannonau",
                region: "Sardegna", 
                grapeVarieties: [
                    "Cannonau",
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