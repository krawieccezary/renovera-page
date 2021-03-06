import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import Image from 'gatsby-image';


const Logo = ({ className }) => {
  const image = useStaticQuery(
    graphql`
      {
      file(name: {regex: "/logo/i"}) {
        childImageSharp {
          fixed(height: 100, quality: 90){
            ...GatsbyImageSharpFixed_tracedSVG
          }
        }
      }
    }
  `
  );


  return <Image className={className} fixed={image.file.childImageSharp.fixed} />

}

export default Logo;
