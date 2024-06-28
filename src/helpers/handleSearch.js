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
