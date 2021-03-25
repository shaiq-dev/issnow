import {useState} from 'react'
import styled from 'styled-components'


const IssAboveMe : React.FC = () => {
    
     // eslint-disable-next-line
    const [coordinates, setCoordinates] = useState<Coordinates | null>(null)
     // eslint-disable-next-line
    const [error, setError] = useState<string | null>(null);
   
    const handleClick = () => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                setCoordinates({
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude
                })
            }, () => setError("Error fetching location") )
        }
        else {
            setError("Geolocation is not supported")
        }
    }

    return (
        <AboveWrapper>
            <div className="title">ISS Above Me Notifier</div>
            <p>Get notified in advance about when the ISS will be hovering above you. Use your current location or enter any valid coordinates to get started</p>
            <div className="input-holder">
                <input type="text" placeholder="Latitude" />
                <input type="text" placeholder="Longitude" />
            </div>
            <button onClick={handleClick}>
                NOTIFY ME
            </button>
        </AboveWrapper>
    )
}

export default IssAboveMe


const AboveWrapper = styled.div`
    width: 100%;
    margin-bottom: 1rem;
    margin-top: 1rem;

    p, .title {
        margin-bottom: 1rem;
    }

    .input-holder {
        display: flex;
        justify-content: space-between;
        width: 100%;
    }

    input {
        padding: .5rem 1rem;
        border-radius: 4px;
        font-size: 16px;
        line-height: 1;
        height: 44px;
        outline: 0;
        width: 48%;
        border: 1px solid var(--blue);
        background: var(--purple);
        color: var(--blue);

        &::placeholder {
            color: var(--blue);
        }
    }

    button {
        width: 100%;
        height: 44px;
        background-color: var(--blue);
        color: #fff;
        outline: 0;
        border: 0;
        text-align: center;
        font-size: 12px;
        font-weight: 700;
        margin-top: 1.5rem;
        cursor: pointer;
        position: relative;

        &:before {
            content: '';
            position: absolute;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: 1;
            opacity: 0;
            background-color: rgba(255, 255, 255, 0.2);
            transform: scale(1, 0.5);
            transition: all 0.4s ease;
        }

        &:focus, &:hover {
            border: 0;
            outline: 0;
            cursor: pointer;
        }

        &:hover  {
            &:before {
                opacity: 1;
                transform: scale(1, 1);
            }
        }
    }


`;
