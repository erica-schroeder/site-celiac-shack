import AboutContent from '@/content/about.mdx';
import MdxPage from '../components/MdxPage';

export const AboutPage: React.FC = () => {
    return (
        <MdxPage content={AboutContent} />
    );
};