import { useUser } from '@auth0/nextjs-auth0/client';

const LoginPage: React.FC = () => {
    const {user, error, isLoading }= useUser();

    if(isLoading) return <div>Loading...</div>;
    if(error) return <div>{error.message}</div>;

    return (
        <div>
            {!user ? (
                <>
                    <h1>Login</h1>
                    <a href="/api/auth/login">Login</a>
                </>
            ): (
                <>
                    <h1>Welcome, {user.name}!</h1>
                    <a href="/api/auth/logout">Logout</a>
                </>
            )}
        </div>
    );
};

export default LoginPage;
