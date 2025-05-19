import React from 'react';
import HeroSection from '../Components/HeroSection';
import FollowInstagram from '../Components/FollowInstagram';
import Coffee from '../Components/Coffee';
import { useLoaderData } from 'react-router';

const Home = () => {
    const coffees = useLoaderData();
    return (
        <div>
            <HeroSection></HeroSection>
            <Coffee inetialCoffes={coffees}></Coffee>
            <FollowInstagram></FollowInstagram>
        </div>
    );
};

export default Home;