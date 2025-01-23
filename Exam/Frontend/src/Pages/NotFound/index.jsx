import React from 'react'
import { useNavigate } from 'react-router'
import { Helmet } from "react-helmet"

function NotFound() {

    let navigate = useNavigate()

    function GoHome() {
        navigate("/")
    }

    return (
        <>
            <Helmet>
                <title> Not Found 404</title>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
            </Helmet>
            <div>
                <h2 style={{ textAlign: "center", fontSize: "48px", margin: "300px auto" }}>
                    NOT FOUND 404
                </h2>
                <button style={{ backgroundColor: "blue", padding: "10px 20px", border: "none", marginLeft:"200px",color:"white" }}
                    onClick={() => GoHome()}>Go Home</button>
            </div>
        </>
    )
}

export default NotFound
