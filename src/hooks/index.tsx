import { ThemeProvider } from 'styled-components';
import { defaultTheme } from 'styles/default.theme';
import { AuthProvider } from './useAuth';

const AppProvider: React.FC = ({ children }) => (
    <ThemeProvider theme={defaultTheme}>
        <AuthProvider>{children}</AuthProvider>
    </ThemeProvider>
);

export default AppProvider;
