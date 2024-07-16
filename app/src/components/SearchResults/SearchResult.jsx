import styled from "styled-components";
import { BASE_URL, Button, Container } from "../../App";

const SearchResult = ({ data }) => {
  return (
    <FoodCardContainer>
      <Container>
        <FoodCards>
          {data?.map(({ name, image, text, price }) => (
            <FoodCard key={name}>
              <div className="food_image">
                <img src={BASE_URL + image} alt={name} />
              </div>
              <div className="food_info">
                <div className="info">
                  <h3>{name}</h3>
                  <p>{text}</p>
                </div>
                <Button>${price.toFixed(2)}</Button>
              </div>
            </FoodCard>
          ))}
        </FoodCards>
      </Container>
    </FoodCardContainer>
  );
};

export default SearchResult;

const FoodCardContainer = styled.section`
  min-height: calc(100vh - 210px);
  background-image: url("/bg.png");
  background-size: cover;
  padding: 20px;
`;

const FoodCards = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
  align-items: center;
  padding-top: 80px;
`;

const FoodCard = styled.div`
  width: 340px;
  height: auto;
  border: 1px solid transparent;
  border-radius: 20px;
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.2) 0%,
    rgba(255, 255, 255, 0.1) 100%
  );
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  overflow: hidden;

  .food_image img {
    width: 100%;
    height: auto;
    border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  }

  .food_info {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    padding: 16px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 0 0 20px 20px;

    h3 {
      margin: 8px 0;
      font-size: 18px;
      font-weight: 600;
      color: #333;
    }

    p {
      margin: 4px 0 8px;
      font-size: 14px;
      color: #666;
    }

    button {
      align-self: flex-end;
      font-size: 14px;
      padding: 8px 16px;
      border-radius: 12px;
      background: #ff7e5f;
      color: #fff;
      border: none;
      cursor: pointer;
      transition: background 0.3s;

      &:hover {
        background: #ff5f5f;
      }
    }
  }
`;
