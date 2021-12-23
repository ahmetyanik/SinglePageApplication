import { Link } from "react-router-dom";
import Card from "./Card";
import Navbar from "./Navbar";

function Mainpage({ state, images }) {

    
  return (
    <div className="flex flex-col ">
      <Navbar />
      <div className="flex justify-center">
        <div className="container flex flex-wrap justify-center">

        {
            state.map((book,index)=>{

                return(
                <Link to={`/book/${book.name}`}> <Card book={book} image={images[index]}/> </Link> 
                )
            })
        }

        </div>
      </div>
    </div>
  );
}

export default Mainpage;
