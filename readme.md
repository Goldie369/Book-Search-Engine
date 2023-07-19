# Book Search Engine

## Description

This app enables readers to search for new books and keep a list for future purchases. 

---

## App functionality

GIVEN a book search engine

WHEN I load the search engine

THEN I am presented with a menu with the options Search for Books and Login/Signup and an input field to search for books and a submit button

WHEN I click on the Search for Books menu option

THEN I am presented with an input field to search for books and a submit button

WHEN I am not logged in and enter a search term in the input field and click the submit button

THEN I am presented with several search results, each featuring a book’s title, author, description, image, and a link to that book on the Google Books site

WHEN I click on the Login/Signup menu option

THEN a modal appears on the screen with a toggle between the option to log in or sign up

WHEN the toggle is set to Signup

THEN I am presented with three inputs for a username, an email address, and a password, and a signup button

WHEN the toggle is set to Login

THEN I am presented with two inputs for an email address and a password and login button

WHEN I enter a valid email address and create a password and click on the signup button

THEN my user account is created and I am logged in to the site

WHEN I enter my account’s email address and password and click on the login button

THEN I the modal closes and I am logged in to the site

WHEN I am logged in to the site

THEN the menu options change to Search for Books, an option to see my saved books, and Logout

WHEN I am logged in and enter a search term in the input field and click the submit button

THEN I am presented with several search results, each featuring a book’s title, author, description, image, and a link to that book on the Google Books site and a button to save a book to my account

WHEN I click on the Save button on a book

THEN that book’s information is saved to my account

WHEN I click on the option to see my saved books

THEN I am presented with all of the books I have saved to my account, each featuring the book’s title, author, description, image, and a link to that book on the Google Books site and a button to remove a book from my account

WHEN I click on the Remove button on a book

THEN that book is deleted from my saved books list

WHEN I click on the Logout button

THEN I am logged out of the site and presented with a menu with the options Search for Books and Login/Signup and an input field to search for books and a submit button  

---

## Table of Contents

  <ul>
    <li>
      <a href="#description">Description</a>
    </li>
    <li>
      <a href="#app-functionality">App functionality</a>
    </li>
    <li>
      <a href="#demo">Demo</a>
    </li>
    <li>
        <a href="#questions">Questions</a>
    </li>
    <li>
        <a href="#acknowledgments">Acknowledgements</a>
    </li>
  </ul>

---

## Demo

You can check out the app following [this link.](https://google-books-search-engine.herokuapp.com)

This video demonstrates app functionality when a user signs up.

https://user-images.githubusercontent.com/111567114/235399815-2c097ac5-1446-4fa8-aae1-63593a058ce9.mov

---

## Questions

If you have any questions regarding this project, please don't hesitate to contact me using my email address: pomyateevav@gmail.com. You can find my project repositories here: [veronika-pomy](https://github.com/veronika-pomy?tab=repositories).

---

## Acknowledgments

This list includes resources used for the project.

- [Apollo GraphQL](https://www.apollographql.com/docs/)
- [bcrypt](https://www.npmjs.com/package/bcrypt)
- [Best README Template](https://github.com/othneildrew/Best-README-Template/blob/master/README.md)
- [concurrently](https://www.npmjs.com/package/concurrently)
- [Express](https://expressjs.com/)
- [Heroku](https://devcenter.heroku.com/)
- [JWT](https://jwt.io/)
- [MongoDB](https://www.mongodb.com/)
- [Node.js](https://nodejs.org/en/)
- [React](https://react.dev/)

<p align="right">(<a href="#book-search-engine">back to top</a>)</p>
