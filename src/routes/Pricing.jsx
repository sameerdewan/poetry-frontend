import React from 'react';
import styled from '@emotion/styled';
import { Card } from 'primereact/card';
import Casual from '../images/casual.svg';
import Professional from '../images/professional.svg';
import SmallBusiness from '../images/small_business.svg';
import Enterprise from '../images/enterprise.svg';

const TopMarginGrid15px = styled.div`
    margin-top: 15px;
    & .margin-right-10px {
        margin-right: 10px !important;
    };
    & .p-card {
        box-shadow: none !important;
        -webkit-box-shadow: none !important;
        border: 2px solid var(--poetry_brand);
    };
    & .p-card-title {
        font-family: poetry;
        color: var(--poetry_brand);
    };
    & .p-card-header {
        color: var(--poetry_brand);
        font-family: poetry;
        padding: 0px 10px;
        height: 7.5em;
        text-align: center;
        font-size: .8em;
    };
    padding-bottom: 5vw;
    padding-top: 5vw;
`;

const Img = styled.img`
    height: 10vw;
    width: 10vw;
`;

const Padder = styled.div`
    padding: 20px;
    display: inline-flex;
    min-width: 100vw;
    height: 100%;
`;

const centerWrap = (element) => <center>{element}</center>;

const Header = ({ title, price, yearly }) => {
    return (
        <div style={{ display: 'inline-block' }}>
            <h1>{title}</h1>
            {
                price ?
                <section>${price}.00 / month</section> :
                <section>Contact us</section>
            }
            {
                yearly ?
                <>
                   ~ or ~
                    <section>${yearly}.00 / yearly</section>
                </> :
                <></>
            }
        </div>
    );
};

const PriceColumn = ({ title, price, yearly, image, bullets = [] }) => {
    return (
        <div className='p-col-3' height="100%">
            <Card header={<Header title={title} price={price} yearly={yearly}/>} style={{ width: '100%', height: "100%" }}>
                <div className='p-m-0' 
                    style={{ lineHeight: '1.5', textAlign: 'left', color: 'var(--poetry_brand)', fontFamily: 'poetry', height: '12em' }}
                >
                    What's included:
                    <ul>
                        {
                            bullets.map(b => <li>{b}</li>)
                        }
                    </ul>
                </div>
                {centerWrap(<Img src={image} />)}
            </Card>
        </div>
    );
};

const columns = [
    { title: 'casual', price: 5, yearly: 40, image: Casual, bullets: [] },
    { title: 'professional', price: 15, yearly: 100, image: Professional, bullets: [] },
    { title: 'small business', price: 30, yearly: 200, image: SmallBusiness, bullets: [] },
    { title: 'enterprise', image: Enterprise, bullets: [] }
];

function Pricing() {
    return (
        <React.Fragment>
            <TopMarginGrid15px className='p-grid '>
                <Padder>
                    {
                        columns.map(column => <PriceColumn {...column} />)
                    }
                </Padder>
            </TopMarginGrid15px>
        </React.Fragment>
    );
}

export default Pricing;
