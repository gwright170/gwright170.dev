interface CardParams {
  title: string;
  content: JSX.Element;
  image: {
    path: string;
    alt: string;
  };
}

export type { CardParams };
