export interface IUser {
  image: string;
  username: string;
  email: string;
  password: string;
  links?: Link[];
}

export interface Link {
  title: string;
  link: string;
}

export const user: IUser[] = [
  {
    image: "",
    username: "Rodolfo",
    email: "rodolfo@gmail.com",
    password: "+++",
  },
  {
    image: "",
    username: "Alfonso",
    email: "Alfonso@gmail.com",
    password: "+++",
  },
  {
    image:
      "https://images.ctfassets.net/pdf29us7flmy/4ubcyzCmhrPeZe5upVZI9y/56aca4bcb3f55cd5a4bedc847872aee5/GettyImages-890837584-edited.jpg?w=720&q=100&fm=jpg",
    username: "Pedro",
    email: "Pedro@gmail.com",
    password: "+++",
    links: [
      {
        title: "portfolio",
        link: "https://jonathangarcnunez.com/",
      },
    ],
  },
];
