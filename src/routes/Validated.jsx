import { css } from '@emotion/react';
import styled from '@emotion/styled';
import React, { 
    useEffect,
    useCallback,
    useState 
} from 'react';
import { useParams } from 'react-router';
import HashLoader from "react-spinners/HashLoader";
import Error from '../images/error.svg';
import SuccessImg from '../images/validated.svg';

const Image = styled.img`
    width: 30vw;
    height: 40vw;
`;

const LoaderContainer = styled.div`
    ${props => props.noHeight ? 'position: relative; top: -150px;' : 'min-height: 70vh;'}
    justify-content: center;
    display: flex;
    & section {
        color: var(--poetry_brand);
        font-family: poetry;
    };
`;

const FailContainer = styled.div`
    & section {
        color: var(--poetry_brand);
        font-family: poetry;
        position: relative;
        top: -80px;
    };
    & code {
        outline: 1px dashed var(--poetry_brand);
        outline-offset: 5px;
        font-size: 16px;
    };
`;

function Checking() {
    return (
        <React.Fragment>
            <LoaderContainer>
                <HashLoader
                    css={css`margin: auto`}
                    size={150}
                    color='#673AB6'
                />
            </LoaderContainer>
            <LoaderContainer noHeight>
                <section>Checking validation code...</section>
            </LoaderContainer>
        </React.Fragment>
    );
}

function Failed() {
    const { validationCode } = useParams();
    return (
        <React.Fragment>
            <FailContainer className='p-col-12'>
                <center>
                    <Image src={Error} />
                    <section>We couldn't validate with your provided code</section>
                    <br />
                    <section>
                        <code>{validationCode}</code>
                    </section>
                    <br />
                    <section>Try registering again or reach out to support@poetrysystems.com</section>
                </center>
            </FailContainer>
        </React.Fragment>
    );
}

function Success() {
    return (
        <React.Fragment>
            <FailContainer className='p-col-12'>
                <center>
                    <Image src={SuccessImg} />
                    <section>Success!</section>
                    <br />
                    <section>Your account has been validated. <u>You can now login.</u></section>
                </center>
            </FailContainer>
        </React.Fragment>
    );
}

function Validated(props) {
    const { validationCode } = useParams();
    const [isLoading, setLoading] = useState(false);
    const [success, setSuccess] = useState(true);

    if (isLoading) return <Checking />;
    if (!success) return <Failed />;
    return <Success />;
}

export default Validated;
