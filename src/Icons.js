/*
 * Copyright (c) 2017, Globo.com <https://github.com/globocom/megadraft-table-plugin>
 *
 * License: MIT
 */

import React from "react";

export function PluginIcon({className = ""}) {
  return (
    <svg className={className} width="24px" height="24px" viewBox="0 0 24 24">
      <path fill="#FFFFFF" d="M18.3,6.1H5.7C4.8,6.1,4,6.9,4,7.8v8.3c0,1,0.8,1.8,1.7,1.8h12.5c1,0,1.7-0.8,1.7-1.8V7.8
        C20,6.9,19.2,6.1,18.3,6.1z M9.4,16.2H6.7v-1.7h2.6V16.2z M9.4,13.7H6.7V12h2.6V13.7z M9.4,11.2H6.7V9.5h2.6V11.2z M13.3,16.2h-2.6
        v-1.7h2.6V16.2z M13.3,13.7h-2.6V12h2.6V13.7z M13.3,11.2h-2.6V9.5h2.6V11.2z M17.3,16.2h-2.6v-1.7h2.6V16.2z M17.3,13.7h-2.6V12
        h2.6V13.7z M17.3,11.2h-2.6V9.5h2.6V11.2z"/>
    </svg>
  );
}

export function HighlightIcon({className = ""}) {
  return (
    <svg className={className} width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
      <path d="M20.0526316,8 L3.94736842,8 C3.42631579,8 3,8.73125 3,9.625 L3,19.375 C3,20.26875 3.42631579,21 3.94736842,21 L20.0526316,21 C20.5736842,21 21,20.26875 21,19.375 L21,9.625 C21,8.73125 20.5736842,8 20.0526316,8 L20.0526316,8 Z M3,3 L3,6 L21,6 L21,3 L3,3 L3,3 Z" id="Shape" fill="#999999"></path>
    </svg>
  );
}

export function PlusIcon({className = ""}) {
  return (
    <svg className={className} width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
      <path fill="#000000" d="M19,13H13V19H11V13H5V11H11V5H13V11H19V13Z" />
    </svg>
  );
}

export function CloseIcon({className = ""}) {
  return (
    <svg className={className} width="24px" height="24px" viewBox="0 0 24 24" version="1.1">
      <path fill="#000000" d="M19,6.41L17.59,5L12,10.59L6.41,5L5,6.41L10.59,12L5,17.59L6.41,19L12,13.41L17.59,19L19,17.59L13.41,12L19,6.41Z" />
    </svg>
  );
}
