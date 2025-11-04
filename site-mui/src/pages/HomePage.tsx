import HomeContent from '@/content/home.mdx';
import MdxPage from '../components/MdxPage';

export const HomePage: React.FC = () => {
    return (
        <MdxPage content={HomeContent} />
    );
};