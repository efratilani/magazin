import React, { useState } from 'react'
import { Button } from 'react-bootstrap'

export default function About(props) {
    const [currentPage, setCurrentPage] = useState(0);
    const namOfPage = React.Children.count(props.children);
    function componentPage(pageIndex) {
        debugger
        // document.getElementById("page" + pageIndex).style.backgroundColor = "#0d8dac"
        const child = React.Children.toArray(props.children)[pageIndex];
        return React.cloneElement(child);
    }

    return (
        <>
            {componentPage(currentPage)}
            <Button disabled={currentPage === 0} onClick={(e) => setCurrentPage(v => v - 1)}>קודם</Button>
            {
                React.Children.toArray(props.children).map(
                    (item, index) =>
                        <Button  className="page" onClick={(e) => setCurrentPage(index)}>{index + 1}</Button>
                )}
            <Button disabled={currentPage >= namOfPage - 1} onClick={(e) => setCurrentPage(v => v + 1)}>הבא</Button>
            <br></br>

        </>
    )
}
