type Product = {
  id: number;
  title: string;
  image: string;
  prices: {
    currency: string;
    price: number;
    symbol: string;
    lastprice: number;
  }[];
  star: number;
  commnets: number;
  buyer: number;
  views: number;
};
