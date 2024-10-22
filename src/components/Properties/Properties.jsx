import Available from "./Available";

export default function Properties() {
  const properties = [
    {
      name: "Modern Design Villa",
      imageUrl:
        "https://images.unsplash.com/photo-1601760562234-9814eea6663a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmVhbGVzdGF0ZXxlbnwwfHwwfHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=500&amp;q=60",
      price: "$3000.00",
      bedrooms: 3,
      bathrooms: 2,
    },

    {
      name: "Beachfront Bungalow",
      imageUrl:
        "https://images.unsplash.com/photo-1568605114967-8130f3a36994?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTF8fGhvdXNlJTIwaW50ZXJpb3J8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      price: "$3500.00",
      bedrooms: 3,
      bathrooms: 2,
    },
    {
      name: "Urban Apartment",
      imageUrl:
        "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8aW50ZXJpb3J8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      price: "$2000.00",
      bedrooms: 2,
      bathrooms: 2,
    },
    {
      name: "Lakeview Cottage",
      imageUrl:
        "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixid=MnwxMjA3fDB8MHxzZWFyY2h8NXx8aW50ZXJpb3J8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      price: "$3500.00",
      bedrooms: 3,
      bathrooms: 2,
    },
    {
      name: "Mountain Retreat",
      imageUrl:
        "https://images.unsplash.com/photo-1507089947368-19c1da9775ae?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8aW50ZXJpb3J8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      price: "$5000.00",
      bedrooms: 5,
      bathrooms: 4,
    },
  ];

  return (
    <>
      <Available properties={properties} />;
    </>
  );
}
