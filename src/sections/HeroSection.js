import React from 'react';
import StackedButton from '../components/StackedButton';


export default function HeroSection(props) {
    return (
        <div className="bg-hero-img bg-cover bg-top bg-no-repeat p-2 min-h-screen bg-fixed font-press-start">
            <div className="text-left text-6xl p-4 m-5 py-8 text-white">

                <p>{props.main}</p>
                <StackedButton text={props.button_text} onClick='' />
                <p className='text-white text-2xl text-center mt-10'> 
                    Yield producing mock-options Strategies, easy deposits of cUsd and Celo
                </p>
            </div>
           
        </div>
    );
}