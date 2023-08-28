import React from "react";

import { useParams } from "react-router-dom";

import { MOCKAPI_LINK } from "../../../config";

export default function ItemDesc() {
    const { id } = useParams();

    const [item, setItem] = React.useState<Server.FoodData[]>();

    React.useEffect(() => {
        (async () => {
            try {
                const data = await fetch(`${MOCKAPI_LINK}/${id}`);
                let item = await data.json();
                setItem(item);
            } catch {
                console.error("Cannot load item");
                return;
            }
        })();
    }, []);

    if (!item) {
        console.error("Cannot load item");
        return;
    }

    return <div>Loading...</div>;
}
