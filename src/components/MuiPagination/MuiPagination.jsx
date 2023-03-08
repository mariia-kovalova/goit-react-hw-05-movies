import { Pagination } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Wrap } from './MuiPagibnation.styled';

const theme = createTheme({
  palette: {
    primary: { main: '#ff6b08', contrastText: '#ffffff' },
  },
});

export const MuiPagination = ({ count, page, onChange }) => {
  if (count > 1)
    return (
      <ThemeProvider theme={theme}>
        <Wrap>
          <Pagination
            color="primary"
            shape="rounded"
            count={count}
            page={page}
            onChange={onChange}
          />
        </Wrap>
      </ThemeProvider>
    );
};
