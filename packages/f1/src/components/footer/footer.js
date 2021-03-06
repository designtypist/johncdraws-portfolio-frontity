import React from "react";
import { connect, styled } from "frontity";
import Link from "../link";

 
// simplest form (only email)


const Footer = ({ state }) => {
  // const options = state.source.get("acf-options-page");
  return (
    <>
      <Container>
        <MainFooter>
          <div className="row">
            <div className="col-12 col-lg-6 footer-widget widget-one">
              <h6 className="widget-title">About Me</h6>
              <p>Hi, my name is John Chung. I'm an animator and illustrator based in Ontario. I love storytelling and bringing things to life through my art work.</p>
              <p>Feel free to contact me at 
                <a href="mailto:johnchungart@gmail.com" target="_blank"> johnchungart@gmail.com</a>.
              </p>
            </div>
            <div className="col-12 col-lg-3 footer-widget widget-two">
              <h6 className="widget-title">Connect</h6>
              <ul className="widget-list">
                <li><Link className="widget-list-link" target="_blank" rel="nofollow noopener" link="https://www.instagram.com/johncdraws/">Instagram</Link></li>
              </ul>
            </div>
          </div>
        </MainFooter>
        
        <FooterCredits>
          <div className="row footer-widget">
            <p className="col-12 col-lg-6 text-center text-lg-left">&copy; Copyright 2021. All rights reserved.</p>
            <p className="col-12 col-lg-6 text-center text-lg-right">Designed and developed by
              <a href="https://designtypist.com/" target="_blank"> DesignTypist</a>
            </p>
          </div>
        </FooterCredits>

      </Container>
    </>
  );
};

// Connect the Header component to get access to the `state` in it's `props`
export default connect(Footer);

const MainFooter = styled.div`
  width: 100%;
  color: var(--white);
  background: var(--brand);
  .row {
    margin: 0;
  }
  .footer-widget {
    margin: 0;
    padding: 4em;
  }
  a {
    font-weight: bold;
    color: var(--white);
  }
`

const FooterCredits = styled.div`
  width: 100%;
  .row {
    margin: 0;
  }
  .footer-widget {
    margin: 0;
    padding: 2em 4em;
  }
  p {
    font-size: 0.9rem;
    margin: 0;
    padding: 0;
  }
  a {
    font-weight: bold;
    color: var(--brand);
  }
`

const Container = styled.footer`
  width:100%;
  margin: 0 auto;
  .footer-widget {
    margin-bottom:1rem;
    .widget-title {
      color:var(--white);
      margin-bottom:1.2rem;
      font-weight: bold;
      text-transform: uppercase;
    }
    p {
      font-size:1rem;
    }
    .widget-list {
      list-style:none;
      padding-left:0;
      li {
        margin-bottom:0.5rem;
        .widget-list-link {
          text-decoration:none;
          transition: all 0.3s ease;
          color:var(--white);
          &:hover {
            color:var(--black);
          }
        }
      }
    }
  }
  .widget-one {
    p {
      @media (min-width: 992px) {
        padding-right:8rem;
      }
    }
  }
}
`;
