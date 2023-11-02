import Header from "./Header";
import React from "react";
import DiscoverCard from "./Cards/DiscoverCard";

export default function Discover() {
  let mockup = [
    {
      image:
        "https://images.bike24.com/media/720/i/mb/71/d9/6f/twostroke-01-five-cbn-wht-gry-1078592.jpg",
      name: "Mountain Bike",
      description:
        "A high-quality mountain bike for adventurous trails and outdoor exploration. Suitable for all skill levels.",
      price: "$25/day",
    },
    {
      image:
        "https://www.real-samui-properties.com/prodimages/villa5510-pic1470149964.jpg",
      name: "Beachfront Villa",
      description:
        "A luxurious beachfront villa with stunning ocean views. Perfect for a relaxing vacation by the sea.",
      price: "$300/night",
    },
    {
      image:
        "https://www.rei.com/dam/content_team_041417_60047_what_to_wear_kayaking_lg.jpg?t=ea16by9lg",
      name: "Canoe",
      description:
        "A durable canoe for river and lake excursions. Ideal for a peaceful day on the water with friends or family.",
      price: "$20/day",
    },
    {
      image:
        "https://www.coloradorafting.net/wp-content/uploads/2020/10/pexels-mac-destroir-2662816-scaled.jpg",
      name: "Tent Camping Kit",
      description:
        "A complete camping kit with a spacious tent, sleeping bags, and camping gear. Great for a weekend getaway in nature.",
      price: "$40/weekend",
    },
    {
      image:
        "https://www.the-home-cinema-guide.com/wp-content/uploads/home-theater-projector-buying-guide-1.jpg",
      name: "Video Projector",
      description:
        "A high-definition video projector for movie nights and presentations. Enjoy a cinematic experience at home or at events.",
      price: "$30/day",
    },
    {
      image:
        "https://www.rei.com/dam/content_team_041417_60047_what_to_wear_kayaking_lg.jpg?t=ea16by9lg",
      name: "Kayak",
      description:
        "A stable and versatile kayak for exploring rivers, lakes, and coastal waters. Suitable for paddlers of all levels.",
      price: "$35/day",
    },
    {
      image:
        "https://res.klook.com/image/upload/c_fill,w_1265,h_712/q_80/w_80,x_15,y_15,g_south_west,l_Klook_water_br_trans_yhcmh3/activities/ripxrgvv1jysewgebdry.webp",
      name: "Snowboard Package",
      description:
        "A complete snowboarding package with board, bindings, and boots. Hit the slopes and enjoy the winter wonderland.",
      price: "$50/day",
    },
    {
      image:
        "https://www.motortrend.com/uploads/2022/06/Arkto-Campers-G12-off-road-trailer.jpg?fit=around%7C875:492",
      name: "Camping Trailer",
      description:
        "A fully-equipped camping trailer with a kitchen, beds, and amenities. Experience the joys of camping with comfort.",
      price: "$80/night",
    },
  ];

  return (
    <>
      <Header />
      <div
        className="relative flex flex-wrap justify-around items-baseline min-h-screen"
        id="discoverContainer"
      >
        {Array.from({ length: 8 }).map((_, index) => (
          <DiscoverCard key={index} object={mockup[index]} />
        ))}
      </div>
    </>
  );
}
