import React from 'react';
import Head from 'next/head';
import HeaderKebut from '../components/kebutuhan/HeaderKebut';
import HeroKebut from '../components/kebutuhan/HeroKebut';
import SearchSectionKebut from '../components/kebutuhan/SearchSectionKebut';
import FavoritesSectionKebut from '../components/kebutuhan/FavoritesSectionKebut';
import OffersSectionKebut from '../components/kebutuhan/OffersSectionKebut';
import TestimonialKebut from '../components/kebutuhan/TestimonialKebut';
import WhyChooseUsKebut from '../components/kebutuhan/WhyChooseUsKebut';
import FooterKebut from '../components/kebutuhan/FooterKebut';


const Home: React.FC = () => {
    return (
        <>
            <Head>
                <title>Marketplace Website</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            </Head>
            <HeaderKebut />
            <HeroKebut />
            <SearchSectionKebut />
            <FavoritesSectionKebut />
            <OffersSectionKebut />
            <TestimonialKebut />
            <WhyChooseUsKebut />
            <FooterKebut />
        </>
    );
}

export default Home;
