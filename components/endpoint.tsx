import { Badge, BadgeType } from "./badge";

type Props = {
  method: 'GET' | 'POST' | 'PUT' | 'DELETE',
  path: string,
}

export const Endpoint = ({method, path}: Props) => {
  let badgeType: BadgeType;
  switch (method) {
    case 'GET':
      badgeType = 'info';
      break;
    case 'POST':
      badgeType = 'success';
      break;
    case 'PUT':
      badgeType = 'warning';
      break;
    case 'DELETE':
      badgeType = 'error';
      break;
  }
  return (
      <div className="mb-2">
        <span className="inline-block mr-3">
          <Badge type={badgeType}>{method}</Badge>
        </span>
        <span>{path}</span>
      </div>
  )
}