import styled from '@emotion/styled';
import { Menubar } from 'primereact/menubar';

const ShamanNavbar = styled(Menubar)`
    background: white;
    box-shadow: rgba(0, 0, 0, 0.0) 0px 6px 24px 0px, rgba(0, 0, 0, 0.9) 0px 0px 0px 1px;
    font-family: poetry;
    & .p-menuitem-text {
        color: black !important;
    };
`;

function Navbar() {
    const items = [
        {
            label: 'poetry',
            icon: 'pi pi-fw shaman-logo'
        }
      ];
    return (
        <ShamanNavbar 
            model={items}
        />
    );
}

export default Navbar;
