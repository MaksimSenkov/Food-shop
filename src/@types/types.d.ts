namespace Cart {
    type CartItemEntity = {
        readonly label: string;
        readonly size: string;

        readonly img: string;
    };

    type CartItem = {
        readonly id: number;
        readonly price: number;
        readonly amount: number;

        readonly item: CartItemEntity;
    };

    interface CartItemProps extends CartItem {}

    namespace Storage {
        type CartItemState = {
            totalPrice: number;
            items: CartItem[];
        };

        type ItemToCart = CartItemEntity & {
            readonly price: number;
        };
    }
}

namespace Navigation {
    namespace Storage {
        type InitialState = {
            readonly navItems: readonly string[];
            navItemIndex: number;
        };
    }
}

namespace Sort {
    type SortValue = {
        readonly label: "возрастанию" | "убыванию" | "цене" | "алфавиту";
        readonly type: "asc" | "desc" | "price" | "alph";
    };

    namespace Storage {
        type SortValue = Sort.SortValue;

        type InitialState = {
            readonly sortValues: SortValue[];
            sortId: number;
        };
    }
}

namespace FoodInfo {
    interface FoodCardProps extends Omit<Server.FoodData, "category" | "rating"> {}

    interface FoodListProps {
        items: Server.FoodData[];
    }
}

namespace Server {
    type Error = {
        readonly label: string;
        readonly message: string;
    };

    type FoodData = {
        readonly id: string;
        readonly imageUrl: string;
        readonly label: string;

        readonly sizes: string[];

        readonly price: number;
        readonly category: number[];
        readonly rating: number;
    };

    type InitialState = {
        items: FoodData[];
        status: "pending" | "fulfilled" | "rejected";
    };
}
