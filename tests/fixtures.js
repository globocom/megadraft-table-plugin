import {TableConfig} from "../src/TableConfig";

export const EmptyTableConfig = Object.freeze(new TableConfig());

export const ValidTableConfig = Object.freeze(new TableConfig({title: "Bloblo", headerStyle: {top: true}}));