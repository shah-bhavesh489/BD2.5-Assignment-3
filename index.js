let express = require('express');
let cors = require('cors');
let port = 3000;
let app = express();
app.use(cors());

app.use(express.static('static'));


let hotels = [
  {
    id: 1,
    name: "Romantic Getaway",
    category: "Resort",
    rating: 2.2,
    reviews: 4572,
    amenity: "Spa",
    price: 10464,
    country: "South Africa",
  },
  {
    id: 2,
    name: "Wellness Retreat",
    category: "Family",
    rating: 2.8,
    reviews: 2114,
    amenity: "Pool",
    price: 13243,
    country: "Australia",
  },
  {
    id: 3,
    name: "Romantic Getaway",
    category: "Luxury",
    rating: 3.1,
    reviews: 4359,
    amenity: "Restaurant",
    price: 3299,
    country: "Germany",
  },
  {
    id: 4,
    name: "Luxury Suites",
    category: "Family",
    rating: 4.9,
    reviews: 3651,
    amenity: "Bar",
    price: 16359,
    country: "United Kingdom",
  },
  {
    id: 5,
    name: "Luxury Suites",
    category: "Budget",
    rating: 4.6,
    reviews: 688,
    amenity: "Gym",
    price: 15570,
    country: "France",
  },
  {
    id: 6,
    name: "Cultural Heritage Hotel",
    category: "Boutique",
    rating: 2.0,
    reviews: 219,
    amenity: "Pet Friendly",
    price: 2321,
    country: "USA",
  },
  {
    id: 7,
    name: "Business Hotel",
    category: "Mid-Range",
    rating: 3.7,
    reviews: 1040,
    amenity: "Free WiFi",
    price: 4523,
    country: "India",
  },
  {
    id: 8,
    name: "Historic Plaza Hotel",
    category: "Mid-Range",
    rating: 3.5,
    reviews: 300,
    amenity: "Parking",
    price: 8543,
    country: "Australia",
  },
  {
    id: 9,
    name: "Adventure Resort",
    category: "Boutique",
    rating: 4.2,
    reviews: 1222,
    amenity: "Gym",
    price: 11894,
    country: "South Africa",
  },
  {
    id: 10,
    name: "Mountain Retreat",
    category: "Resort",
    rating: 4.8,
    reviews: 4015,
    amenity: "Spa",
    price: 17560,
    country: "India",
  },
  {
    id: 11,
    name: "Eco Friendly Lodge",
    category: "Family",
    rating: 2.4,
    reviews: 528,
    amenity: "Restaurant",
    price: 3124,
    country: "Germany",
  },
  {
    id: 12,
    name: "Urban Boutique Hotel",
    category: "Mid-Range",
    rating: 3.9,
    reviews: 1401,
    amenity: "Free WiFi",
    price: 9245,
    country: "France",
  },
  {
    id: 13,
    name: "Beachfront Hotel",
    category: "Luxury",
    rating: 4.5,
    reviews: 489,
    amenity: "Pool",
    price: 14567,
    country: "USA",
  },
  {
    id: 14,
    name: "Ocean View Resort",
    category: "Budget",
    rating: 3.3,
    reviews: 783,
    amenity: "Spa",
    price: 7432,
    country: "United Kingdom",
  },
  {
    id: 15,
    name: "City Central Hotel",
    category: "Boutique",
    rating: 4.1,
    reviews: 2133,
    amenity: "Bar",
    price: 9823,
    country: "Australia",
  },
  {
    id: 16,
    name: "Casino Resort",
    category: "Luxury",
    rating: 4.9,
    reviews: 5000,
    amenity: "Bar",
    price: 18900,
    country: "South Africa",
  },
  {
    id: 17,
    name: "Golf Resort",
    category: "Mid-Range",
    rating: 4.7,
    reviews: 789,
    amenity: "Gym",
    price: 16340,
    country: "France",
  },
  {
    id: 18,
    name: "Family Fun Hotel",
    category: "Family",
    rating: 3.2,
    reviews: 1322,
    amenity: "Pool",
    price: 7500,
    country: "Germany",
  },
  {
    id: 19,
    name: "Spa and Relaxation Hotel",
    category: "Luxury",
    rating: 4.4,
    reviews: 2314,
    amenity: "Spa",
    price: 14900,
    country: "United Kingdom",
  },
  {
    id: 20,
    name: "Country House Hotel",
    category: "Budget",
    rating: 3.6,
    reviews: 1876,
    amenity: "Parking",
    price: 6234,
    country: "Australia",
  },
];


// function to sort hotels by high to low prices
function sortHotelsByPricing(pricing, hotelsCopy){
  let results;
  if (pricing === "high-to-low"){
    result = hotelsCopy.sort(sortHighPriceHotels);
  } else {
    result = hotelsCopy.sort(sortLowPriceHotels);
  }
  return result;
}

// function to sort high price hotels
function sortHighPriceHotels(hotel1, hotel2){
  return hotel2.price - hotel1.price;
}

// function to sort low price hotel
function sortLowPriceHotels(hotel1, hotel2){
  return hotel1.price - hotel2.price;
}


// Endpoint 1: Get the hotels sorted by pricing
app.get("/hotels/sort/pricing", (req, res) => {
  let pricing = req.query.pricing;
  let hotelsCopy = hotels.slice();
  let result = sortHotelsByPricing(pricing, hotelsCopy);
  res.json( {"hotels": result} );
})


// function to sort hotels by ratings
function sortHotelsByRatings(ratings, hotelsCopy){
  let result;
  if (ratings === "high-to-low"){
    result = hotelsCopy.sort(sortHighRatedHotels);
  } else {
    result = hotelsCopy.sort(sortLowRatedHotels);
  }
  return result;
}

// function to sort high rated hotels
function sortHighRatedHotels(hotel1, hotel2){
  return hotel2.rating - hotel1.rating;
}

// function to sort low rated hotels
function sortLowRatedHotels(hotel1, hotel2){
  return hotel1.rating - hotel2.rating;
}

// Endpoint 2: Get the hotels sorted based on their Ratings
app.get("/hotels/sort/rating", (req, res) => {
  let ratings = req.query.rating;
  let hotelsCopy = hotels.slice();
  let result = sortHotelsByRatings(ratings, hotelsCopy);
  res.json( {"hotels": result} );
})


// function to sort hotels based on reviews
function sortHotelsByReviews(reviews, hotelsCopy){
  let result;
  if (reviews === "least-to-most"){
    result = hotelsCopy.sort(leastReviewedHotels);
  } else {
    result = hotelsCopy.sort(mostReviewedHotels);
  }
  return result;
}

// function to sort least reviewed hotels
function leastReviewedHotels(hotel1, hotel2){
  return hotel1.reviews - hotel2.reviews;
}

// function to sort most reviewed hotels
function mostReviewedHotels(hotel1, hotel2){
  return hotel2.reviews - hotel1.reviews;
}

// Endpoint 3: Get the Hotels sorted based on their Reviews
app.get("/hotels/sort/reviews", (req, res) => {
  let reviews = req.query.reviews;
  let hotelsCopy = hotels.slice();
  let result = sortHotelsByReviews(reviews, hotelsCopy);
  res.json( {"hotels": result} );
})

// function to filter hotel based on amenities
function filterByAmenity(hotel, amenity){
  return hotel.amenity.toLowerCase() === amenity.toLowerCase();
}

// Endpoint 4: Filter the hotels based on the Hotel Amenity
app.get("/hotels/filter/amenity", (req, res) => {
  let amenity = req.query.amenity;
  let result = hotels.filter(hotel => filterByAmenity(hotel, amenity));
  res.json( {"hotels": result} );
})

// function to filter hotels by country
function filterByCountry(hotel, country){
  return hotel.country.toLowerCase() === country.toLowerCase();
}

// Endpoint 5: Filter the hotels based on the selected Country
app.get("/hotels/filter/country", (req, res) => {
  let country = req.query.country;
  let result = hotels.filter(hotel => filterByCountry(hotel, country));
  res.json( {"hotels": result} );
})

// function to filter hotels by category
function filterByCategory(hotel, category){
  return hotel.category.toLowerCase() === category.toLowerCase();
}

// Endpoint 6: Filter the hotels based on the selected Category
app.get("/hotels/filter/category", (req, res) => {
  let category = req.query.category;
  let result = hotels.filter(hotel => filterByCategory(hotel, category))
  res.json( {"hotels": result} );
})

// Endpoint 7: Send all hotels
app.get("/hotels", (req, res) => {
  res.json( {"hotels": hotels} );
})


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
