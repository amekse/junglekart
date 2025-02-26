import { getAdContent } from "../dummy.services";
import { AdBannerProps, AdBannerStyleProps } from "./components.types";

export default function AdBanner(props:AdBannerProps) {
    const { orientation, customStyle } = props;

    const switchByOrientation = () => {
        switch(orientation) {
            case "landscape": return "adBannerLandscape";
            case "potrait": return "adBannerPotrait";
            case "square": return "adBannerSquare";
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

    const configureOrientationHeight = () => {
        switch (orientation) {
            case 'landscape': return '15vh';
            case 'potrait':
            case 'square': return '100%';
        }
    }

    const configureOrientationClipPath = () => {
        switch(orientation) {
            case 'landscape': return 'polygon(25% 0%, 100% 0%, 100% 100%, 0% 100%)';
            default: return 'none';
        }
    }

    const { title, para, imageUrl, prodTitle } = getAdContent();

    const AdBanner = ({classByOrientation}: {classByOrientation:string}) => {
        return (
            <div className={`adBanner ${classByOrientation}`} style={configureCustomStyles(customStyle)}>
                <div>
                    <span>{title} on {prodTitle}</span>
                    <p>
                        {para}
                    </p>
                </div>
                <img src={imageUrl} alt="" className="adBannerImage" style={{ height: configureOrientationHeight(), width: '30vw', clipPath: configureOrientationClipPath() }} />
            </div>
        )
    }

    return <AdBanner classByOrientation={switchByOrientation()} />;
}