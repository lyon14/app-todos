import React from "react";
import ContentLoader from "react-content-loader"

function TodosLoading(props) {
    return <ContentLoader
        speed={1}
        width={400}
        height={240}
        backgroundColor="#cfcfcf"
        foregroundColor="#949494"
        {...props}
    >
        <rect x="0" y="0" rx="0" ry="0" width="1000" height="50" />
        <rect x="0" y="80" rx="0" ry="10" width="1000" height="50" />
        <rect x="0" y="160" rx="0" ry="10" width="1000" height="50" />
        
    </ContentLoader>
}

export { TodosLoading };