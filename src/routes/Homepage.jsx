import styled from '@emotion/styled'
import HomepageImage from '../images/homepage.svg';

const TopMarginGrid15px = styled.div`
    margin-top: 15px;
`;

const FlipImage = styled.img`
    -webkit-transform: scaleX(-1) !important;
    transform: scaleX(-1) !important;
`;

const HeaderText = styled.span`
    font-family: poetry;
    color: var(--poetry_brand);
`;

function Homepage() {
    return (
        <TopMarginGrid15px className='p-grid'>
            <div className='p-col-6'>
                <HeaderText>
                    the speed of light
                </HeaderText>
            </div>
            <div className='p-col-6'>
                <FlipImage src={HomepageImage} />
            </div>
        </TopMarginGrid15px>
    );
}

export default Homepage;
