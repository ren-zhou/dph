import React from 'react';
import Navbar from '../components/navbar';
import PageContainer from '../components/page_container';
import { dsuffix } from '../utils/dhrub_gen';

export default function About() {
    return (
        <PageContainer>
            <p>
                Welcome to the Dhrub{dsuffix()} puzzle hunt!
            </p>

            <p>
                A terrible crime has been committed----
            </p>
        </PageContainer>
    );
}