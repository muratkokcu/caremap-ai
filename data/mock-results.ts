export interface MockResult {
  hospital: string;
  doctor: string;
  bullets: string[];
  cost: number;
  statusDots: ("green" | "yellow" | "red")[];
}

export const mockResults: MockResult[] = [
  {
    hospital: "Acıbadem Hastanesi",
    doctor: "Prof. Dr. Mehmet Yılmaz",
    bullets: ["Yüksek Kalite", "Sigorta Kapsamında"],
    cost: 150,
    statusDots: ["green", "yellow"],
  },
  {
    hospital: "Florence Nightingale",
    doctor: "Uzm. Dr. Ayşe Demir",
    bullets: ["İyi Kalite", "Sigorta ile Kısmi Ödeme"],
    cost: 350,
    statusDots: ["yellow", "yellow"],
  },
  {
    hospital: "Medicana Hastanesi",
    doctor: "Op. Dr. Hakan Kurt",
    bullets: ["Orta Kalite", "Uygun Lokasyon"],
    cost: 420,
    statusDots: ["yellow", "red"],
  },
];
