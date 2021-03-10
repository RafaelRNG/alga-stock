import { TableHeader } from "../shared/Table/Table";

type IndexedHeaders = {
  [key: string]: TableHeader;
}

type OrganizedItem = {
  [key: string]: any;
}

export function organizeData(data: any[], headers: TableHeader[]): [OrganizedItem[], IndexedHeaders] {
  const indexedHeaders: IndexedHeaders = {}

  headers.forEach(header => {
    indexedHeaders[header.key] = header
  })

  const headerKeysInOrder = Object.keys(indexedHeaders);

  const organizedData = data.map(item => {
    const organizedItem: OrganizedItem = {}

    headerKeysInOrder.forEach(key => {
      organizedItem[key] = item[key]
    })

    organizedItem.$original = item

    return organizedItem;
  })

  return [organizedData, indexedHeaders]
}