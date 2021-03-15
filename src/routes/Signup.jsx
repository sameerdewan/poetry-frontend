import React, {
    useState,
    useCallback
} from 'react';
import styled from '@emotion/styled';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import RegisterImage from '../images/register.svg';
import { register } from '../services/poetry-system';

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

const SignupHeaderGrid = styled.div`
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

function Signup({ Footer }) {
    const [loading, setLoading] = useState(false);
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    const [confirmPassword, setConfirmPassword] = useState();
    const [email, setEmail] = useState();

    const local_register = useCallback(
        async () => {
            try {
                await register({ username, password, email });
            } catch (error) {
                console.log(error);
            }
        },
        [email, password, username]
    );

    return (
        <React.Fragment>
            <TopMarginGrid15px className='p-grid'>
                <div className='p-col-6'>
                    <Image src={RegisterImage} />
                </div>
                <SignupHeaderGrid className='p-col-6'>
                    <center>
                        <HeaderText>
                            Sign up for an account
                        </HeaderText>
                        <SubHeaderText>
                            <p>
                                You're only a few clicks away from harnessing the power
                                of the blockchain in your workflows
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
                        <div className="p-inputgroup">
                            <span className="p-inputgroup-addon">
                                <i className="pi pi-check"></i>
                            </span>
                            <InputText placeholder="Confirm Password" />
                        </div>
                        <br />
                        <div className="p-inputgroup">
                            <span className="p-inputgroup-addon">
                                <i className="pi pi-envelope"></i>
                            </span>
                            <InputText placeholder="Email" />
                        </div>
                        <br />
                        {
                            !loading ? <Button label='Sign up' onClick={() => setLoading(true)} /> :
                            <Button disabled label='Signing up...' icon='pi pi-spin pi-spinner' iconPos='right' />
                        }
                    </center>
                </SignupHeaderGrid>
                <Footer />
            </TopMarginGrid15px>
        </React.Fragment>
    );
}

export default Signup;
