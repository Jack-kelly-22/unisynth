import React from 'react';
import StackedButton from '../components/StackedButton';
const mock_data = {
    mock_options : [
        {
            title:'CELO-3X-LONG',
            color:'green',
            historical_return_rates: [
                {t:'1h',return:'+0.00%'},
                {t:'12h',return:'+0.00%'},
                {t:'1d',return:'+0.00%'},
                {t:'7d',return:'+0.00%'},
                {t:'30d',return:'+0.00%'},
            ],
            assumptions: [
                "Celo go up"
            ],
            leverage: 3.0,
            lev_desciption: "exposed to the price fluctuations of the underlying asset 3x",

        },
        {
            title:'CELO-3X-SHORT',
            color: 'blue',
            historical_return_rates: [
                {t:'1h',return:'+0.00%'},
                {t:'12h',return:'+0.00%'},
                {t:'1d',return:'+0.00%'},
                {t:'7d',return:'+0.00%'},
                {t:'30d',return:'+0.00%'},
            ],
            assumptions: [
                "Celo drill"
            ],
            leverage: 3.0,
            lev_desciption: "exposed to the price fluctuations of the underlying asset 3x",

        },
        {
            title:'MOBI/UBE-3X-LONG',
            color: 'pink',
            historical_return_rates: [
                {t:'1h',return:'+0.00%'},
                {t:'12h',return:'+0.00%'},
                {t:'1d',return:'+0.00%'},
                {t:'7d',return:'+0.00%'},
                {t:'30d',return:'+0.00%'},
            ],
            assumptions: [
                "Mobie UBE go up"
            ],
            leverage: 3.0,
            lev_desciption: "exposed to the price fluctuations of the underlying asset 3x",

        }
    ]
    }

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