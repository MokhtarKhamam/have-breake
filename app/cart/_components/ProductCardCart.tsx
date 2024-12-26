("");
import { useAppDispatch } from "@/app/redux";
import { PlaceholderImage } from "@/components/placeholder-image";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { cn, formatPrice } from "@/lib/utils";
import {
  decreaseProductQuantity,
  increaseProductQuantity,
  productCartProps,
  removeProductFromCart,
} from "@/state";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const ProductCardCart = ({
  product,
  className,
}: {
  product: productCartProps;
  className?: string;
}) => {
  const dispatch = useAppDispatch();
  return (
    <Card
      key={product.id}
      className={cn(
        "size-full overflow-hidden rounded-lg col-span-4 md:col-span-3",
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
        <CardContent className="space-y-1.5 p-4 flex justify-between items-center">
          <CardTitle className="line-clamp-1">{product.title}</CardTitle>
          <CardDescription className="line-clamp-1">
            {formatPrice(product.price)}
          </CardDescription>
        </CardContent>
        <CardContent className="px-3 py-0">
          Quantity: {product.quantity}
        </CardContent>
      </Link>
      <CardFooter className="p-4">
        <div className="flex w-full items-center space-x-2">
          <Button
            aria-label="Remove"
            size="sm"
            className="h-8 w-full rounded-sm"
            onClick={() => {
              dispatch(removeProductFromCart(product.id));
            }}
          >
            Remove
          </Button>
          <div className="flex justify-center items-center gap-3">
            <Button
              variant="secondary"
              onClick={() => dispatch(increaseProductQuantity(product.id))}
            >
              +
            </Button>
            <Button
              variant="secondary"
              onClick={() => dispatch(decreaseProductQuantity(product.id))}
            >
              -
            </Button>
          </div>
          {/* <Link
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
          </Link> */}
        </div>
      </CardFooter>
    </Card>
  );
};

export default ProductCardCart;
