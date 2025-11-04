import ContactContent from '@/content/contact.mdx';
import MdxPage from '../components/MdxPage';

export const ContactPage: React.FC = () => {
    return (
        <MdxPage content={ContactContent} />
    );
};