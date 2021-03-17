import { useEffect } from 'react';
import { useParams } from 'react-router';

function usePoetryProjectId() {
    const { projectId } = useParams();
    useEffect(() => {
        window.poetryProjectId = projectId;
    }, [projectId]);
}

export default usePoetryProjectId;
