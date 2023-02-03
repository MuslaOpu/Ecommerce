

import React, {useState, useEffect} from 'react';

import { Link } from 'react-router-dom';
import  { motion } from 'framer-motion';
import products from '../assets/data/products';

import Helmet from '../components/Helmet/Helmet';
import '../styles/home.css';

import {Container,Row, Col } from 'reactstrap';

import heroImg  from '../assets/images/hero-img.png';

import Services from '../services/Services';

import Productslist from '../components/UI/Productslist';


const Home = () => {

    const [trendingProducts,setTrendingProducts] = useState([]);
    const [bestSalesProducts, setBestSalesProducts] = useState([]);
    const year = new Date().getFullYear();

    useEffect(() => {
        const filteredTrendingProducts = products.filter(
            (item) => item.category === 'chair'
        );

        const filteredBestSalesProducts = products.filter(
            (item)=> item.category === 'sofa');

        setTrendingProducts(filteredTrendingProducts);
        setBestSalesProducts(filteredBestSalesProducts);
    },[]);

    return (
        <Helmet title={'Home'}>
            <section className='hero_section'>
                <Row >
                    <Col lg='6' md='6'>
                        <div className="hero_content">
                            <p className="hero_subtitle">
                                Trending prodct in {year}
                            </p>
                            <h2>Make Your Interior More Minimalistic & Modern</h2>
                            <p>Lorem, ipsum dolor sit amet consectetur adipisicing 
                                elit. Minima magni repellendus provident repudiandae 
                                aut consequuntur odio officia enim, molestias, sunt 
                                laborum aspernatur tenetur debitis nisi necessitatibus, 
                                veniam fugit eveniet modi?
                            </p>
                            <motion.button whileTap = {{scale: 1.2}} className="buy_btn">
                                <Link to = '/shop'>SHOP_NOW</Link>
                            </motion.button>
                        </div>
                    </Col>

                    <Col lg='6' md='6'>
                        <div className="hero_img">
                            <img src={heroImg} alt="" />
                        </div>
                    </Col>
                </Row>
            </section>

            <Services/>

            <section className='trending_products'>
                <Container>
                    <Row>
                        <Col lg='12' className='text-center'>
                            <h2 className='section_title'>
                                Trending Products
                            </h2>
                            <Productslist data={trendingProducts}/>
                        </Col>
                    </Row>
                </Container>

            </section>

            <section className="best_sales">
                <Container>
                    <Row>
                        <Col lg='12' className='text-center'>
                            <h2 className="section_title">Best Sales</h2>
                        
                        </Col>

                        <Productslist data={bestSalesProducts}/>
                    </Row>
                </Container>
            </section>
        </Helmet>
    )
}

export default Home;