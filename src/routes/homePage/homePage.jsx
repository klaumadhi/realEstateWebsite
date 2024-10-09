import SearchBar from "../../components/searchBar/searchBar";
import "./homePage.scss";

export default function HomePage() {
  return (
    <div className="homePage">
        <div className="textContainer">
            <div className="wrapper">

            <h1 className="title">Find Real Estate & Get Your Dream Place</h1>
           <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repellendus, sint dolor delectus aut voluptatem laudantium repellat quidem! Non eius mollitia vitae optio sequi reprehenderit repudiandae quasi quaerat rerum, sint molestiae?</p>
          <SearchBar/>
          <div className="boxes">
            <div className="box">
                <h1>16+</h1>
                <h2>Years of Experience</h2>
            </div>
            <div className="box">
                <h1>200</h1>
                <h2>Awards Gained</h2>
            </div>
            <div className="box">
                <h1>1200+</h1>
                <h2>Property Ready</h2>
            </div>
          </div>
           </div>
        </div>
        <div className="imageContainer">
            <img src="/bg.png" alt="" />
        </div>
    </div>
  )
}
