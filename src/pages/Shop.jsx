import React, {useState} from 'react'
import CommonSection from '../components/UI/CommonSection'
import Helmet from '../components/Helmet/Helmet'
import { Col, Container, Row } from 'reactstrap'
import '../styles/shop.css'
import products from '../assets/data/products'
import ProductList from '../components/UI/ProductsList'

const Shop = () => {
  const [productsData, setProductsData] = useState(products)

   const handleFilter = e => {
     const filterValue = e.target.value;
     if(filterValue === 'cookwares') {
      const filteredProducts = products.filter((item) => item.category === 'cookwares')
      setProductsData(filteredProducts)
     }
     if(filterValue === 'containers') {
      const filteredProducts = products.filter((item) => item.category === 'containers')
      setProductsData(filteredProducts)
     }
     if(filterValue === 'dishes') {
      const filteredProducts = products.filter((item) => item.category === 'dishes')
      setProductsData(filteredProducts)
     }
     if(filterValue === 'spoons') {
      const filteredProducts = products.filter((item) => item.category === 'spoons')
      setProductsData(filteredProducts)
     }
     if(filterValue === 'organizers') {
      const filteredProducts = products.filter((item) => item.category === 'organizers')
      setProductsData(filteredProducts)
     }
     if(filterValue === 'gadgets') {
      const filteredProducts = products.filter((item) => item.category === 'gadgets')
      setProductsData(filteredProducts)
     }
   }
   const handleSearch = e => {
    const searchTerm = e.target.value 

    const searchProducts = products.filter(item => item.productName.toLowerCase().includes(searchTerm.toLowerCase()))
    setProductsData(searchProducts)
   }

  return <Helmet title='Shop'>
     <CommonSection title='products'/>

     <section>
       <Container>
        <Row>
          <Col lg='3' md='6'>
            <div className="filter__widget">
              <select onChange={handleFilter}>
                <option>Filter By Category</option>
                <option value="cookwares">Cookwares</option>
                <option value="containers">Containers</option>
                <option value="spoons">Spoons</option>
                <option value="dishes">Dishes</option>
                <option value="organizers">Organizers</option>
                <option value="gadgets">Gadgets</option>
              </select>
            </div>
          </Col>
          <Col lg='3' md='6' className='text-end'>
          <div className="filter__widget">
              <select>
                <option>Sort By</option>
                <option value="ascending">Ascending</option>
                <option value="descending">Descending</option>
              </select>
            </div> 
          </Col>
          <Col lg='6' md='12'>
            <div className="search__box">
              <input type="text" placeholder='Search......' onChange={handleSearch} />
              <span><i class='ri-search-line'></i></span>
            </div>
          </Col>
        </Row>
       </Container>
     </section>
     <section className='pt-0'>
      <Container>
        <Row>
          {
            productsData.length === 0? <h1 className='text-center fs-4'>No products are found!</h1> : <ProductList data={productsData}/>
          }
        </Row>
      </Container>
     </section>
  </Helmet>
}

export default Shop