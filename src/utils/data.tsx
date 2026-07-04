export interface Food {
  id: number;
  category: "highball" | "cuisine" | "dessert" | "etc" | "menu";
  nameKr: string;
  nameEn: string;
  price: number;
  descriptionKr: string;
  descriptionEn: string;
  etc: string | null;
  image: string;
}

export interface Book {
  id: number;
  category: string;
  view: number;
  description: string;
  title: string;
  subTitle: string;
  price: number;
  subdescription: string;
  contents: {
    textContents: string;
    image: string;
  }[];
  cover: string;
}

export interface Hair {
  id: number;
  sex: string;
  best: boolean;
  styleName: string;
  nameKr: string;
  nameEn: string;
  price: number;
  subdescriptionKr: string;
  subdescriptionEn: string;
  descriptionKr: string;
  descriptionEn: string;
  etc: string;
  image: string;
}

export const BookData: Book[] = [
  {
    id: 1,
    category: "헤어",
    view: 0,
    title: "제가 좋아하는 감정은 ‘노랑’입니다.'노랑의 시",
    subTitle: "이레오",
    description: "노랑의 시",
    price: 24000,
    subdescription:
      "Sleek cut creates a polished and sophisticated look with clean lines",
    contents: [
      {
        textContents: "",
        image: "/images/ireo_01.png",
      },
      {
        textContents: "",
        image: "/images/ireo_02.png",
      },
      {
        textContents: "",
        image: "/images/ireo_03.png",
      },
      {
        textContents: "",
        image: "/images/ireo_04.png",
      },
      {
        textContents: "",
        image: "/images/ireo_05.png",
      },
    ],
    cover: "/images/id1_cover.png",
  },
];
