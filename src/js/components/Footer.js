import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBBtn
} from 'mdb-react-ui-kit';

const Footer = () => {
  return (
    <MDBFooter className='bg-dark text-center text-white fixed-bottom'>
      <MDBContainer className='p-4 pb-0'>
        <section className='mb-4'>

          <MDBBtn outline color="light" floating className='m-1' href='https://twitter.com/SygAndSoRo' role='button'>
            <MDBIcon fab icon='twitter' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='https://www.linkedin.com/in/luis-romario-pirela/' role='button'>
            <MDBIcon fab icon='linkedin-in' />
          </MDBBtn>

          <MDBBtn outline color="light" floating className='m-1' href='https://github.com/Luroz' role='button'>
            <MDBIcon fab icon='github' />
          </MDBBtn>
        </section>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        <a className='text-white' href='https://luroz-portfolio.netlify.app/'>
          © 2023 Copyright: Luis Pirela
        </a>
      </div>
    </MDBFooter>
  );
};

export default Footer;