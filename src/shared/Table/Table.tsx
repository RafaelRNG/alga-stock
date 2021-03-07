import { FC } from "react";
import { organizeData } from "../../utils/organizeDataForTable";
import Button from "../Button";
import "./Table.scss";

export interface TableHeader {
  key: string;
  value: string;
  right?: boolean;
}

interface TableProps {
  headers: TableHeader[]
  data: any[]

  enableActions?: boolean;

  onDelete?: (item: any) => void;
  onDetail?: (item: any) => void;
  onEdit?: (item: any) => void;
}

const Table: FC<TableProps> = ({ data, headers, enableActions, onDelete, onEdit, onDetail }) => {

  const [organizedData, indexedHeaders] = organizeData(data, headers);
  return (
    <table className="AppTable">
      <thead>
        <tr>
          {headers.map(header =>
            <th key={header.key} className={header.right ? "right" : ""}>
              {header.value}
            </th>)}
          {
            enableActions &&
            <th className="right">
              Actions
            </th>
          }
        </tr>
      </thead>
      <tbody>
        {
          organizedData.map((row, index) => {
            return <tr key={index}>
              {Object.keys(row).map((item, index) =>
                item !== "$original" ? <td
                  key={row.$original._id + index}
                  className={indexedHeaders[item].right ? "right" : ""}>
                  {row[item]}
                </td> : null
              )}
              {
                enableActions &&
                <td className="actions right">
                  {
                    onEdit &&
                    <Button
                      onClick={() => onEdit(row.$original)}>
                      Edit
                   </Button>
                  }
                  {
                    onDetail &&
                    <Button
                      onClick={() => onDetail(row.$original)}>
                      Detail
                   </Button>
                  }
                  {
                    onDelete &&
                    <Button
                      onClick={() => onDelete(row.$original)}>
                      Delete
                   </Button>
                  }
                </td>
              }
            </tr>
          })
        }
      </tbody>
    </table>
  )
}

export default Table;