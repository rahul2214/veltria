import Skeleton from '@mui/material/Skeleton';

const SkeletonLoader = () => (
    <div>
        <Skeleton variant="rectangular" width={400} height={150} style={{ marginBottom: '16px' }} />
        <Skeleton variant="text" width="60%" />
        <Skeleton variant="text" width="80%" />
        <Skeleton variant="rectangular" width={400} height={150} style={{ marginBottom: '16px' }} />
        <Skeleton variant="text" width="60%" />
        <Skeleton variant="text" width="80%" />
    </div>
);

export default SkeletonLoader;
