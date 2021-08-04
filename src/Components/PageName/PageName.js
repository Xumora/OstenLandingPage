import React from 'react';

const PageName = (props) => {
    return (
        <section className="pageName py-5">
            <div className="container py-5 my-5">
                <div className="row">
                    <div className="col-12">
                        <h1 className="text-white fw-bold display-3">{props.title}</h1>
                        <h4 className="fw-bold text-white">{props.text}</h4>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default PageName;
