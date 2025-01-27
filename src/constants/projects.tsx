interface Project {
    id: number
    title: string
    description: string
    imageUrl: string
    viewUrl: string
    detailsUrl: string
}
export const projects: Project[] = [
    {
        id: 1,
        title: "Kakushops",
        description:
            "KakuShops is a versatile e-commerce web application offering a seamless and intuitive online shopping experience. It features a wide range of product categories and brands, along with robust functionalities such as persistent cart management, dynamic search and filtering, secure user authentication, real-time order tracking, and an integrated email notification system. The application is built using React for the front-end, Spring Boot for the back-end, and PostgreSQL for the database.",
        imageUrl: "/kakushops.png",
        viewUrl: "",
        detailsUrl: "",
    },
    {
        id: 2,
        title: "GlobeGurus",
        description:
            "GlobeGurus is a social web app for travel enthusiasts to create and share guides for local areas or destinations they've visited. Using an interactive map powered by the Google Maps API, users can create and share custom guides for their local areas or places they've visited. Features include liking and commenting on guides, a leaderboard highlighting top contributors, and advanced searches based on popularity and location proximity. Built with React, Node.js/Express.js, and Mongoose. GlobeGurus offers a dynamic platform for sharing travel insights and discovering new destinations.",
        imageUrl: "/globegurus.png",
        viewUrl: "",
        detailsUrl: "",
    },
    {
        id: 3,
        title: "The Wild Oasis",
        description:
            "The Wild Oasis is a project of The Ultimate React Course of Johnas Schmedtmann. This is not my idea, just an implementation of his project",
        imageUrl: "/globegurus.png",
        viewUrl: "",
        detailsUrl: "",
    },
]
