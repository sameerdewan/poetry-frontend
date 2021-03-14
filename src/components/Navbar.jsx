import { Menubar } from 'primereact/menubar';

function Navbar() {
    const items = [
        {
            template: () => {
                
            }
        }
      ];
    return (
        <Menubar 
            model={items}
        />
    );
}

export default Navbar;
