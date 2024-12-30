import CategoryMenu from '@/components/Navbar/CategoryMenu';
import ProductCarusel from '@/components/Products/ProductCarusel';

const Product = [
  {
    id: 1,
    title: 'Laptop',
    image: 'https://placehold.jp/150x150.png',
    prices: [
      { currency: 'PLN', price: 2133.23, symbol: 'zł', lastprice: 1999 },
      { currency: 'EUR', price: 500, symbol: '€', lastprice: 499 },
    ],
    star: 4.5,
    commnets: 10,
    buyer: 222,
    views: 1000,
  },
  {
    id: 2,
    title: 'Laptop',
    image: 'https://placehold.jp/150x150.png',
    prices: [
      { currency: 'PLN', price: 2133.23, symbol: 'zł', lastprice: 1999 },
      { currency: 'EUR', price: 500, symbol: '€', lastprice: 499 },
    ],
    star: 4.5,
    commnets: 10,
    buyer: 222,
    views: 1000,
  },
  {
    id: 3,
    title: 'Laptop',
    image: 'https://placehold.jp/150x150.png',
    prices: [
      { currency: 'PLN', price: 2133.23, symbol: 'zł', lastprice: 1999 },
      { currency: 'EUR', price: 500, symbol: '€', lastprice: 499 },
    ],
    star: 4.5,
    commnets: 10,
    buyer: 222,
    views: 1000,
  },
  {
    id: 4,
    title: 'Laptop',
    image: 'https://placehold.jp/150x150.png',
    prices: [
      { currency: 'PLN', price: 2133.23, symbol: 'zł', lastprice: 1999 },
      { currency: 'EUR', price: 500, symbol: '€', lastprice: 499 },
    ],
    star: 4.5,
    commnets: 10,
    buyer: 222,
    views: 1000,
  },
  {
    id: 5,
    title: 'Laptop',
    image: 'https://placehold.jp/150x150.png',
    prices: [
      { currency: 'PLN', price: 2133.23, symbol: 'zł', lastprice: 1999 },
      { currency: 'EUR', price: 500, symbol: '€', lastprice: 499 },
    ],
    star: 4.5,
    commnets: 10,
    buyer: 222,
    views: 1000,
  },
];

export default function Home() {
  return (
    <>
      <section className=" flex gap-5">
        <CategoryMenu ClassName="fixed top-[85px] left-0 right-0 z-10  max-sm:hidden  2xl:relative 2xl:top-0 2xl:rounded-xl  2xl:card-wrapper " />
        <div className="h-[600px]  card-wrapper flex-1 max-2xl:mt-8 rounded-xl"></div>
      </section>

      <section className=" mt-10 flex gap-8 w-full 2xl:flex-row flex-col-reverse h-full">
        <div className="flex flex-col gap-8 2xl:w-[60%]  ">
          <ProductCarusel
            product={Product}
            title="polecane"
            carouserClass="lg:basis-1/2 xl:basis-1/3 "
          />
          <ProductCarusel
            product={Product}
            title="polecane"
            carouserClass="lg:basis-1/2 xl:basis-1/3 "
          />
        </div>
        <div className=" w-full h-[300px]  card-wrapper rounded-xl ">
          <div className="primary-gradient rounded-t-xl  h-[60px] flex justify-center items-center">
            <h3 className="h3-semibold first-letter:uppercase text-light900_dark300 ">
              Okazja dnia
            </h3>
          </div>
        </div>
      </section>
    </>
  );
}
