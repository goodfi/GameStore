import React from 'react';

import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Image from 'next/image';
import { Star } from 'lucide-react';

interface Props {
  product: Product[];
  title: string;
  isMore?: boolean;
  carouserClass?: string;
}

const ProductCarusel = ({ title, product, carouserClass }: Props) => {
  return (
    <div className="card-wrapper rounded-xl flex flex-col p-6 gap-8 items-center">
      <h3 className="h3-semibold first-letter:uppercase text-light900_dark300 w-full text-start ">
        {title}
      </h3>

      <Carousel
        opts={{
          align: 'start',
        }}
        className="w-full "
      >
        <CarouselContent>
          {product.map((item, index) => (
            <CarouselItem
              key={index}
              className={carouserClass || 'md:basis-1/2 lg:basis-1/3 '}
            >
              <div className="p-2 ">
                <Card>
                  <CardContent className="flex flex-col  items-center justify-center p-6">
                    <Image
                      src={item.image}
                      alt={item.title}
                      height={300}
                      width={200}
                    />
                    <h4 className="paragraph-semibold pt-6 text-start w-full">
                      {item.prices[0].price} {item.prices[0].currency}
                    </h4>
                    <p className="subtle-regular text-start w-full ">
                      Najniższa cena z 30 dni {item.prices[0].lastprice}{' '}
                      {item.prices[0].currency}
                    </p>
                    <p className="paragraph-regular pt-2 text-start w-full">
                      {item.title}
                    </p>
                    <div className="flex items-start w-full pt-4">
                      <Star className=" text-primary-500" />
                      <Star className=" text-primary-500" />
                      <Star className=" text-primary-500" />
                      <Star className=" text-primary-500" />
                      <Star />

                      <span className=" text-primary-500 pl-2">
                        ({item.commnets})
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
};

export default ProductCarusel;
