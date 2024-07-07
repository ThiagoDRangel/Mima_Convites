import './styles.css';


function Search () {
    return (
        <div className="container-search">
            <h2>LOGO</h2>
            <div className="container-search-btn">
                <input type="text"  className="element-search" />
                <button className="element-btn">Buscar</button>
            </div>
            <h2>IMAGE</h2>
        </div>
    );
}

export default Search;
