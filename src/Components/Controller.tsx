import {useState} from 'react';
import {ShowControlsButton, ControlPanel} from './Controller.styles'
import {ReactComponent as SatelliteIcon} from '../assets/rocket-launch.svg'

import IssStats from './IssStats'
import IssAboveMe from './IssAboveMe'
import SocialConnect from './SocialConnect'
import { StatsProps } from '../types/issnow';

type ControllerProps = {
    stats : StatsProps
}

const Controller : React.FC<ControllerProps> = ({stats} : ControllerProps) => {

    const [visible, setVisible] = useState<boolean>(false);

    return (
        <>
        <ShowControlsButton onClick={() => {setVisible(!visible)}}>
            <SatelliteIcon />
        </ShowControlsButton>
        <ControlPanel style={{ transform: `translateX(${visible ? '0' : '100%'})`}}>
            <IssStats coords={stats.coords} altitude={stats.altitude} velocity={stats.velocity} />
            <IssAboveMe />
            <SocialConnect />
        </ControlPanel>
        </>
    )
}

export default Controller