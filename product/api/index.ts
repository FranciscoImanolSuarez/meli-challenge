import { Product } from "../types";
import { MercadoLibreResponse } from "./types";

export default {
    search: (query: string): Promise<Product[]> => {
      return fetch(`https://api.mercadolibre.com/sites/MLA/search?q=${query}`)
        .then((res) => res.json())
        .then((response: MercadoLibreResponse) =>
          response.results.map((rawProduct) => ({
            id: rawProduct.id,
            title: rawProduct.title,
            image: rawProduct.thumbnail,
            price: rawProduct.price,
            location: rawProduct.address.state_name,
          })),
        );
    },
  fetch: (id: string): Promise<Product> => {
    return Promise.resolve(null);
  },
};
