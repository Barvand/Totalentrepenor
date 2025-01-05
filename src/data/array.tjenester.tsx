// Define the type for a single service
export interface Tjeneste {
  title: string;
  description: string;
  image: { url: string; alt: string }[];
}

export const tjenester = [
  {
    id: "1",
    title: "Massehåndtering",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: [
      {
        url: "https://plus.unsplash.com/premium_photo-1681691161800-5481edc1a8d8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8YnVpbGRlcnN8ZW58MHx8MHx8fDA%3D",
        alt: "alt image",
      },
    ],
  },
  {
    id: "2",
    title: "Graving",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: [
      {
        url: "https://images.unsplash.com/photo-1680281724146-b11cba719eb0?q=80&w=2727&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        alt: "alt image",
      },
    ],
  },
  {
    id: "3",
    title: "Rørlegging utendørs (VA)",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: [
      {
        url: "https://images.unsplash.com/photo-1652272161002-9c7247227270?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTV8fGJ1aWxkZXJzfGVufDB8fDB8fHww",
        alt: "alt image",
      },
    ],
  },
  {
    id: "4",
    title: "Betongarbeid",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: [
      {
        url: "https://images.unsplash.com/photo-1605561768835-c03dd824ad41?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGJ1aWxkZXJzfGVufDB8fDB8fHww",
        alt: "alt image",
      },
    ],
  },
  {
    id: "5",
    title: "Anleggsgartner",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: [
      {
        url: "https://images.unsplash.com/photo-1622057655812-668d0c737144?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fGJ1aWxkZXJzfGVufDB8fDB8fHww",
        alt: "alt image",
      },
    ],
  },
  {
    id: "6",
    title: "Søknad, skilt og planer",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: [
      {
        url: "https://images.unsplash.com/photo-1622057655812-668d0c737144?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fGJ1aWxkZXJzfGVufDB8fDB8fHww",
        alt: "alt image",
      },
    ],
  },
  {
    id: "7",
    title: "Tak, nedløp og beslag",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: [
      {
        url: "https://images.unsplash.com/photo-1622057655812-668d0c737144?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fGJ1aWxkZXJzfGVufDB8fDB8fHww",
        alt: "alt image",
      },
    ],
  },
  {
    id: "8",
    title: "Gjerder",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: [
      {
        url: "https://images.unsplash.com/photo-1622057655812-668d0c737144?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fGJ1aWxkZXJzfGVufDB8fDB8fHww",
        alt: "alt image",
      },
    ],
  },
  {
    id: "9",
    title: "Mur og flis",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: [
      {
        url: "https://images.unsplash.com/photo-1622057655812-668d0c737144?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fGJ1aWxkZXJzfGVufDB8fDB8fHww",
        alt: "alt image",
      },
    ],
  },
  {
    id: "10",
    title: "Tømrerarbeid",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    image: [
      {
        url: "https://images.unsplash.com/photo-1622057655812-668d0c737144?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzl8fGJ1aWxkZXJzfGVufDB8fDB8fHww",
        alt: "alt image",
      },
    ],
  },
];
