export const inputs = [
    {
        label: "Title",
        type: "text",
        name: "title",
        placeholder: "Add Title of the Book",
        required: true,
    },
    { label: "Isbn", type: "text", name: "isbn", placeholder: "Add ISBN number", required: true },
    {
        label: "PUBLISHED YEAR",
        type: "text",
        name: "publishedYear",
        placeholder: "Add Published Year",
        required: true,
    },
    { label: "AUTHOR", type: "text", name: "author", placeholder: "Add Author", required: true },
    { label: "Thumbnail", type: "url", name: "thumbnail", placeholder: "Add Image", required: true },
    {
        label: "DESCRIPTION",
        type: "text",
        name: "description",
        placeholder: "Add Description",
        as: "textarea",
        maxLength: 1000,
        rows: "5",
        required: true,
    },
];