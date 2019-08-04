import React from 'react';
import styled from 'styled-components';
import { graphql, useStaticQuery } from 'gatsby';
import Image from 'gatsby-image';

import img from '../images/milk-face.jpeg';

const getImages = graphql`
  {
    fixed: file(relativePath: { eq: "milk-hand.jpeg" }) {
      childImageSharp {
        fixed(width: 200) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    fluid: file(relativePath: { eq: "milk-bear.jpeg" }) {
      childImageSharp {
        fluid(
          maxWidth: 300
          duotone: { highlight: "#f00e2e", shadow: "#192550" }
        ) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    maxFluid: file(relativePath: { eq: "milk-bear.jpeg" }) {
      childImageSharp {
        fluid(maxWidth: 200) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
  }
`;

const Images = () => {
  const {
    fixed: {
      childImageSharp: { fixed },
    },
    fluid: {
      childImageSharp: { fluid },
    },
    maxFluid: {
      childImageSharp: { fluid: maxF },
    },
  } = useStaticQuery(getImages);
  return (
    <Wrapper>
      <article>
        <h3>basic Image</h3>
        <img src={img} alt="face in milk" className="basic" />
      </article>
      <article>
        <h3>fixed Image/blur</h3>
        <Image fixed={fixed} />
      </article>
      <article>
        <h3>fluid Image/svg</h3>
        <Image fluid={fluid} />
        <div className="small">
          <Image fluid={maxF} />
        </div>
      </article>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  text-align: center;
  text-transform: capitalize;
  width: 80vw;
  margin: 0 auto 10rem auto;
  .basic {
    width: 100%;
  }
  .small {
    margin: 1rem auto;
    width: 200px;
  }
  article {
    border: 3px solid red;
    padding: 1rem 0;
  }
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-column-gap: 1rem;
  }
`;

export default Images;
