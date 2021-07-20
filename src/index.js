import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// const img = "https://picsum.photos/200";


// function Greeting() {
//   return
//   <div>
//     <h1 className="heading" contentEditable="true" spellCheck="true">
//       My Favourite Food
//     </h1>
//     <img src={img + "?grayscale"} />
//     <img
//       className="food-img"
//       src="https://www.seriouseats.com/thmb/ekA98_89qoc1kLGnJaXuuJtIQMs=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__2020__03__20200224-carretteira-pasta-vicky-wasik-21-ffe68515b25f4b348cbde845a59d6a62.jpg"
//       alt="pasta"
//     ></img>
//     <img
//       className="food-img"
//       src="http://images.dailyhive.com/20161227100347/bacon-slices.jpg"
//       alt="bacon"
//     ></img>
//     <img
//       className="food-img"
//       src="https://www.marchestradition.com/wp-content/uploads/2021/03/Jambon-400x400-BS010984-PUB-76396-400x350.jpg"
//       alt="jambon"
//     ></img>
//   </div>

// }




// const Person = () => <h2>Thi Hong Gam Tran</h2>
// const Message = () => {
//     return <p>This my my message</p>
// }

// const Greeting = () => {
//     // return React.createElement('div', {},
//     //     React.createEl                                        ement('h1', {}, 'hello world'));
//     return (
//         <div>
//             <Person></Person>
//             <Message></Message>
//         </div>
//     );
    
// };

// ReactDOM.render( <Greeting/> , document.getElementById('root'));





// Nested component, React tools 
// const title = "I Love You to the Moon and Back";
// const author = "Amelia Hepworth";  
// const price = "$10.50";

// function BookList() {
//     return <section className="booklist">
//         <Book></Book>
//         <Book></Book>
//         <Book></Book>
//         <Book></Book>
//         <Book></Book>
//         <Book></Book>
//         <Book></Book>
//         <Book></Book>
        
       
//     </section>;
// }

// const Book = () => {
//     return <article className="book">
//         <Image></Image>
//         <Title></Title>
//         <Author></Author>
//         <Type></Type>
//         <Price></Price> 
//     </article>
// }

// const Image = () => (<img src="https://images-na.ssl-images-amazon.com/images/I/81eB+7+CkUL.jpg" alt="" width="300" height="300"></img>);

// const Title = () => (<h1>I Love You to the Moon and Back</h1>);

// const Author = () => <h3 style={{color:"#000080"}}>Amelia Hepworth</h3>

// const Type = () => <h4 style={{color:"#0000ff", fontSize:"0.75rem", marginTop:"0.5rem"}}>hardcover</h4>

// const Price = () => <h4 style={{color:"red"}}>$10.50</h4>

// const Book = () => {
    
//     return <article className="book">
//         <img src="https://images-na.ssl-images-amazon.com/images/I/81eB+7+CkUL.jpg" alt="" width="300" height="300"></img>
//         <h1>{title}</h1>
//         <h3>{author}</h3>
//         <h4 style={{ color: "red" }}>{price}</h4>   
//     </article>
// }



// const names = ["Gam", "Hoa", "Nhi", "Sam"];
// const newNames = names.map((name) => {
//     return <h1>{name}</h1>
// })
// console.log(newNames);

// import books from books.js
import { books } from './books.js';
import { Book } from './Book.js';
import { greeting } from './testing/testing';

function BookList() {
    console.log(greeting);
    return (<section className="booklist">
        {books.map((book, index) => {
            const { url, title, author, price } = book;
            return (
                <Book key={book.id} book={book}></Book>
            );
           
        })}
    </section>
    );
}


// const Book = ({url, title, author, price, children}) => {
//     return <article className="book">
//         <img src={url} alt="" width="300" height="300"></img>
//         <h1>{title}</h1>
//         <h3>{author}</h3>
//         <h4 style={{ color: "red" }}>{price}</h4>
//         {children}
//     </article>
// }


ReactDOM.render(<BookList></BookList>, document.getElementById("root"));