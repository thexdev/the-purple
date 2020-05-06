import React, { memo } from 'react';
import LayoutWithHeader from 'components/layout/layout-with-header';
import SectionWithNoHeader from 'components/section/with-no-header';
import { Container, Row, Col } from 'react-bootstrap';

import lppkpei from 'assets/images/portfolio/lppkpei.png';
import flittoken from 'assets/images/portfolio/flit-token.png';
import awmi from 'assets/images/portfolio/awmi.png';

const Portfolio = () => {
  return (
    <LayoutWithHeader title="Portfolio" subtitle="">
      <SectionWithNoHeader>
        <Container className="mb-5">
          <Row>
            <Col xs={12} md={6}>
              <h2 className="text-danger">Flittoken</h2>
              <p className="lead">
                Flit Token is a virtual currency supported by the Etheurum
                Blockchain, which is the largest currency in the world and fast,
                safe to care about will drive wealth by Etheurum tec. Flit is
                evolution of world currencies. Brings a very large domain to
                freedom of money using strong cryptography to secure financial
                transactions.
              </p>
            </Col>
            <Col xs={12} md={6}>
              <img
                src={flittoken}
                alt="flittoken website"
                className="img-fluid rounded"
              />
            </Col>
          </Row>
        </Container>
      </SectionWithNoHeader>
      <SectionWithNoHeader>
        <Container className="mb-5">
          <Row>
            <Col xs={12} md={6}>
              <h2 className="text-danger">Awmi</h2>
              <p className="lead">
                AWMI adalah sebuah proses penyediaan pelayanan kesehatan medis
                dengan biaya efektif bagi pasien melalui kerja sama dengan
                industri pariwisata. Para wisatawan baik lokal maupun
                internasional yang menggunakan perjalanan dengan medical tourism
                mendapat keuntungan menjalani perawatan medis sambil menikmati
                perjalanan dan tinggal di salah satu tujuan wisata populer di
                Indonesia.
              </p>
            </Col>
            <Col xs={12} md={6}>
              <img
                src={awmi}
                alt="asosiasi wisata medis indonesia"
                className="img-fluid rounded"
              />
            </Col>
          </Row>
        </Container>
      </SectionWithNoHeader>
      <SectionWithNoHeader>
        <Container className="mb-5">
          <Row>
            <Col xs={12} md={6}>
              <h2 className="text-danger">LPPKPEI</h2>
              <p className="lead">
                Lembaga Pendidikan dan Pelatihan Kerja (LPPK) Prima Elite
                Institute, memberikan beragam pilihan pelatihan program untuk
                tenaga kesehatan Indonesia yang telah disesuaikan sesuai
                kebutuhan dan permintaan pasar baik di dalam dan luar negeri
                termasuk di dalam nya menyelenggarakan berbagai Seminar,
                Pelatihan dan workshop di bidang kesehatan
              </p>
            </Col>
            <Col xs={12} md={6}>
              <img
                src={lppkpei}
                alt="Lembaga Pendidikan dan Pelatihan Kerja (LPPK) Prima Elite Institute"
                className="img-fluid rounded"
              />
            </Col>
          </Row>
        </Container>
      </SectionWithNoHeader>
    </LayoutWithHeader>
  );
};

export default memo(Portfolio);
