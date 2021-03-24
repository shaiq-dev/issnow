import styled from 'styled-components'

const IssStats : React.FC = () => {
    return (
        <StatsWrapper>
            <div className="title">ISS Stats</div>
        </StatsWrapper>
    )
}

export default IssStats

const StatsWrapper = styled.div`
    width: 100%;
    position: relative;
    margin: 1rem 0;
`;