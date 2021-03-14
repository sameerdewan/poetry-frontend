import React, {
    useState
} from 'react';
import styled from '@emotion/styled';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import LoginImage from '../images/login.svg';

const Image = styled.img`
    width: 50vw;
    height: 50vw;
`;

const TopMarginGrid15px = styled.div`
    margin-top: 15px;
    & .margin-right-10px {
        margin-right: 10px !important;
    };
    height: 100vh;
`;

const LoginHeaderGrid = styled.div`
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
    font-size: 1.0vw;
    font-weight: 100;
    width: 300px;
`;

function Signin({ Footer }) {
    const [loading, setLoading] = useState(false);
    return (
        <React.Fragment>
            <TopMarginGrid15px className='p-grid'>
                <div className='p-col-5'>
                    <Image src={LoginImage} />
                </div>
                <div className='p-col-1' />
                <LoginHeaderGrid className='p-col-6'>
                    <center>
                        <HeaderText>
                            Login to your account
                        </HeaderText>
                        <SubHeaderText>
                            <p>
                                Welcome back!
                            </p>
                        </SubHeaderText>
                        <div className="p-inputgroup">
                            <span className="p-inputgroup-addon">
                                <i className="pi pi-user"></i>
                            </span>
                            <InputText placeholder="Username" />
                        </div>
                        <br />
                        <div className="p-inputgroup">
                            <span className="p-inputgroup-addon">
                                <i className="pi pi-lock"></i>
                            </span>
                            <InputText placeholder="Password" />
                        </div>
                        <br />
                        {
                            !loading ? <Button label='Login' onClick={() => setLoading(true)} /> :
                            <Button disabled label='Logging in...' icon='pi pi-spin pi-spinner' iconPos='right' />
                        }
                    </center>
                </LoginHeaderGrid>
                <Footer />
            </TopMarginGrid15px>
        </React.Fragment>
    );
}

export default Signin;
