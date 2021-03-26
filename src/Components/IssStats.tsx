import styled from 'styled-components'
import {ReactComponent as Earth} from '../assets/earth.svg'
import { StatsProps } from '../types/issnow'

import {roundN} from '../Utils'

const IssStats : React.FC<StatsProps> = ({coords, altitude, velocity} : StatsProps) => {
    console.log(coords)
    return (
        <StatsWrapper>
            <div className="title">ISS Stats</div>
            <StatsContainer>
                <Earth width={120} className="earth" />
                <span className="altitude">ALTITUDE</span>
                <span className="altitude-value">{altitude} Km</span>
                <div className="coordinates">
                    <span>{roundN(coords[0], 4)}° N</span>
                    <span>{roundN(coords[1], 4)}° E</span>
                </div>
                <span className="velocity">VELOCITY - {velocity} KM/H</span>
            </StatsContainer>
        </StatsWrapper>
    )
}

export default IssStats

const StatsWrapper = styled.div`
    width: 100%;
    position: relative;
    margin: 1rem 0;
`;

const StatsContainer = styled.div`
    position: relative;
    margin-top: 1rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    /* border: 1px solid #fff; */
    height: 205px;

    .earth {
        margin: 3rem 0;
    }

    span {
        font-size: 12px;
    }

    .altitude {
        position: absolute;
        transform: rotate(90deg);
        top: 107px;
        left: 182px;
    }

    .altitude-value {
        position: absolute;
        top: 150px;
        left: 192px;
    }

    .coordinates {
        position: absolute;
        display: flex;
        flex-direction: column;
        top: 44px;
        left: 232px;
    }

    .velocity {
        position: absolute;
        top: 43px;
        left: 50px;
    }
`;