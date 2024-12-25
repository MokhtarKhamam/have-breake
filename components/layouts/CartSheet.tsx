import React from "react";
import { Button } from "../ui/button";
import { Icons } from "../icons";
import { Badge } from "../ui/badge";

const CartSheet = () => {
  return (
    <Button
      aria-label="Open cart"
      variant="outline"
      size="icon"
      className="relative"
    >
      {5 > 0 && (
        <Badge
          variant="secondary"
          className="absolute -right-2 -top-2 size-6 justify-center rounded-full p-2.5"
        >
          5
        </Badge>
      )}
      <Icons.cart className="size-4" aria-hidden="true" />
    </Button>
  );
};

export default CartSheet;
