import React, { Component } from 'react';
import BaseLayout from '../Components/Layout/BaseLayout';
import { withRouter } from 'next/router';


class Test extends Component {
       static async getInitialProps({query}) {
           const testId = query.id;
        return { testId };
}
    render() { 
        const {testId} = this.props
        return (
            <BaseLayout>
                <h1>Test Page with ID of {testId}</h1>
            </BaseLayout>
        );
    }
}
export default withRouter(Test);