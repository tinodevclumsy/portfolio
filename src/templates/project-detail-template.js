import React from "react"
import { graphql } from "gatsby"
import GlobalStyle from "../styles/globalStyles"
import Layout from "../components/TheLayout"
import styled from "styled-components"
import Title from "../components/common/Title"

const Container = styled.section`
  margin: 150px 0 75px 0;
`

const StyledContent = styled.div`
  h3 {
    position: relative;
    margin: 30px 0 15px;
    font-weight: 600;
    &::before {
      content: "";
      width: 15px;
      height: 3px;
      background-color: var(--primary);
      position: absolute;
      top: -10px;
      left: 0;
      border-radius: 3px;
    }
  }
  a {
    color: var(--secondary);
  }
  .thumbnail {
    margin-bottom: 30px;
  }
  ul li {
    position: relative;
    list-style-type: none;
    padding-left: 20px;

    &::before {
      content: "•";
      position: absolute;
      top: 0;
      left: -0;
    }
  }
`

const SubpageTemplate = ({ data }) => {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  const { title } = frontmatter
  return (
    <Layout>
      <GlobalStyle />
      <Container>
        <div className="container">
          <Title className="text-4xl">{title}</Title>
          <StyledContent dangerouslySetInnerHTML={{ __html: html }} />
        </div>
      </Container>
    </Layout>
  )
}

export const pageQuery = graphql`
  query ($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        title
        description
      }
    }
  }
`

export default SubpageTemplate
