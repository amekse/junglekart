import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { itemDetailsById } from "../api.services";
import Header from "../components/Header.component";
import { useHomeStore } from "./pages.stores";
import { Button, Card, CardContent, Chip, IconButton, Rating, Typography } from "@mui/material";
import { useState } from "react";
import { ChevronLeft as CheveronLeftIcon, ChevronRight as ChevronRightIcon, ShapeLine as ShapeLineIcon, Balance as BalanceIcon, Favorite as FavoriteIcon, AttachMoney as AttachMoneyIcon, FavoriteBorder as FavoriteBorderIcon, Sell as SellIcon, AccountBalance as AccountBalanceIcon, ShoppingCart as ShoppingCartIcon, StarHalf as StarHalfIcon, LocalShipping as LocalShippingIcon, AssignmentReturn as AssignmentReturnIcon, SafetyCheck as SafetyCheckIcon } from "@mui/icons-material";
import styles from "./pages.styles";
import AdBanner from "../components/AdBanner";
import { ReviewDef } from "./pages.types";

export default function ItemDetails() {
    const { itemId } = useParams();
    const { showNavigation, toggleShowNavigation } = useHomeStore();
    const [carouselCurrent, setCarouselCurrent] = useState(0);

    const itemDetails = useQuery({
        queryKey: ['item-details', itemId],
        queryFn: () => itemDetailsById(itemId ?? ""),
        enabled: ![null, undefined, ''].includes(itemId)
    })

    const LoadingSkeleton = () => {
        return (
            <div className="itemDetailsColumn">

            </div>
        )
    }

    if (itemDetails.isLoading) {
        return <LoadingSkeleton />
    }

    const handlePaginationClick = (direction:'left'|'right') => {
        switch (direction) {
            case 'left': {
                if (carouselCurrent > 0) {
                    setCarouselCurrent(carouselCurrent-1);
                }
                break;
            }
            case 'right': {
                if (carouselCurrent < itemDetails?.data?.images?.length-1) {
                    setCarouselCurrent(carouselCurrent+1);
                }
                break;
            }
        }
    }

    const formatDateToMonthYear = (dateString:string) => {
        const date = new Date(dateString);
        return date.toLocaleDateString("en-US", { month: "long", year: "numeric" });
    }

    return (
        <div className="itemDetailsColumn">
            <Header toggleShowNavigation={toggleShowNavigation} />
            <div className="itemDetailsColumn itemDetailsContainer">
                <div className="itemDetailsRow itemDetailsImageCarousel">
                    <div className="itemDetailsRow itemDetailsImageCarouselInfo">
                        <div className="itemDetailsColumn">
                            <Typography variant="h3" color="text.primary">{itemDetails.data.title}</Typography>
                            <div className="itemDetailsRow" style={{ alignItems: 'center', gap: '8px' }}>
                                {itemDetails.data.brand && <Typography variant="h4" color="text.secondary">by</Typography>}
                                <Typography variant="h4" fontWeight={800} color="text.secondary">{itemDetails.data.brand}</Typography>
                            </div>
                            <div className="itemDetailsRow itemDetailsImageCarouselTags">
                                {
                                    itemDetails.data.tags.map((itemTag:string) => <Chip color="primary" icon={<SellIcon color="primary" />} label={itemTag} variant="outlined" />)
                                }
                            </div>
                        </div>
                        <IconButton sx={{ backgroundColor: '#EDF7E6' }}><FavoriteBorderIcon fontSize="large" /></IconButton>
                    </div>
                    <IconButton size="large" onClick={() => handlePaginationClick('left')} disabled={carouselCurrent === 0} ><CheveronLeftIcon /></IconButton>
                    {
                        itemDetails.data.images.map((imageUrl:string, index:number) => <img src={imageUrl} alt="" className="itemDetailsImg" style={{ display: carouselCurrent === index ? 'block' : 'none' }} />)
                    }
                    <IconButton size="large" onClick={() => handlePaginationClick('right')} disabled={carouselCurrent === itemDetails.data.images.length-1}><ChevronRightIcon /></IconButton>
                </div>
            </div>
            <div className="itemDetailsRow itemDetailsContainer">
                <div className="itemDetailsColumn itemDetailsLeftSec">
                    <Typography variant="h6">{itemDetails.data.description}</Typography>
                    <div className="itemDetailsRow itemDetailsPurchaseSec">
                        <div className="itemDetailsPriceContainer">
                            <Typography variant="h6" color="primary" fontWeight={800}>$ {itemDetails.data.price}</Typography>
                        </div>
                        <Button startIcon={<ShoppingCartIcon/>} sx={styles.itemDetailsPurchaseButtons} variant="contained" color="secondary">Add to Cart</Button>
                        <Button startIcon={<AccountBalanceIcon/>} sx={styles.itemDetailsPurchaseButtons} variant="contained" color="primary">Buy Now</Button>
                    </div>
                </div>
                <div className="itemDetailsColumn itemDetailsRightSec">
                    <Typography variant="h5" color="primary" fontWeight={600}>Specifications</Typography>
                    <div className="itemDetailsRow itemDetailsRowAlignment">
                        <StarHalfIcon color="primary"/>
                        <Typography variant="subtitle1" color="primary" fontWeight={800}>Rating:</Typography>
                        <Typography variant="subtitle1">{itemDetails.data.rating}/5</Typography>
                        <Typography>|</Typography>
                        <LocalShippingIcon color="primary"/>
                        <Typography variant="subtitle1" color="primary" fontWeight={800}>ETA:</Typography>
                        <Typography variant="subtitle1">{itemDetails.data.shippingInformation}</Typography>
                    </div>
                    <div className="itemDetailsRow itemDetailsRowAlignment">
                        <AssignmentReturnIcon color="primary" />
                        <Typography variant="subtitle1" color="primary" fontWeight={800}>Return policy:</Typography>
                        <Typography variant="subtitle1"> {itemDetails.data.returnPolicy}</Typography>
                        <Typography>|</Typography>
                        <SafetyCheckIcon color="primary" />
                        <Typography variant="subtitle1" color="primary" fontWeight={800}>Warranty:</Typography>
                        <Typography variant="subtitle1">{itemDetails.data.warrantyInformation}</Typography>
                    </div>
                    <div className="itemDetailsRow itemDetailsRowAlignment">
                        <ShapeLineIcon color="primary" />
                        <Typography variant="subtitle1" color="primary" fontWeight={800}>Dimensions:</Typography>
                        <Typography variant="subtitle1">H: {itemDetails.data.dimensions.height} x W: {itemDetails.data.dimensions.width} x D: {itemDetails.data.dimensions.depth}</Typography>
                        <Typography>|</Typography>
                        <BalanceIcon color="primary" />
                        <Typography variant="subtitle1" color="primary" fontWeight={800}>Weight:</Typography>
                        <Typography variant="subtitle1">{itemDetails.data.weight}</Typography>
                    </div>
                </div>
            </div>
            <div className="itemDetailsColumn itemDetailsContainer">
                <AdBanner orientation="landscape" />
            </div>
            <div className="itemDetailsColumn itemDetailsContainer">
                <Typography variant="h5" color="secondary" fontWeight={600}>Reviews</Typography>
                <div className="itemDetailsReviewList">
                    {
                        itemDetails.data.reviews.map((itemReview:ReviewDef) => 
                            <Card sx={styles.itemDetailsReviewCard}>
                                <CardContent>
                                    <div className="itemDetailsRow itemDetailsRowAlignment">
                                        <Typography variant="subtitle1" fontWeight={600}>{itemReview.reviewerName}</Typography>
                                        <Rating defaultValue={itemReview.rating} readOnly />
                                    </div>
                                    <Typography variant="body1" >{itemReview.comment}</Typography>
                                    <Typography variant="overline">{formatDateToMonthYear(itemReview.date)}</Typography>
                                </CardContent>
                            </Card>
                        )
                    }
                </div>
            </div>
        </div>
    )
}