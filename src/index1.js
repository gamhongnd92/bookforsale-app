import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';


const img = "https://picsum.photos/200";


function Greeting() {
  return
  <div>
    <h1 className="heading" contentEditable="true" spellCheck="true">
      My Favourite Food
    </h1>
    <img src={img + "?grayscale"} />
    <img
      className="food-img"
      src="https://www.seriouseats.com/thmb/ekA98_89qoc1kLGnJaXuuJtIQMs=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/__opt__aboutcom__coeus__resources__content_migration__serious_eats__seriouseats.com__2020__03__20200224-carretteira-pasta-vicky-wasik-21-ffe68515b25f4b348cbde845a59d6a62.jpg"
      alt="pasta"
    ></img>
    <img
      className="food-img"
      src="http://images.dailyhive.com/20161227100347/bacon-slices.jpg"
      alt="bacon"
    ></img>
    <img
      className="food-img"
      src="https://www.marchestradition.com/wp-content/uploads/2021/03/Jambon-400x400-BS010984-PUB-76396-400x350.jpg"
      alt="jambon"
    ></img>
  </div>

}

ReactDOM.render(<Greeting></Greeting>, document.getElementById("root"));


