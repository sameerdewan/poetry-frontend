import React, { useEffect, useState } from 'react';
import styled from '@emotion/styled';
import RegisteredImage from '../images/email_sent.svg';
import { Redirect } from 'react-router';

const Image = styled.img`
    width: 20vw;
    height: 20vw;
`;

const TopMarginGrid15px = styled.div`
    margin-top: 15px;
    padding-top: 10vw;
    & .margin-right-10px {
        margin-right: 10px !important;
    };
    text-align: center;
    font-family: poetry;
    color: var(--poetry_brand);
    & h3 {
        padding-bottom: 10vw;
    };
`;

function Registered() {
    const [shouldRedirect, setRedirect] = useState(false);
    useEffect(() => {
        if (window.localStorage.getItem('registered') !== 'true') {
            setRedirect(true);
        }
    }, []);
    if (shouldRedirect) {
        return (
            <Redirect to='/' />
        );
    }
    return (
        <React.Fragment>
            <TopMarginGrid15px className='p-grid'>
                <div className='p-col-3' />
                <div className='p-col-6'>
                    <Image src={RegisteredImage} />
                    <section>
                        <h1>You've got mail</h1>
                        <h3>Check your email to validate your account and start using poetry</h3>
                    </section>
                </div>
                <div className='p-col-3' />
            </TopMarginGrid15px>
        </React.Fragment>
    );
}

export default Registered;
