import React from "react";

function Logo({ width = "75px" }) {
    return (
        <div>
            <img
                src="https://images-platform.99static.com//H9u-_L_5KFs2aRrEwiPlhaJWxfo=/54x32:950x928/fit-in/500x500/99designs-contests-attachments/131/131636/attachment_131636898"
                alt="Logo"
                style={{
                    width: width,
                    height: width,
                    objectFit: "contain"
                }}
            />
        </div>
    );
}

export default Logo;