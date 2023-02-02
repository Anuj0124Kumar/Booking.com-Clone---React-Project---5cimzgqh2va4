import React from 'react'
import Featured from '../../Featured/Featured'
import FeaturedProperties from '../../FeaturedProperties/FeaturedProperties'
import Footer from '../../footer/Footer'
import Header from '../../header/Header'
import MailList from '../../mailList/MailList'
import Navbar from '../../navbar/Navbar'
import PropertyList from '../../propertyList/PropertyList'
import './home.css';

export default function Home() {
    return (
        <>
            <Navbar />
            <Header />
            <div className="homeContainer">
                <Featured />
                <h1 className="homeTitle">Browse by property type</h1>
                <PropertyList />
                <h1 className="homeTitle">Homes guests love</h1>
                <FeaturedProperties />
                <MailList />
                <Footer />
            </div>
        </>
    )
}
