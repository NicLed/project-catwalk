import React from 'react'
import Carousel from '../../dist/bundle'
import {Container, Row, ArrowBtn, Card, Img, Title, Star, Price, Code, Reference} from './styles.js'


const App = () => (
  <Container>
    <h2 align="center">
      Use{' '}
      <span
        css={`
          background: lightgray;
        `}
      >
        &nbsp;react-grid-carousel&nbsp;
      </span>{' '}
      to build responsive carousel
    </h2>
    <Row>
      <h2
        css={`
          margin: 20px;
        `}
      >
        Hit The Slopes
      </h2>
      <Carousel
        cols={4}
        rows={1}
        gap={11}
        responsiveLayout={[
          {
            breakpoint: 1200,
            cols: 3
          },
          {
            breakpoint: 990,
            cols: 2
          }
        ]}
        mobileBreakpoint={670}
        arrowRight={<ArrowBtn type="right" />}
        arrowLeft={<ArrowBtn type="left" />}
      >
        {[...Array(8)].map((_, i) => (
          <Carousel.Item key={i}>
            <Card>
              <Img img={`https://picsum.photos/200/160?random=${i}`} />
              <Title>
                Day Tour From Tokyo: Tambara Ski Park &amp; Strawberry Picking
              </Title>
              <Star>★★★★★</Star>
              <Price>
                TWD <span>2,500</span>
              </Price>
            </Card>
          </Carousel.Item>
        ))}
      </Carousel>
    </Row>
    <Code>{`<Carousel
  cols={4}
  rows={1}
  gap={11}
  responsiveLayout={[
    {
      breakpoint: 1200,
      cols: 3
    },
    {
      breakpoint: 990,
      cols: 2
    }
  ]}
  mobileBreakpoint={670}
  arrowRight={<ArrowBtn type="right" />}
  arrowLeft={<ArrowBtn type="left" />}
>
  {[...Array(8)].map((_, i) => (
    <Carousel.Item key={i}>
      <Card>
        <Img img={\`https://picsum.photos/200/160?random=\${i}\`} />
        <Title>
          Day Tour From Tokyo: Tambara Ski Park &amp; Strawberry Picking
        </Title>
        <Star>★★★★★</Star>
        <Price>
          TWD <span>2,500</span>
        </Price>
      </Card>
    </Carousel.Item>
  ))}
</Carousel>`}</Code>
    <Reference>
      <h2 align="center">
        Responsive carousel on{' '}
        <a
          href="https://www.kkday.com/en"
          target="_blank"
          rel="noreferrer noopener"
        >
          KKday
        </a>
      </h2>
      <a
        href="https://gist.githubusercontent.com/x3388638/82e341b43990c7851c9438dfdec43e3b/raw/9c482afe303a6c7160340cfcf4c2b4500e15c9b3/kkday.gif"
        rel="noreferrer noopener"
      >
        <img src="https://gist.githubusercontent.com/x3388638/82e341b43990c7851c9438dfdec43e3b/raw/9c482afe303a6c7160340cfcf4c2b4500e15c9b3/kkday.gif" />
      </a>
    </Reference>
  </Container>
)

export default App