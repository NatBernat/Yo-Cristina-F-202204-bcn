import styled from "styled-components";
import theme from "../../theme/theme";

const HeaderStyle = styled.ul`
  box-shadow: 0px -1px 50px 0px rgba(${theme.brownDarkRgb}, 0.4);
  background: ${theme.blueDark};
  font-family: inherit;
  height: 88px;
  color: ${theme.white};
  list-style-type: none;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 0;
  margin-top: 0;
  margin-bottom: 0;

  li {
    margin: 0 20px 10px 20px;
  }
  h1,
  h2 {
    margin: auto 0;
    font-weight: 800;
  }
  h1 {
    font-size: 24px;
  }
  h2 {
    font-size: 16px;
  }
`;

const Header = () => {
  return (
    <HeaderStyle>
      <li>
        <h1>Fishypedia</h1>
      </li>
      <li>
        <h2>AQUARIUM</h2>
      </li>
    </HeaderStyle>
  );
};

export default Header;
