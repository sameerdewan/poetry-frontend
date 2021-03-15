import React, {
    useState
} from 'react';
import styled from '@emotion/styled';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import HashLoader from "react-spinners/HashLoader";
import LoginImage from '../images/login.svg';

const Image = styled.img`
    width: 40vw;
    height: 40vw;
`;

const TopMarginGrid15px = styled.div`
    margin-top: 15px;
    & .margin-right-10px {
        margin-right: 10px !important;
    };
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

function Signin() {
    const [loading, setLoading] = useState(false);
    // const [username, setUsername] = useState();
    // const [password, setPassword] = useState();
    return (
        <React.Fragment>
            <TopMarginGrid15px className='p-grid'>
                <div className='p-col-1' />
                <div className='p-col-5'>
                    <Image src={LoginImage} />
                </div>

                <LoginHeaderGrid className='p-col-5'>
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
                            <React.Fragment>
                                <Button disabled>
                                    <HashLoader
                                        color='#673AB6'
                                        size={20}
                                    /> &nbsp;
                                    Logging in...
                                </Button>
                            </React.Fragment>
                        }
                    </center>
                </LoginHeaderGrid>
                <div className='p-col-1' />
            </TopMarginGrid15px>
        </React.Fragment>
    );
}

export default Signin;
