/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');
const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

const siteConfig = require(process.cwd() + '/siteConfig.js');

function imgUrl(img) {
  return siteConfig.baseUrl + 'img/' + img;
}

function docUrl(doc, language) {
  return siteConfig.baseUrl + 'docs/' + (language ? language + '/' : '') + doc;
}

function pageUrl(page, language) {
  return siteConfig.baseUrl + (language ? language + '/' : '') + page;
}

class Button extends React.Component {
  render() {
    return (
      <div className="pluginWrapper buttonWrapper">
        <a className="button" href={this.props.href} target={this.props.target}>
          {this.props.children}
        </a>
      </div>
    );
  }
}

Button.defaultProps = {
  target: '_self',
};

const SplashContainer = props => (
  <div className="homeContainer">
    <div className="homeSplashFade">
      <div className="wrapper homeWrapper">{props.children}</div>
    </div>
  </div>
);

const Logo = props => (
  <div className="projectLogo">
    <img src={props.img_src} />
  </div>
);

const ProjectTitle = props => (
  <h2 className="projectTitle">
    {siteConfig.title}
    <small>{siteConfig.tagline}</small>
  </h2>
);

const PromoSection = props => (
  <div className="section promoSection">
    <div className="promoRow">
      <div className="pluginRowBlock">{props.children}</div>
    </div>
  </div>
);

class HomeSplash extends React.Component {
  render() {
    let language = this.props.language || '';
    return (
      <SplashContainer>
        <div className="inner">
          <ProjectTitle />
          <PromoSection>
            <Button href="docs/index.html">Get started</Button>
          </PromoSection>
        </div>
      </SplashContainer>
    );
  }
}

const Block = props => (
  <Container
    padding={['bottom', 'top']}
    id={props.id}
    background={props.background}>
    <GridBlock align="center" contents={props.children} layout={props.layout} />
  </Container>
);

const Courses = props => (
    <Block id="courses" layout="fourColumn" background="dark">
    {[
      {
        content: 'You build a production ready Chatbot MVP in the life science and healthcare space combining multiple clouds.',
        image: imgUrl('polylcoud-chatbot-course.png'),
        imageAlign: 'top',
        title: 'GCP Dialogflow & AWS Lambda: Build a Polycloud Chatbot',
      },
      {
        content: 'You setup a service mesh mit production ready technologies and deloy, run and operate your services with service mesh benefits like out of the box end-to-end monitoring.',
        image: imgUrl('istio.png'),
        imageAlign: 'top',
        title: 'Terraform, AWS EKS, Helm, Istio: Fullstack Servcie Mesh Intro',
      },
    ]}
    </Block>
);

const KnowledgeBox = props => (
  <a href={docUrl('doc1.html', props.language)}>
  <Block id="knowledge" background="light">
    {[
      {
        content: 'Check out my notes on how to build cloud based applications, application architecture, artifical intelligence and more.</br></br>' +
        ' Basics </br></br>' +
        ' Cloud Setup (Docker / Serverless) </br></br>' +
        ' Datastorage </br></br>' +
        ' Machine Learning </br></br>' + 
        ' APIs',
        image: imgUrl('file.svg'),
        imageAlign: 'left',
        title: 'Knowledge about Cloud & AI for healthcare and insurance',
      },
    ]}
  </Block>
  </a>
);

const News = props => (
  <a href={pageUrl('blog', props.language)}>
  <Block id="news">
    {[
      {
        content: 'Checkt out what I do in the area of healthcare and insurance: </br></br>' + 
        'Small lessons learned </br></br>' +
        'New experiences </br></br>' +
        'Interesting news I find',
        image: imgUrl('blog.svg'),
        imageAlign: 'right',
        title: 'Updates',
      },
    ]}
  </Block>
  </a>
);

const Description = props => (
  <Block id="description" background="light">
   {[{
     title: "Simlicity",
     content: "Building a solution starts with focusing on a simple product and process, and then ensuring that this simplicity manifist in your code."
    },
    {
      title: "Bootstrap & Evolution",
      content: "Use existing solutions to gain speed but allow your critical components to be evolable."
     },
     {
       title: "Platform & developer experience.",
       content: "Build your own platform and developer experience, start with a CLI that might wrap an existing cloud platform (be transparent to the developer)."
     },
     { 
       title: "Security: Make it easy with tooling & Limit your bast radius & remember it is a business decision",
       content: "Apply Industry best pratices & mandatory requirements, but make this easy by providing tooling and sevices to your developers. But keep in mind security is not a goal itself but part of the business evaluation of each decision - and keep applying simplcity."
    }
   ]}
  </Block>
)

class Index extends React.Component {
  render() {
    let language = this.props.language || '';

    return (
      <div>
        <HomeSplash language={language} />
        <div className="mainContainer" style={{backgroundColor: "#F7F7F7"}}>
          <Description />
        </div>
      </div>
    );
  }
}

module.exports = Index;
