import * as React from 'react';

export function NavLogo({ src, title }) {
    return (
        <div>
            <img src={src}>
            </img>
            <a>{title}</a>
        </div>
    );
}