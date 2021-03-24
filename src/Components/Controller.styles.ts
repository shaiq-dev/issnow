import styled from "styled-components";

export const ShowControlsButton = styled.button`
    position: absolute;
    top: 0;
    right: 0;
    margin-top: 2.5rem;
    margin-right: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--red-light);
    width: 60px;
    height: 60px;
    border-radius: 50%;
    border: 0;
    outline: 0;
    z-index: 99988;
    box-shadow: 0px 21px 31px 0px rgb(0 0 0 / 20%);
    transform-style: preserve-3d;
    cursor: pointer;

    &::focus {
        outline: 0;
    }

    svg {
        width: 28px;
        height: 28px;
        color: var(--red);
        transform: rotate(-90deg);
    }

    &::before, &::after {
        width: 140px;
        height: 140px;
        border-radius: 50%;
        background-clip: padding-box;
        position: absolute;
        left: 50%;
        top: 50%;
        opacity: 0;
        transform: translate3d(-50%,-50%, -1px);
        animation: ripple linear 2s;
        animation-iteration-count: infinite;
        display: block;
        box-shadow: inset 0 0 35px 10px var(--red);
        border-color: var(--red);
        content: '';
    }

    &::before {
        animation-delay: .5s;
    }

    &::after {
        animation-delay: 1s;
    }

    @keyframes ripple {
    0% {
        opacity: 0;
        -webkit-transform: translate(-50%,-50%) scale(.3);
        transform: translate(-50%,-50%) scale(.3)
    }

    1% {
        -webkit-transform: translate(-50%,-50%) scale(.32);
        transform: translate(-50%,-50%) scale(.32);
        opacity: .1
    }

    20% {
        opacity: .5;
        -webkit-transform: translate(-50%,-50%) scale(0 0.45);
        transform: translate(-50%,-50%) scale(0 0.45)
    }

    60% {
        -webkit-transform: translate(-50%,-50%) scale(.75);
        transform: translate(-50%,-50%) scale(.75);
        opacity: .35
    }
}
`

export const ControlPanel = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    width: 410px;
    padding: 0 42px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: var(--purple);
    z-index: 99998;
    transition: transform .4s cubic-bezier(.215,.61,.355,1);
`;