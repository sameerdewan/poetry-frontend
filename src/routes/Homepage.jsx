import styled from '@emotion/styled'
import { Button } from 'primereact/button';
import React from 'react';
import logoWhite from '../images/poetry-white.svg';
import HomepageImage from '../images/homepage.svg';

const TopMarginGrid15px = styled.div`
    margin-top: 15px;
    & .margin-right-10px {
        margin-right: 10px !important;
    };
`;

const FlipImage = styled.img`
    -webkit-transform: scaleX(-1) !important;
    transform: scaleX(-1) !important;
`;

const HomePageHeaderGrid = styled.div`
    margin-top: 40px;
    padding: 30px;
`;

const HeaderText = styled.section`
    font-family: poetry;
    color: var(--poetry_brand);
    font-size: 1.7vw;
    font-weight: bolder;
`;

const SubHeaderText = styled.section`
    font-family: poetry;
    color: var(--poetry_brand);
    font-size: 1.5vw;
    font-weight: 100;
`;

const ButtonsContainer = styled.section`
    margin-top: 25px;
    width: 100%;
    display: inline-flex;
    justify-content: left;
    padding-left: 30px;
`;

const SafeImage = styled.img`
    height: 2.25vw;
`;

const BottomContainer = styled.section`
    background: var(--poetry_brand);
    width: 101vw;
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

function Homepage() {
    return (
        <React.Fragment>
            <TopMarginGrid15px className='p-grid'>
                <div className='p-col-6'>
                    <HomePageHeaderGrid>
                        <HeaderText>
                            Generate immutable, decentralized proofs for your files that are cross-blockchain resilient
                        </HeaderText>
                        <SubHeaderText>
                            <ul>
                                <li>Proof-of-Existence (PoE) blockchain protocols</li>
                                <li> No tokens required</li>
                                <li>Persist proofs to multiple chains (Ethereum, Harmony, Polkadot)</li>
                                <li>Easy to use interface</li>
                                <li>Seamless plug and play API integration</li>
                                <li>Solutions available for all - from casual to enterprise</li>
                            </ul>
                        </SubHeaderText>
                    </HomePageHeaderGrid>
                    <ButtonsContainer>
                        <Button label='Get started' className='margin-right-10px'/>
                        <Button label='Documentation' className='p-button-outlined margin-right-10px' />
                    </ButtonsContainer>
                </div>
                <div className='p-col-6'>
                    <FlipImage src={HomepageImage} />
                </div>
            </TopMarginGrid15px>
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
                    <Button className='p-button-sm' label='Basic' /><br/>
                    <Button className='p-button-sm' label='Professional' /><br/>
                    <Button className='p-button-sm' label='Small Business' /><br/>
                    <Button className='p-button-sm' label='Enterprise' /><br/>
                </div>
                <div className='p-col-3'>
                    <Button label='Resources'/><br/>
                    <Button className='p-button-sm' label='Getting Started' /><br/>
                    <Button className='p-button-sm' label='API Documentation' /><br/>
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
        </React.Fragment>
    );
}

export default Homepage;
