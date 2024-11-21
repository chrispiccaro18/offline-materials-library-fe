import { getSession } from '@auth0/nextjs-auth0';
import { redirect } from 'next/navigation';

export default async function Dashboard() {
    const session = await getSession();
    if (!session) redirect('/api/auth/login');

    const { user } = session;

    return (
        <div>
            <h1>Welcome to your Dashboard, {user.name}!</h1>
            <p>Only logged-in users can see this page.</p>
        </div>
    );
};
