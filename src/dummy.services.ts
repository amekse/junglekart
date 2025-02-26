import { adContents, categories } from "./common.constants";
import { AdContentDef, CategoryDef } from "./common.types";

const getAdContent = () => {
    let content:AdContentDef = {
        title: '',
        para: '',
        imageUrl: '',
        prodTitle: ''
    };
    function generateData() {
        content = adContents[Math.floor(Math.random() * adContents.length)];
        return content;
    }
    return (content.title.trim() !== "") ? content : generateData();
};

const getHomeSectionCategories = () => {
    let sectionCategories:CategoryDef[] = [];
    function generateData () {
        let alreadyAddedCategoriesId:string[] = [];
        let i = 0, j = 0; // i: iterator, j: max attempts allowed
        while (i < 3 && j < 50) {
            let currentSecCategory = categories[Math.floor(Math.random() * categories.length)];
            if (!alreadyAddedCategoriesId.includes(currentSecCategory.slug)) {
                alreadyAddedCategoriesId.push(currentSecCategory.slug);
                sectionCategories.push(currentSecCategory);
                i++;
            }
            j++;
        }
        return sectionCategories;
    }
    return sectionCategories.length > 0 ? sectionCategories : generateData();
}

export {
    getAdContent,
    getHomeSectionCategories
}