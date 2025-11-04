import { AppBarNavLayout } from '@erica/mui-web';
import { Route, Routes } from 'react-router';
import { HomePage } from '../pages/HomePage';
import { ClickableLogo } from '../components/ClickableLogo';
import { Stack, Typography } from '@mui/material';
import { Footer } from '../components/Footer';

export const App: React.FC = () => {
  return (
    <AppBarNavLayout
    containerProps={{maxWidth: 'md'}}
      logo={<ClickableLogo />}
      navItems={[{
        label: 'About', to: '/'
      }, {
        label: 'Offerings', to: '/test'
      }, {
        label: 'Contact', to: '/test'
      }]}
      footer={<Footer />}
      navItemDivider={<Typography>🙚</Typography>}
      >
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/test" element={<Typography>test</Typography>} />
      </Routes>
    </AppBarNavLayout>
  );
};