import styled from '@emotion/styled';
import { useHistory } from 'react-router';
import { Menubar } from 'primereact/menubar';
import { Button } from 'primereact/button';
import logo from '../images/poetry.svg';

const PoetryNavbar = styled(Menubar)`
    background: white;
    font-family: poetry;
    & .p-menuitem-text {
        color: var(--poetry_brand) !important;
        font-size: 2vw;
        margin-left: 5px;
    };
    & .p-menubar-button {
        display: none !important;
    };
    & .margin-right-10px {
        margin-right: 10px !important;
    };
`;

const SafeLogo = styled.img`
    height: 3vw;
`;

const PoetryLogo = () => {
    const history = useHistory();
    return (
        // eslint-disable-next-line jsx-a11y/anchor-is-valid
        <a href="#" role="menuitem" class="p-menuitem-link" aria-haspopup="false" onClick={() => history.push('/')}>
            <SafeLogo 
                src={logo}
                alt='poetry'
            />
            <span class="p-menuitem-text">poetry</span>
            <span class="p-ink"/>
        </a>
    );
};

const Menu = () => {
    const history = useHistory();
    const buttons = [
        { label: 'Product', className: 'p-button-text', key: '/product' },
        { label: 'Pricing', className: 'p-button-text', key: '/pricing' },
        { label: 'Documentation', className: 'p-button-text', key: '/documentation' },
        { label: 'Sign in', className: 'p-button-outlined margin-right-10px', key: '/sign-in' },
        { label: 'Sign up', className: 'margin-right-10px', key: '/sign-up' }
    ];
    return buttons.map(button => <Button {...button} onClick={() => history.push(button.key)} />);
};

function Navbar() {
    return (
        <PoetryNavbar
            start={<PoetryLogo />}
            end={<Menu />}
        />
    );
}

export default Navbar;
