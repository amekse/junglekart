import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { itemDetailsById } from "../api.services";
import Header from "../components/Header.component";
import { useHomeStore } from "./pages.stores";
import { IconButton, Typography } from "@mui/material";
import { useState } from "react";
import { ChevronLeft as CheveronLeftIcon, ChevronRight as ChevronRightIcon } from "@mui/icons-material";

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

    return (
        <div className="itemDetailsColumn">
            <Header toggleShowNavigation={toggleShowNavigation} />
            <div className="itemDetailsRow itemDetailsContainer">
                <div className="itemDetailsColumn">
                    <div className="itemDetailsRow itemDetailsImageCarousel">
                        <IconButton size="large" onClick={() => handlePaginationClick('left')} style={{ visibility: carouselCurrent > 0 ? 'visible' : 'hidden' }} ><CheveronLeftIcon /></IconButton>
                        {
                            itemDetails.data.images.map((imageUrl:string, index:number) => <img src={imageUrl} alt="" className="itemDetailsImg" style={{ display: carouselCurrent === index ? 'block' : 'none' }} />)
                        }
                        <IconButton size="large" onClick={() => handlePaginationClick('right')} style={{ visibility: carouselCurrent < itemDetails.data.images.length-1 ? 'visible' : 'hidden' }}><ChevronRightIcon /></IconButton>
                    </div>
                    <Typography variant="h3">{itemDetails.data.title}</Typography>
                    <div className="itemDetailsRow" style={{ alignItems: 'center', gap: '8px' }}>
                        <Typography variant="h4">by</Typography>
                        <Typography variant="h4" fontWeight={800}>{itemDetails.data.brand}</Typography>
                    </div>
                    <Typography variant="h6">{itemDetails.data.description}</Typography>
                    <div className="itemDetailsRow">
                        <Typography>${itemDetails.data.price}</Typography>
                        <Typography>{itemDetails.data.rating}/5</Typography>
                        <Typography>{itemDetails.data.shippingInformation}</Typography>
                    </div>
                    <div className="itemDetailsRow">
                        <Typography>{itemDetails.data.returnPolicy}</Typography>
                        <Typography>{itemDetails.data.warrantyInformation}</Typography>
                    </div>
                </div>
                <div className="itemDetailsActionArea">
                </div>
            </div>
        </div>
    )
}