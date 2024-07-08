import Card from "../../components/Card";
import Header from "../../components/Header/intex";
import Products from "../../components/Products";
import Search from "../../components/Search";
import Social from "../../components/Social";

function Home () {
  return (
    <div>
      <Social />
      <Search />
      <Header />
      <Card />
      <Products />
    </div>
  )
}

export default Home;
