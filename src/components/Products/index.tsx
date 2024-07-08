import './styles.css';


function Products () {
    return (
        <div className="container-products">
            <h2>PRODUTOS EM DESTAQUE</h2>
            <p>Registre seus momentos inesquecíveis para sempre serem lembrados</p>
            <div className="items">
                <div className="types-products">RECENTES</div>
                <div className="types-products">MAIS VENDIDOS</div>
            </div>
        </div>
    );
}

export default Products;
