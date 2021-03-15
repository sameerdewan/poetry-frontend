import React from 'react';
import styled from '@emotion/styled';
import { Button } from 'primereact/button';
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
    width: 50vw;
    height: 50vw;
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
                        <Button label='Get started' className='margin-right-10px' />
                        <Button label='Documentation' className='p-button-outlined margin-right-10px' icon='pi pi-book' />
                    </ButtonsContainer>
                </div>
                <div className='p-col-6'>
                    <FlipImage src={HomepageImage} />
                </div>
            </TopMarginGrid15px>
        </React.Fragment>
    );
}

export default Homepage;
