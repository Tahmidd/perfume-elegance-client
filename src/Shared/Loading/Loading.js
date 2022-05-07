import React from 'react';
import { Button, Spinner } from 'react-bootstrap';

const Loading = () => {
    return (
        <div className='d-flex justify-content-center mt-5'>
            <Button variant="danger" disabled>
                <Spinner
                    as="span"
                    animation="grow"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                />
                Loading...
            </Button>
        </div>
    );
};

export default Loading;