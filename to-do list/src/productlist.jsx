
function Productlist(){

   //initialize search term state
    function ProductSearch() {
        const [searchTerm, setSearchTerm] = useState('');
    const products = [
        { id: 1, name: "Laptop", price: "$999" },
        { id: 2, name: "Smartphone", price: "$499" },
        { id: 3, name: "Tablet", price: "$299" },
        { id: 4, name: "Headphones", price: "$199" },
        { id: 5, name: "Smartwatch", price: "$149" }
      ];
      //filter products based on search term
      const filteredProducts = products.filter(product =>
        product.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
      // event handler for search input change
      const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
      };

      
    return(
        <div>
              <div>
      <input
        type="text"
        placeholder="Search products"
        value={searchTerm}            // Bind input to search term state
        onChange={handleSearchChange}  // Update search term on input change
      />
      
      <ul>
        {filteredProducts.map(product => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
            

        </div>

    );
}

export default Productlist
