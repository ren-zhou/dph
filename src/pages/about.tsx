import React from 'react';
import AnsGen from '../components/ans_gen';
import PageContainer from '../components/page_container';
import { dsuffix } from '../utils/dhrub_gen';

export default function About() {
    const bcrypt = require('bcryptjs');
    return (
        <PageContainer title="About DPH">
            <p>
                Welcome to the Dhrub{dsuffix()} puzzle hunt!
            </p>

            <p>
                A terrible crime has been committed----
            </p>
        </PageContainer>
    );
}