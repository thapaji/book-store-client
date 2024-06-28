import { useSelector } from "react-redux";

export const handleBookSearch = (books, setSearchedBooks, value) => {
    setSearchedBooks(
        books.filter(({ title }) => title.toLowerCase().includes(value.toLowerCase()))
    );
};

export const handleCategorySearch = (categories, setSearchedCategories, value) => {
    setSearchedCategories(
        categories.filter((category) =>
            category.toLowerCase().includes(value.toLowerCase())
        )
    );
};


export const handleAuthorSearch = (authors, setSearchedAuthors, value) => {
    setSearchedAuthors(
        authors.filter((author) =>
            author.toLowerCase().includes(value.toLowerCase())
        )
    );
};

export const handleUserSearch = (users, setSearchedUsers, value) => {
    setSearchedUsers(
        users.filter(user =>
            user.fname.toLowerCase().includes(value.toLowerCase()) ||
            user.lname.toLowerCase().includes(value.toLowerCase()) ||
            user.email.toLowerCase().includes(value.toLowerCase()) ||
            user.phone.toLowerCase().includes(value.toLowerCase())
        )
    );
};

