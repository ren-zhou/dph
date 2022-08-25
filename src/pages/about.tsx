import React from 'react';
import Navbar from '../components/navbar';
import PageContainer from '../components/page_container';
import { dsuffix } from '../utils/dhrub_gen';

export default function About() {
    const bcrypt = require('bcryptjs');
    console.log(bcrypt.hashSync("cutestdhrub", bcrypt.genSaltSync(10)));
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