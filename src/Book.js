import React from 'react'

export const Book = (props) => {
     // attribute, evenHandler
    // onClick, onMouseOver
    const clickHandler = () => {
        alert('Hello World');
    }
    const complexExample = (author) => {
        console.log(author);
    }

    const { url, title, author, price } = props.book;
    
    return <article className="book" onMouseOver={() => {
        console.log(title);
    }}>
        <img src={url} alt="" width="300" height="300"></img>
        <h1 onClick={() => console.log(title)}>{title}</h1>
        <h3>{author}</h3>
        <h4 style={{ color: "red" }}>{price}</h4>
        <button type="button" onClick={clickHandler}>Reference example</button>
        <button type="button" onClick={() => complexExample(author)}>More Complex Example</button>
    </article>
}

// export default Book
