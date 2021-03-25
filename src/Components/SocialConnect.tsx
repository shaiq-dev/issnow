import styled from 'styled-components';

import {ReactComponent as Github} from '../assets/github.svg';
import {ReactComponent as Linkedin} from '../assets/linkedin.svg';
import {ReactComponent as Instagram} from '../assets/instagram.svg';

const SocialConnect : React.FC = () => {
    return (
        <div>
            <div className="title">Contribute</div>
           
            <ContributeWrapper style={{marginTop: '1rem'}}>
                <div>
                    <p >
                        Love OpenSource? Feel free to add a pull request or file an issue.
                        <br />
                        <span>
                            <a href="https://github.com/shaiq-dev/issnow">App</a>
                            <a href="https://github.com/shaiq-dev/server4issnow">Server</a>
                        </span>
                    </p>
                </div>
                <SocialWrapper>
                    <a href="https://github.com/shaiq-dev">
                        <div className="icon">
                            <Github />
                            <Github className="outer" />
                        </div>
                    </a>

                    <a href="https://linkedin.com/in/shaiqkar">
                        <div className="icon">
                            <Linkedin />
                            <Linkedin className="outer" />
                        </div>
                    </a>

                    <a href="https://instagram.com/shaiqkar_">
                        <div className="icon">
                            <Instagram />
                            <Instagram className="outer" />
                        </div>
                    </a>

                </SocialWrapper>
            </ContributeWrapper>
        </div>
    )
}

export default SocialConnect;

const ContributeWrapper = styled.div`
    display: flex;
    width: 100%;
    margin-bottom: 2rem;
    

    div:first-child {
        width: 85%;

        span {
            display: inline-block;
            margin-top: .6rem;
        }

        a {
            color: inherit;
            text-decoration: none;
            margin-right: 1rem;
            transition: 0.4s cubic-bezier(0.445, 0.05, 0.55, 0.95) all;

            &:hover {
                text-decoration: line-through;
            }
        }
    }

    div:last-child {
        width: 15%;
    }
`;

const SocialWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-end;

    a {
        color: var(--blue);
        text-decoration: none;
        display: inline-flex;
        align-items: center;
        position: relative;

        .icon {
            width: 15px;
            display: flex;
            justify-content: center;
            position: relative;

            svg {
                max-width: 100%;
                height: auto;
                transition: all .4s cubic-bezier(.215,.61,.355,1);

                &.outer {
                    position: absolute;
                    left: 50%;
                    top: 50%;
                    transform: translate(-50%,-50%) scale(2);
                    opacity: 0;
                }
            }
        }

        &:before {
            content: "";
            position: absolute;
            right: -8px;
            width: 30px;
            height: 30px;
            top: -5px;
            background: 0 0;
        }

        &:hover {
            .icon {
                svg {
                    opacity: 0;
                    transform: scale(.8);

                    &.outer {
                        opacity: 1;
                        transform: translate(-50%,-50%) scale(1);
                    }
                }
            }
        }
    }
`;