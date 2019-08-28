import React from 'react'
import styled from 'styled-components'
import BackgroundImage from 'gatsby-background-image'

const StyledHero = ({ img, className, children, isHome }) => {
    return (
        <BackgroundImage className={className} fluid={img} home={isHome}>
            {children}
        </BackgroundImage>
    )
}

export default styled(StyledHero)`
    min-height: ${props =>
        props.isHome ? 'calc(100vh - 62px)' : 'calc(50vh - 62px)'};
    background: ${props =>
        props.isHome
            ? 'linear-gradient(rgba(63, 208, 212, 0.7), rgba(0, 0, 0, 0.7))'
            : 'none'};
    background-position: center;
    background-size: cover;
    opacity: 1 !important;
    display: flex;
    justify-content: center;
    align-items: center;
`
