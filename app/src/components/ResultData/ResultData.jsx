import styled from "styled-components";
import { BASE_URL, Button, Container } from "../../App";

const ResultData = ({ data }) => {
  return (
    <ResultContainer>
      <Container>
        <Cards>
          {data?.map(({ title, imageUrl, description, cost }) => (
            <Card key={title}>
              <div className="image">
                <img src={BASE_URL + imageUrl} alt={title} />
              </div>
              <div className="info">
                <div className="details">
                  <h3>{title}</h3>
                  <p>{description}</p>
                </div>
                <Button>${cost.toFixed(2)}</Button>
              </div>
            </Card>
          ))}
        </Cards>
      </Container>
    </ResultContainer>
  );
};

export default ResultData;

const ResultContainer = styled.section`
  min-height: calc(100vh - 210px);
  background-image: url("/bg.png");
  background-size: cover;
`;

const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  row-gap: 32px;
  column-gap: 20px;
  justify-content: center;
  align-items: center;
  padding-top: 80px;
`;

const Card = styled.div`
  width: 340px;
  height: 167px;
  border: 0.66px solid;

  border-image-source: radial-gradient(
      80.69% 208.78% at 108.28% 112.58%,
      #eabfff 0%,
      rgba(135, 38, 183, 0) 100%
    ),
    radial-gradient(
      80.38% 222.5% at -13.75% -12.36%,
      #98f9ff 0%,
      rgba(255, 255, 255, 0) 100%
    );

  background: url(.png),
    radial-gradient(
      90.16% 143.01% at 15.32% 21.04%,
      rgba(165, 239, 255, 0.2) 0%,
      rgba(110, 191, 244, 0.0447917) 77.08%,
      rgba(70, 144, 213, 0) 100%
    );
  background-blend-mode: overlay, normal;
  backdrop-filter: blur(13.1842px);

  border-radius: 20px;

  display: flex;
  padding: 8px;

  .info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: end;
    h3 {
      margin-top: 8px;
      font-size: 16px;
      font-weight: 500;
    }
    p {
      margin-top: 4px;
      font-size: 12px;
    }
    button {
      font-size: 12px;
    }
  }
`;
