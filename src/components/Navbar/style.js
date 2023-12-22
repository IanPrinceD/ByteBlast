import { Container } from "@mui/material";
import { styled } from '@mui/material/styles';

export const NavbarContainer = styled(Container)(() => ({
  paddingTop: '4rem',
  paddingBottom: '1rem',
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
}));