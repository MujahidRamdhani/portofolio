import styled from 'styled-components';

// display: grid;
// grid-template-columns: 1fr 1fr;
// gap: 2rem;
export const Container = styled.section`
  margin-top: 12rem;
  display: flex;
  gap: 20px;
  flex-direction: row;

  .hard-skills{
    margin-top: 1.6rem;
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    gap: 1.8rem;
  }
  .hability{
    display: flex;
    flex-direction: column;
    align-items: center;

    img{
      width: 3.4rem;
    }
  }

  h2{
    display: inline-block;
    margin-bottom: 2rem;
    // border-bottom: 0.2rem solid var(--blue);
    font-size :3rem;
    margin-top: 0rem;
    color: var(--green);
  }

  h3{
    margin-top: 2rem;
    color: var(--green);
  }

  p{
    font-size: 1.8rem;
    letter-spacing: 0.1rem;
    font-weight: 500;
  }



  # hero pic
  .about-image{
    text-align: center;
    flex: 1;
   img{
     margin-top: 2rem;
     width: 50%;
     filter: grayscale(0);
     transition: filter 0.5s;
     &:hover{
       filter: grayscale(0);
     }
   }
  }

  @media only screen and (max-width: 480px) {
    .about-image {
      // flex: 1;
      // max-width: 100%;
      // max-width: 20%;
      margin-top: 4rem;
      img{
        margin-top: 2rem;
        // width: 100%;
        width: 100%;
        // height: 200px;
        filter: grayscale(0);
        transition: filter 0.5s;
        &:hover{
          filter: grayscale(0);
        }
    }
  }

  @media (max-width: 480px){
    display: block;
    text-align: center;

    .hard-skills{
      justify-content: center;
    }
    // .about-image{
    //   display: flex;
    //   // max-width: 100%;
    //   max-width: 1%;
    //   img{
    //     margin-top: 2rem;
    //     // width: 100%;
    //     width: 1%;
    //     filter: grayscale(0);
    //     transition: filter 0.5s;
    //     &:hover{
    //       filter: grayscale(0);
    //     }
    // }


    }

  @media (max-width: 768px) {
    flex-direction: column;
  }

`;
