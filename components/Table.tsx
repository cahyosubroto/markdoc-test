import * as React from 'react';

export function Table({table}) {

  return (
    <div className='table'>
        <table>{table}</table>
      <style jsx>
        {`
            table {
               
                width: 100%;
                border-collapse: separate;
                border-spacing: 0;
                margin-top: 2rem;
                margin-bottom: 2rem;
                overflow: hidden
            }

            td>strong,th {
                font-size: var(--font-size-3);
                line-height: var(--line-height-3);
                font-family: var(--sans);
                font-weight: 500;
                text-align: left;
                padding: 0 16px 8px
            }

            td {
                padding: 12px 16px 16px;
                background-clip: padding-box;
                border-bottom: 1px solid var(--code-border)
            }

            tr:first-child td {
                border-top: 1px solid var(--code-border)
            }

            tr td:first-child {
                border-left: 1px solid var(--code-border)
            }

            tr td:last-child {
                border-right: 1px solid var(--code-border)
            }

            tr:first-child td:first-child {
                border-top-left-radius: 3px
            }

            tr:last-child td:first-child {
                border-bottom-left-radius: 3px
            }

            tr:first-child td:last-child {
                border-top-right-radius: 3px
            }

            tr:last-child td:last-child {
                border-bottom-right-radius: 3px
            }
        `}
      </style>
    </div>
  );
}
