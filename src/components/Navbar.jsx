import styled from '@emotion/styled';
import { Menubar } from 'primereact/menubar';
import { Button } from 'primereact/button';

const ShamanNavbar = styled(Menubar)`
    background: white;
    font-family: poetry;
    & .p-menuitem-text {
        color: #673AB6 !important;
        font-size: 24px;
        margin-left: 14px;
    };
    & .p-menubar-button {
        display: none !important;
    };
    & .margin-right-10px {
        margin-right: 10px !important;
    };
`;

const ShamanLogo = () => {
    return (
        // eslint-disable-next-line jsx-a11y/anchor-is-valid
        <a href="#" role="menuitem" class="p-menuitem-link" aria-haspopup="false">
            <span class="p-menuitem-icon pi pi-fw shaman-logo"/>
            <span class="p-menuitem-text">poetry</span>
            <span class="p-ink"/>
        </a>
    );
};

const Menu = () => {
    const buttons = [
        { label: 'Product', className: 'p-button-text' },
        { label: 'Pricing', className: 'p-button-text' },
        { label: 'Sign in', className: 'p-button-outlined margin-right-10px' },
        { label: 'Sign up', className: 'margin-right-10px' }
    ];
    return buttons.map(button => <Button {...button} />);
};

function Navbar() {
    return (
        <ShamanNavbar
            start={<ShamanLogo />}
            end={<Menu />}
        />
    );
}

export default Navbar;
