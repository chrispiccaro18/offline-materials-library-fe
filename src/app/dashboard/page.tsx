import { withPageAuthRequired } from '@auth0/nextjs-auth0';

const DashboardPage: React.FC = () => {
    return (
        <div>
            <h1>Welcome to your Dashboard!</h1>
            <p>Only logged-in users can see this page.</p>
        </div>
    );
};

export const getServerSideProps = withPageAuthRequired();

export default DashboardPage;
