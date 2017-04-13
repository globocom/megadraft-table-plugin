/*
 * Copyright (c) 2017, Globo.com <https://github.com/globocom/megadraft-table-plugin>
 *
 * License: MIT
 */

import React from "react";

export function PluginIcon({className = ""}) {
  return (
    <svg className={className} width="24px" height="24px" viewBox="0 0 24 24">
    <path d="M19.8,3H4.2C3,3,2,4,2,5.3v13.5C2,20,3,21,4.2,21h15.5c1.2,0,2.2-1,2.2-2.3V5.3C22,4,21,3,19.8,3z M9.7,13.9v-3.8
        c0,0,0-0.1,0-0.2h4.8c0,0,0,0.1,0,0.2v3.8H9.7L9.7,13.9z M14.4,15.4v4.1H9.7v-4.1H14.4z M3.5,10h4.7c0,0,0,0.1,0,0.2v3.8H3.5V10z
         M15.9,10h4.6v4h-4.6v-3.8C15.9,10,15.9,10,15.9,10z M4.2,4.5h15.5c0.4,0,0.7,0.3,0.7,0.7v3.2h-17V5.3C3.5,4.8,3.8,4.5,4.2,4.5z
         M3.5,18.8v-3.4h4.7v4.1h-4C3.8,19.5,3.5,19.2,3.5,18.8z M19.8,19.5h-3.9v-4.1h4.6v3.3C20.5,19.2,20.2,19.5,19.8,19.5z" fill="currentColor"/>
    </svg>
  );
}

export function HighlightIcon({className = ""}) {
  return (
    <svg className={className} width="24px" height="24px" viewBox="0 0 24 24" version="1.1" xmlns="http://www.w3.org/2000/svg">
      <path d="M20.0526316,8 L3.94736842,8 C3.42631579,8 3,8.73125 3,9.625 L3,19.375 C3,20.26875 3.42631579,21 3.94736842,21 L20.0526316,21 C20.5736842,21 21,20.26875 21,19.375 L21,9.625 C21,8.73125 20.5736842,8 20.0526316,8 L20.0526316,8 Z M3,3 L3,6 L21,6 L21,3 L3,3 L3,3 Z" id="Shape" fill="#999999"></path>
    </svg>
  );
}
