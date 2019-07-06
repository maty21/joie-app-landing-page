import React from 'react';
import { Row, Col } from 'antd';

function Footer() {
  return (
    <footer id="footer" className="dark">
      <div className="footer-wrap">
        <Row>
          <Col lg={4} sm={24} xs={24}>
            <div className="footer-center">
              <h2>G2</h2>
              <div>
                <a target="_blank " href="#">
                  fun
                </a>
              </div>
              <div>
                <a target="_blank " href="#">
                  API
                </a>
              </div>
              <div>
                <a href="#">vdgd</a>
              </div>
            </div>
          </Col>
          <Col lg={4} sm={24} xs={24}>
            <div className="footer-center">
              <h2>G6</h2>
              <div>
                <a href="#">sdgdgfd</a>
              </div>
              <div>
                <a target="_blank" rel="noopener" href="#">API </a>
              </div>
              <div>
                <a target="_blank" rel="noopener" href="#">dfgdg</a>
              </div>
            </div>
          </Col>
          <Col lg={4} sm={24} xs={24}>
            <div className="footer-center">
              <h2>F2</h2>
              <div>
                <a href="#">dfgdgf</a>
              </div>
              <div>
                <a target="_blank" rel="noopener" href="#">API </a>
              </div>
              <div>
                <a target="_blank" rel="noopener" href="#">dvdfg</a>
              </div>
            </div>
          </Col>
          <Col lg={4} sm={24} xs={24}>
            <div className="footer-center">
              <h2>dfgdg</h2>
              <div>
                <a href="#">dfd</a>
              </div>
              <div>
                <a target="_blank" rel="noopener" href="#">dfdf</a>
              </div>
              <div>
                <a target="_blank" rel="noopener" href="#">hhmfn</a>
              </div>
              <div>
                <a target="_blank" rel="noopener" href="#">dgfgh</a>
              </div>
            </div>
          </Col>
          <Col lg={8} sm={24} xs={24}>
            <div className="footer-center">
              <h2>
                dfgdghd
              </h2>
              <div>
                <a target="_blank" rel="noopener" href="http://ant.design/">yoopi</a>
                <span> - </span>
                <span>蚂蚁 UI 设计体系</span>
              </div>
              <div>
                <a target="_blank" rel="noopener" href="https://eggjs.org/">Egg</a>
                <span> - </span>
                <span> Node Web </span>
              </div>
            </div>
          </Col>
        </Row>
      </div>
      <Row className="bottom-bar">
        <Col lg={6} sm={24} />
        <Col lg={18} sm={24}>
          <span
            style={{
              lineHeight: '16px',
              paddingRight: 12,
              marginRight: 11,
              borderRight: '1px solid rgba(255, 255, 255, 0.55)',
            }}
          >
            <a
              href="https://docs.alipay.com/policies/privacy/antfin"
              rel="noopener noreferrer"
              target="_blank"
            >
              ICP
            </a>
          </span>
          <span style={{ marginRight: 24 }}>
            <a
              href="https://render.alipay.com/p/f/fd-izto3cem/index.html"
              rel="noopener noreferrer"
              target="_blank"
            >
              sdfsdf
            </a>
          </span>
          <span style={{ marginRight: 12 }}>ICP 证浙 B2-2-100257</span>
          <span style={{ marginRight: 12 }}>Copyright © Joie apps</span>
        </Col>
      </Row>
    </footer>
  );
}


export default Footer;
