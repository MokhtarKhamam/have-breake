import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import Link from "next/link";
import { AspectRatio } from "@radix-ui/react-aspect-ratio";
import Image from "next/image";
import { PlaceholderImage } from "./placeholder-image";
import { cn, formatPrice } from "@/lib/utils";
import { Button, buttonVariants } from "./ui/button";
import { EyeOpenIcon } from "@radix-ui/react-icons";

export interface productProps {
  id: string;
  authorId: string;
  title: string;
  price: number;
  unit: string;
  createdAt: string;
  updatedAt: string;
  image: string;
}

const ProductCard = ({
  product,
  className,
}: {
  product: productProps;
  className?: string;
}) => {
  return (
    <Card
      key={product.id}
      className={cn(
        "size-full overflow-hidden rounded-lg col-span-6 md:col-span-4 lg:col-span-3",
        className
      )}
    >
      <Link aria-label={product.title} href={`/product/${product.id}`}>
        <CardHeader className="border-b p-0">
          <AspectRatio ratio={4 / 3}>
            {product?.image ? (
              <Image
                src={product.image ?? "/images/product-placeholder.webp"}
                alt={product?.title ?? product.title}
                className="object-cover"
                sizes="(min-width: 1024px) 20vw, (min-width: 768px) 25vw, (min-width: 640px) 33vw, (min-width: 475px) 50vw, 100vw"
                fill
                loading="lazy"
              />
            ) : (
              <PlaceholderImage className="rounded-none" asChild />
            )}
          </AspectRatio>
        </CardHeader>
        <span className="sr-only">{product.title}</span>
      </Link>
      <Link href={`/product/${product.id}`} tabIndex={-1}>
        <CardContent className="space-y-1.5 p-4">
          <CardTitle className="line-clamp-1">{product.title}</CardTitle>
          <CardDescription className="line-clamp-1">
            {formatPrice(product.price)}
          </CardDescription>
        </CardContent>
      </Link>
      <CardFooter className="p-4">
        <div className="flex w-full items-center space-x-2">
          <Button
            aria-label="Add to cart"
            size="sm"
            className="h-8 w-full rounded-sm"
          >
            Add to cart
          </Button>
          <Link
            href={`/preview/product/${product.id}`}
            title="Preview"
            className={cn(
              buttonVariants({
                variant: "secondary",
                size: "icon",
                className: "h-8 w-8 shrink-0",
              })
            )}
          >
            <EyeOpenIcon className="size-4" aria-hidden="true" />
            <span className="sr-only">Preview</span>
          </Link>
        </div>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
