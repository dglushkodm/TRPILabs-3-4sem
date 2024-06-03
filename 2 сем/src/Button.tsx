import React from "react";

interface ButtonProps {
    title: string;
    onClick: () => void;
}
export default function Button({title, onClick}:ButtonProps) {
    return (
        <button className="Button" onClick={onClick}>
            {title}
        </button>
    );
}