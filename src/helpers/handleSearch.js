export const handleBookSearch = (books, setSearchedBooks, value) => {
  setSearchedBooks(books.filter(({ title }) => title.toLowerCase().includes(value.toLowerCase())));
};

export const handleCategorySearch = (categories, setSearchedCategories, value) => {
  setSearchedCategories(categories.filter((category) => category.toLowerCase().includes(value.toLowerCase())));
};

export const handleAuthorSearch = (authors, setSearchedAuthors, value) => {
  setSearchedAuthors(authors.filter((author) => author.toLowerCase().includes(value.toLowerCase())));
};

export const handleUserSearch = (users, setSearchedUsers, value) => {
  setSearchedUsers(
    users.filter(
      (user) =>
        user.fname.toLowerCase().includes(value.toLowerCase()) ||
        user.lname.toLowerCase().includes(value.toLowerCase()) ||
        user.email.toLowerCase().includes(value.toLowerCase()) ||
        user.phone.toLowerCase().includes(value.toLowerCase())
    )
  );
};

export const handleNewsSearch = (news, setSearchedNews, value) => {
  setSearchedNews(
    news.filter(
      (article) =>
        article.title.toLowerCase().includes(value.toLowerCase()) ||
        article.description.toLowerCase().includes(value.toLowerCase()) ||
        article.authorName.toLowerCase().includes(value.toLowerCase())
    )
  );
};

export const handleMessageSearch = (messages, setSearchedMessage, value) => {
  setSearchedMessage(
    messages.filter(
      (message) =>
        message.name.toLowerCase().includes(value.toLowerCase()) ||
        message.email.toLowerCase().includes(value.toLowerCase()) ||
        message.submittedAt.toLowerCase().includes(value.toLowerCase())
    )
  );
};
