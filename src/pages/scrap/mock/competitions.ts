export type SectionData = {
  id: string;
  Dday: string;
  title: string;
  view: number;
  scrap: number;
  mainImage: string;
  institution: string;
  date: string;
  examSchedules?: string;
  receptionSchedules?: string;
  location?: string;
};

export const competitions: SectionData[] = [
  {
    id: '1',
    Dday: '2023-12-01',
    title: '제목 1',
    view: 150,
    scrap: 20,
    mainImage: 'https://api.thecatapi.com/v1/images/search?limit=10',
    institution: '기관 1',
    date: '2023-11-01',
  },
  {
    id: '2',
    Dday: '2023-12-05',
    title: '제목 2',
    view: 200,
    scrap: 30,
    mainImage: 'https://api.thecatapi.com/v1/images/search?limit=10',
    institution: '기관 2',
    date: '2023-11-02',
  },
  {
    id: '3',
    Dday: '2023-12-10',
    title: '제목 3',
    view: 300,
    scrap: 40,
    mainImage: 'https://api.thecatapi.com/v1/images/search?limit=10',
    institution: '기관 3',
    date: '2023-11-03',
  },
  {
    id: '4',
    Dday: '2023-12-15',
    title: '제목 4',
    view: 400,
    scrap: 50,
    mainImage: 'image4.jpg',
    institution: '기관 4',
    date: '2023-11-04',
  },
  {
    id: '5',
    Dday: '2023-12-20',
    title: '제목 5',
    view: 500,
    scrap: 60,
    mainImage: 'image5.jpg',
    institution: '기관 5',
    date: '2023-11-05',
  },
  {
    id: '6',
    Dday: '2023-12-25',
    title: '제목 6',
    view: 600,
    scrap: 70,
    mainImage: 'image6.jpg',
    institution: '기관 6',
    date: '2023-11-06',
  },
  {
    id: '7',
    Dday: '2023-12-30',
    title: '제목 7',
    view: 700,
    scrap: 80,
    mainImage: 'image7.jpg',
    institution: '기관 7',
    date: '2023-11-07',
  },
  {
    id: '8',
    Dday: '2024-01-01',
    title: '제목 8',
    view: 800,
    scrap: 90,
    mainImage: 'image8.jpg',
    institution: '기관 8',
    date: '2023-11-08',
  },
  {
    id: '9',
    Dday: '2024-01-05',
    title: '제목 9',
    view: 900,
    scrap: 100,
    mainImage: 'image9.jpg',
    institution: '기관 9',
    date: '2023-11-09',
  },
  {
    id: '10',
    Dday: '2024-01-10',
    title: '제목 10',
    view: 1000,
    scrap: 110,
    mainImage: 'image10.jpg',
    institution: '기관 10',
    date: '2023-11-10',
  },
];
