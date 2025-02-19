import { ItemCardDef } from "./pages/pages.types";

async function headerSearchBarSuggestion(searchText:String) {
    try {
        if (searchText && searchText.trim() !== "") {
            const res = await fetch(`https://dummyjson.com/products/search?q=${searchText}`);
            if (!res.ok) {
                console.log(`API error on https://dummyjson.com/products/search?q=${searchText}`, res);
                return "API failed";
            }
            const body =  await res.json();
            if (typeof body === "object" && body.hasOwnProperty("products")) {
                return body.products.map((item:{id:number, title:string}) => ({
                    id: item.id,
                    title: item.title
                }))
            }
        }
    } catch (e) {
        console.log(`API error on https://dummyjson.com/products/search?q=${searchText}`, e);
    }
    return [];
}

async function itemsCatalogueSearchProducts(searchText:String) {
    try {
        if (searchText && searchText.trim() !== "") {
            const res = await fetch(`https://dummyjson.com/products/search?q=${searchText}`);
            if (!res.ok) {
                console.log(`API error on https://dummyjson.com/products/search?q=${searchText}`, res);
                return "API failed";
            }
            const body = await res.json();
            if (typeof body === "object" && body.hasOwnProperty("products")) {
                return body.products.map((item:ItemCardDef) => ({
                    id: item.id,
                    title: item.title,
                    description: item.description,
                    category: item.category,
                    price: item.price,
                    rating: item.rating,
                    stock: item.stock,
                    tags: item.tags,
                    sku: item.sku,
                    availabilityStatus: item.availabilityStatus,
                    thumbnail: item.thumbnail
                }));
            }
        }
    } catch (e) {
        console.log(`API error on https://dummyjson.com/products/search?q=${searchText}`)
    }
    return [];
}

async function itemsCatalogueCatagoryProducts(category:string) {
    try {
        if (category && category.trim() !== "") {
            const res = await fetch(`https://dummyjson.com/products/category/${category}`);
            if (!res.ok) {
                console.log(`API error on https://dummyjson.com/products/category/${category}`, res);
            }
            const body = await res.json();
            if (typeof body === "object" && body.hasOwnProperty("products")) {
                return body.products.map((item:ItemCardDef) => ({
                    id: item.id,
                    title: item.title,
                    description: item.description,
                    category: item.category,
                    price: item.price,
                    rating: item.rating,
                    stock: item.stock,
                    tags: item.tags,
                    sku: item.sku,
                    availabilityStatus: item.availabilityStatus,
                    thumbnail: item.thumbnail
                }));
            }
        }
    } catch (e) {
        console.log(`API error on https://dummyjson.com/products/category/${category}`)
    }
}

export {
    headerSearchBarSuggestion,
    itemsCatalogueSearchProducts,
    itemsCatalogueCatagoryProducts
}