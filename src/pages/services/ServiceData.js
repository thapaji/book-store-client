import { FaBookOpen, FaHeadset, FaGift, FaCalendarAlt, FaClipboardCheck, FaShoppingCart } from "react-icons/fa";

export const serviceData = [
    {
        title: "Book Rentals",
        description: "Rent books for a specified period and enjoy reading at your convenience.",
        icon: FaBookOpen,  // Store as a reference
        link: "/services/rentals",
    },
    {
        title: "E-book Downloads",
        description: "Download e-books directly from our store and read them on any device.",
        icon: FaGift,
        link: "/services/ebooks",
    },
    {
        title: "Book Recommendations",
        description: "Get personalized book recommendations based on your reading history.",
        icon: FaBookOpen,
        link: "/services/recommendations",
    },
    {
        title: "Membership Options",
        description: "Explore our membership plans for exclusive discounts and perks.",
        icon: FaGift,
        link: "/services/membership",
    },
    {
        title: "Events",
        description: "Join book reading sessions, author events, and much more.",
        icon: FaCalendarAlt,
        link: "/services/events",
    },
    {
        title: "Customer Support",
        description: "Contact our support team for any help or queries you may have.",
        icon: FaHeadset,
        link: "/services/support",
    },
    {
        title: "Buy Books",
        description: "Purchase books directly from our store, both physical and digital formats.",
        icon: FaShoppingCart,
        link: "/services/buy",
    },
    {
        title: "Order Books",
        description: "Order any book not available in our inventory, and we will notify you once it arrives.",
        icon: FaClipboardCheck,
        link: "/services/order",
    },
    {
        title: "Book Donations",
        description: "Donate your old books to our library and help promote literacy in the community.",
        icon: FaBookOpen,
        link: "/services/donations",
    },
];
