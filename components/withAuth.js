// components/withAuth.js
import { useRouter } from 'next/router';
import { useAuth } from '../contexts/AuthContext';

const withAuth = (WrappedComponent) => {
  return (props) => {
    const { user, loading } = useAuth();
    const router = useRouter();

    if (typeof window !== 'undefined') {
      if (loading) return <div>Loading...</div>;
      if (!user) {
        router.replace('/login');
        return null;
      }
      return <WrappedComponent {...props} />;
    }

    // When rendering on server, we can't redirect
    return null;
  };
};

export default withAuth;