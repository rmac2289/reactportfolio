import React from 'react';
import Nav from './Nav';
import Footer from './Footer';

function NotFoundPage(){
    return (
        <div>
        <Nav />
        <h2>Page Not Found</h2>
        <p>This page doesn't exist, try going back or using the navigation menu.</p>
        <Footer />
        </div>
    )
}