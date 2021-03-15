import React, {
    useState,
    useCallback
} from 'react';
import styled from '@emotion/styled';
import { useHistory } from 'react-router-dom';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import HashLoader from "react-spinners/HashLoader";
import RegisterImage from '../images/register.svg';
import { register } from '../services/poetry-system';

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

function Signup() {
    const [loading, setLoading] = useState(false);
    const [username, setUsername] = useState();
    const [password, setPassword] = useState();
    // const [confirmPassword, setConfirmPassword] = useState();
    const [email, setEmail] = useState();

    const history = useHistory();

    const local_register = useCallback(
        async () => {
            setLoading(true)
            try {
                await register({ username, password, email });
                window.localStorage.setItem('registered', 'true');
                history.push('/registered');
            } catch (error) {
                console.log(error);
            }
            setLoading(false);
        },
        [email, history, password, username]
    );

    return (
        <React.Fragment>
            <TopMarginGrid15px className='p-grid'>
                <div className='p-col-1' />
                <div className='p-col-5'>
                    <Image src={RegisterImage} />
                </div>
                <SignupHeaderGrid className='p-col-5'>
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
                            <InputText placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
                        </div>
                        <br />
                        <div className="p-inputgroup">
                            <span className="p-inputgroup-addon">
                                <i className="pi pi-lock"></i>
                            </span>
                            <InputText placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
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
                            <InputText placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
                        </div>
                        <br />
                        {
                            !loading ? <Button label='Sign up' onClick={local_register} /> :
                            <React.Fragment>
                                <Button disabled>
                                    <HashLoader
                                        color='#673AB6'
                                        size={20}
                                    /> &nbsp;
                                    Signing up...
                                </Button>
                            </React.Fragment>
                        }
                    </center>
                </SignupHeaderGrid>
                <div className='p-col-1' />
            </TopMarginGrid15px>
        </React.Fragment>
    );
}

export default Signup;
