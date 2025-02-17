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

export {
    headerSearchBarSuggestion
}