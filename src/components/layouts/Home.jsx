import React, { useEffect } from "react";
import Restaurent from "./Restaurent";
import Countrestaurant from "./Countrestaurent";
import { useDispatch, useSelector } from "react-redux";
import { getrestaurants, sortByReviews,sortByRatings, toggleVegOnly } from "../../actions/restaurantAction";
import Loader from "./Loader";
import Message from "./Message";

export default function Home() {
    const dispatch = useDispatch();

    const {
        loading: restaurantsLoading,
        error: restaurantsError,
        restaurants,
        showVegOnly,
    } = useSelector((state) => state.restaurants);

    useEffect(() => {
        dispatch(getrestaurants());
    }, [dispatch]);


    const handleSortByReview=()=>{
        dispatch(sortByReviews());
    };
    const handleSortByRatings=()=>{
        dispatch(sortByRatings());
    };
    const handleToggleVegOnly=()=>{
        dispatch(toggleVegOnly());
    };

    return (
        <>
            <Countrestaurant />
            {restaurantsLoading ? (
                <Loader />
            ) : restaurantsError ? (
                <Message variant="danger">{restaurantsError}</Message>
            ) : (
                <>
                    <section>
                        <div className="sort">
                            <button className="sort_veg p-3" onClick={handleToggleVegOnly}>{showVegOnly?"Show All":"Pure Veg"}</button>
                            <button className="sort_rev p-3" onClick={handleSortByReview}>Sort by review</button>
                            <button className="sort_rate p-3" onClick={handleSortByRatings}>Sort by Ratings</button>
                        </div>
                        <div className="row mt-4">
                            {restaurants ?(
                                restaurants.map(
                                    (restaurant) => 
                                    !showVegOnly ||
                                    (showVegOnly && restaurant.isVeg)?
                                    (<Restaurent key={restaurant._id} restaurant={restaurant} />
                                ):null))

                             : (<Message variant="info">No Restaurant Found</Message>)}
                        </div>
                    </section>
                </>
            )}
        </>
    );
}