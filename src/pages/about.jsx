import React, { Component } from "react";
import { graphql } from "gatsby";
import Helmet from "react-helmet";
import Layout from "../layout";
import About from "../components/About/About";
import config from "../../data/SiteConfig";

export const query = graphql`
  query {
    file(relativePath: { eq: "biomain.jpg" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`;

class AboutPage extends Component {
  render() {
    return (
      <Layout>
        <div className="about-container">
          <Helmet title={`About | ${config.siteTitle}`} />
          <About image={this.props.data.file.childImageSharp.fluid} />
        </div>
      </Layout>
    );
  }
}

export default AboutPage;
