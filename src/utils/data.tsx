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
    title: "노랑을 찾아서'노랑의 시 ",
    subTitle: "이레오",
    description: "삼행시 #1",
    price: 24000,
    subdescription:
      "Sleek cut creates a polished and sophisticated look with clean lines",
    contents: [
      {
        textContents: "",
        image: "/images/id1/id1_1.webp",
      },
      {
        textContents: "",
        image: "/images/id1/id1_2.webp",
      },
      {
        textContents: "",
        image: "/images/id1/id1_3.webp",
      },
      {
        textContents: "",
        image: "/images/id1/id1_4.webp",
      },
      {
        textContents: "",
        image: "/images/id1/id1_5.webp",
      },
      {
        textContents: "",
        image: "/images/id1/id1_6.webp",
      },
      {
        textContents: "",
        image: "/images/id1/id1_7.webp",
      },
      {
        textContents: "",
        image: "/images/id1/id1_8.webp",
      },
      {
        textContents: "",
        image: "/images/id1/id1_9.webp",
      },
      {
        textContents: "",
        image: "/images/id1/id1_10.webp",
      },
      {
        textContents: "",
        image: "/images/id1/id1_11.webp",
      },
      {
        textContents: "",
        image: "/images/id1/id1_12.webp",
      },
      {
        textContents: "",
        image: "/images/id1/id1_13.webp",
      },
      {
        textContents: "",
        image: "/images/id1/id1_14.webp",
      },
      {
        textContents: "",
        image: "/images/id1/id1_15.webp",
      },
      {
        textContents: "",
        image: "/images/id1/id1_16.webp",
      },
      {
        textContents: "",
        image: "/images/id1/id1_17.webp",
      },
      {
        textContents: "",
        image: "/images/id1/id1_18.webp",
      },
      {
        textContents: "",
        image: "/images/id1/id1_19.webp",
      },
      {
        textContents: "",
        image: "/images/id1/id1_20.webp",
      },
      {
        textContents: "",
        image: "/images/id1/id1_21.webp",
      },
      {
        textContents: "",
        image: "/images/id1/id1_22.webp",
      },
      {
        textContents: "",
        image: "/images/id1/id1_23.webp",
      },
      {
        textContents: "",
        image: "/images/id1/id1_24.webp",
      },
      {
        textContents: "",
        image: "/images/id1/id1_25.webp",
      },
      {
        textContents: "",
        image: "/images/id1/id1_26.webp",
      },
      {
        textContents: "",
        image: "/images/id1/id1_27.webp",
      },
      {
        textContents: "",
        image: "/images/id1/id1_28.webp",
      },
      {
        textContents: "",
        image: "/images/id1/id1_29.webp",
      },
      {
        textContents: "",
        image: "/images/id1/id1_30.webp",
      },
      {
        textContents: "",
        image: "/images/id1/id1_31.webp",
      },
      {
        textContents: "",
        image: "/images/id1/id1_32.webp",
      },
      {
        textContents: "",
        image: "/images/id1/id1_33.webp",
      },
      {
        textContents: "",
        image: "/images/id1/id1_34.webp",
      },
      {
        textContents: "",
        image: "/images/id1/id1_35.webp",
      },
      {
        textContents: "",
        image: "/images/id1/id1_36.webp",
      },
      {
        textContents: "",
        image: "/images/id1/id1_37.webp",
      },
      {
        textContents: "",
        image: "/images/id1/id1_38.webp",
      },
      {
        textContents: "",
        image: "/images/id1/id1_39.webp",
      },
      {
        textContents: "",
        image: "/images/id1/id1_40.webp",
      },
      {
        textContents: "",
        image: "/images/id1/id1_41.webp",
      },
      {
        textContents: "",
        image: "/images/id1/id1_42.webp",
      },
      {
        textContents: "",
        image: "/images/id1/id1_43.webp",
      },
      {
        textContents: "",
        image: "/images/id1/id1_44.webp",
      },
      {
        textContents: "",
        image: "/images/id1/id1_45.webp",
      },
      {
        textContents: "",
        image: "/images/id1/id1_46.webp",
      },
      {
        textContents: "",
        image: "/images/id1/id1_47.webp",
      },
      {
        textContents: "",
        image: "/images/id1/id1_48.webp",
      },
      {
        textContents: "",
        image: "/images/id1/id1_49.webp",
      },
      {
        textContents: "",
        image: "/images/id1/id1_50.webp",
      },
      {
        textContents: "",
        image: "/images/id1/id1_51.webp",
      },
      {
        textContents: "",
        image: "/images/id1/id1_52.webp",
      },
      {
        textContents: "",
        image: "/images/id1/id1_53.webp",
      },
      {
        textContents: "",
        image: "/images/id1/id1_54.webp",
      },
      {
        textContents: "",
        image: "/images/id1/id1_55.webp",
      },
      {
        textContents: "",
        image: "/images/id1/id1_56.webp",
      },
      {
        textContents: "",
        image: "/images/id1/id1_57.webp",
      },
      {
        textContents: "",
        image: "/images/id1/id1_58.webp",
      },
      {
        textContents: "",
        image: "/images/id1/id1_59.webp",
      },
      {
        textContents: "",
        image: "/images/id1/id1_60.webp",
      },
      {
        textContents: "",
        image: "/images/id1/id1_61.webp",
      },
      {
        textContents: "",
        image: "/images/id1/id1_62.webp",
      },
      {
        textContents: "",
        image: "/images/id1/id1_63.webp",
      },
    ],
    cover: "/images/id1_cover.png",
  },
  {
    id: 2,
    category: "헤어",
    view: 0,
    title: "노랑은 사랑일까?'노랑의 시",
    subTitle: "이레오",
    description: "삼행시 #2",
    price: 24000,
    subdescription:
      "Sleek cut creates a polished and sophisticated look with clean lines",
    contents: [
      {
        textContents: "",
        image: "/images/id2/id2_1.webp",
      },
      {
        textContents: "",
        image: "/images/id2/id2_2.webp",
      },
      {
        textContents: "",
        image: "/images/id2/id2_3.webp",
      },
      {
        textContents: "",
        image: "/images/id2/id2_4.webp",
      },
      {
        textContents: "",
        image: "/images/id2/id2_5.webp",
      },
      {
        textContents: "",
        image: "/images/id2/id2_6.webp",
      },
      {
        textContents: "",
        image: "/images/id2/id2_7.webp",
      },
      {
        textContents: "",
        image: "/images/id2/id2_8.webp",
      },
      {
        textContents: "",
        image: "/images/id2/id2_9.webp",
      },
      {
        textContents: "",
        image: "/images/id2/id2_10.webp",
      },
      {
        textContents: "",
        image: "/images/id2/id2_11.webp",
      },
      {
        textContents: "",
        image: "/images/id2/id2_12.webp",
      },
      {
        textContents: "",
        image: "/images/id2/id2_13.webp",
      },
      {
        textContents: "",
        image: "/images/id2/id2_14.webp",
      },
      {
        textContents: "",
        image: "/images/id2/id2_15.webp",
      },
      {
        textContents: "",
        image: "/images/id2/id2_16.webp",
      },
      {
        textContents: "",
        image: "/images/id2/id2_17.webp",
      },
      {
        textContents: "",
        image: "/images/id2/id2_18.webp",
      },
      {
        textContents: "",
        image: "/images/id2/id2_19.webp",
      },
      {
        textContents: "",
        image: "/images/id2/id2_20.webp",
      },
      {
        textContents: "",
        image: "/images/id2/id2_21.webp",
      },
      {
        textContents: "",
        image: "/images/id2/id2_22.webp",
      },
      {
        textContents: "",
        image: "/images/id2/id2_23.webp",
      },
      {
        textContents: "",
        image: "/images/id2/id2_24.webp",
      },
      {
        textContents: "",
        image: "/images/id2/id2_25.webp",
      },
      {
        textContents: "",
        image: "/images/id2/id2_26.webp",
      },
      {
        textContents: "",
        image: "/images/id2/id2_27.webp",
      },
      {
        textContents: "",
        image: "/images/id2/id2_28.webp",
      },
      {
        textContents: "",
        image: "/images/id2/id2_29.webp",
      },
      {
        textContents: "",
        image: "/images/id2/id2_30.webp",
      },
      {
        textContents: "",
        image: "/images/id2/id2_31.webp",
      },
      {
        textContents: "",
        image: "/images/id2/id2_32.webp",
      },
      {
        textContents: "",
        image: "/images/id2/id2_33.webp",
      },
      {
        textContents: "",
        image: "/images/id2/id2_34.webp",
      },
      {
        textContents: "",
        image: "/images/id2/id2_35.webp",
      },
      {
        textContents: "",
        image: "/images/id2/id2_36.webp",
      },
      {
        textContents: "",
        image: "/images/id2/id2_37.webp",
      },
      {
        textContents: "",
        image: "/images/id2/id2_38.webp",
      },
      {
        textContents: "",
        image: "/images/id2/id2_39.webp",
      },
      {
        textContents: "",
        image: "/images/id2/id2_40.webp",
      },
      {
        textContents: "",
        image: "/images/id2/id2_41.webp",
      },
      {
        textContents: "",
        image: "/images/id2/id2_42.webp",
      },
      {
        textContents: "",
        image: "/images/id2/id2_43.webp",
      },
      {
        textContents: "",
        image: "/images/id2/id2_44.webp",
      },
      {
        textContents: "",
        image: "/images/id2/id2_45.webp",
      },
      {
        textContents: "",
        image: "/images/id2/id2_46.webp",
      },
      {
        textContents: "",
        image: "/images/id2/id2_47.webp",
      },
      {
        textContents: "",
        image: "/images/id2/id2_48.webp",
      },
      {
        textContents: "",
        image: "/images/id2/id2_49.webp",
      },
      {
        textContents: "",
        image: "/images/id2/id2_50.webp",
      },
      {
        textContents: "",
        image: "/images/id2/id2_51.webp",
      },
    ],
    cover: "/images/id2_cover.png",
  },
];
