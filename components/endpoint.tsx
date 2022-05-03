import { Badge, BadgeType } from "./badge";

type Props = {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE',
  path: string,
}

export const Endpoint = ({method, path}: Props) => {
  let badgeType: BadgeType;
  switch (method) {
    case 'GET':
      badgeType = 'success';
      break;
    case 'POST':
      badgeType = 'info';
      break;
    case 'PUT':
      badgeType = 'warning';
      break;
    case 'DELETE':
      badgeType = 'error';
      break;
  }
  return (
      <div className="endpoint">
        <Badge type={badgeType}/>
        <span>{path}</span>
      </div>
  )
}