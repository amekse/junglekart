import { AdBannerProps, AdBannerStyleProps } from "./components.types";

export default function AdBanner(props:AdBannerProps) {
    const { orientation, customStyle } = props;

    const switchByOrientation = () => {
        switch(orientation) {
            case "landscape": return "adAdBannerLandscape";
            case "potrait": return "adAdBannerPotrait";
            case "square": return "adAdBannerSquare";
        }
    }

    const configureCustomStyles = ({height, width}: AdBannerStyleProps = {}) => {
        let custStyle:AdBannerStyleProps = {};
        if (height) {
            custStyle.height = height;
        }
        if (width) {
            custStyle.width = width;
        }
        return custStyle;
    }

    const adContents = [
        { title: "Season Sale", para: "Get the best deals in the best seasons, only from JungleKart.", prodTitle: "Furnitures", imageUrl: "https://cdn.dummyjson.com/products/images/furniture/Bedside%20Table%20African%20Cherry/thumbnail.png" },
        { title: "Mega Discounts", para: "Unbelievable discounts on all products, grab them before they're gone!", prodTitle: "Fragnences", imageUrl: "https://cdn.dummyjson.com/products/images/fragrances/Dior%20J'adore/thumbnail.png" },
        { title: "Flash Sale", para: "Limited-time offers on your favorite brands. Don't miss out!", prodTitle: "Mascaras", imageUrl: "https://cdn.dummyjson.com/products/images/beauty/Essence%20Mascara%20Lash%20Princess/thumbnail.png" },
        { title: "Exclusive Offers", para: "Special deals just for you. Shop now and save big!", prodTitle: "Groceries", imageUrl: "https://cdn.dummyjson.com/products/images/groceries/Green%20Chili%20Pepper/thumbnail.png" },
        { title: "New Arrivals", para: "Discover the latest trends and styles at amazing prices.", prodTitle: "Furnitures", imageUrl: "https://cdn.dummyjson.com/products/images/furniture/Annibale%20Colombo%20Sofa/thumbnail.png" }
    ];
    
    const getRandomAdContent = () => {
        return adContents[Math.floor(Math.random() * adContents.length)];
    };

    const { title, para, imageUrl, prodTitle } = getRandomAdContent();

    const AdBanner = ({classByOrientation}: {classByOrientation:string}) => {
        return (
            <div className={`adBanner ${classByOrientation}`} style={configureCustomStyles(customStyle)}>
                <div>
                    <span>{title} on {prodTitle}</span>
                    <p>
                        {para}
                    </p>
                </div>
                <img src={imageUrl} alt="" className="adBannerImage" />
            </div>
        )
    }

    return <AdBanner classByOrientation={switchByOrientation()} />;
}