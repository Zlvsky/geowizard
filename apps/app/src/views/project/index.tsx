import { getProjectService } from '@/api/mockedService';
import Container from '@/components/layout/containers/Container';
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';

function ProjectPage() {
    const { id } = useParams()

    const { data, isLoading, isError } = useQuery({
      queryFn: () => getProjectService(id!),
      queryKey: ['project', id],
      enabled: !!id
    })

    console.log(data)
    return (
        <Container>
            some content {data?.res?.name}
        </Container>
    );
}

export default ProjectPage