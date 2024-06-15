import { AppBar, Toolbar, styled } from "@mui/material";
const Container = styled(AppBar)`
  background: #060606;
  display: flex;
  flex-direction: row;
`;
const Header = () => {
  const logo = "https://iconape.com/wp-content/files/kz/374213/png/374213.png";
  return (
    <Container position="static">
      <Toolbar>
        <img src={logo} alt="logo" style={{ width: 40 }} />
      </Toolbar>
      <h2>CODE-PEN CLONE</h2>
    </Container>
  );
};
export default Header;
