import React from 'react';
import styled from '@emotion/styled';
import { Button } from 'primereact/button';
import logoWhite from '../images/poetry-white.svg';

const SafeImage = styled.img`
    height: 2.25vw;
`;

const BottomContainer = styled.section`
    background: var(--poetry_brand);
    width: 102vw;
    padding: 25px 150px;
    position: relative;
    bottom: 0;
    & .poetry-footer-logo {
        color: white;
        font-size: 1.5vw;
    };
    & .white-text {
        color: white;
        font-family: effra,helvetica,arial,sans-serif;
        font-size: 1vw;
    };
`;

function Footer() {
    return (
        <BottomContainer className="p-grid">
            <div className='p-col-2'>
                <section className='poetry-footer-logo'>
                    <SafeImage src={logoWhite} />
                    poetry
                </section>
                <p className='white-text'>
                    poetry Ltd. is registered in the US. 1602 Mockingbird Hill, Dalton, GA
                </p>
            </div>
            <div className='p-col-1'/>
            <div className='p-col-2'>
                <Button label='Product'/><br/>
                <Button className='p-button-sm' label='Information' /><br/>
                <Button className='p-button-sm' label='Pricing' /><br/>
            </div>
            <div className='p-col-3'>
                <Button label='Resources'/><br/>
                <Button className='p-button-sm' label='Getting Started' /><br/>
                <Button className='p-button-sm' label='API Documentation' /><br/>
                <Button className='p-button-sm' label='Live chat' /><br/>
                <Button className='p-button-sm' label='Contact us' /><br/>
            </div>
            <div className='p-col-3'>
                <Button label='Legal'/><br/>
                <Button className='p-button-sm' label='License' /><br/>
                <Button className='p-button-sm' label='Privacy Statement' /><br/>
            </div>
            <div className='p-col-1'>
                <Button label='Social'/>
            </div>
        </BottomContainer>
    );
}

export default Footer;
