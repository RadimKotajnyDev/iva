import type {FC} from "react";
import {FaClock, FaUserFriends} from 'react-icons/fa';
import {Badge} from "@/components/ui/badge.tsx";

type Props = {
  timeDiff: string,
  capacity: number,
  accreditation: boolean,
}

export const CourseOptions: FC<Props> = ({
                                           timeDiff,
                                           capacity,
                                           accreditation,
                                         }) => {
  return (
    <div className="grid grid-cols-1 gap-2">
      <div className="flex items-center">
        <FaClock className="text-blue-500 mr-2"/>
        <span className="font-medium">Časová náročnost:&nbsp;</span> {timeDiff}
      </div>
      <div className="flex items-center">
        <FaUserFriends className="text-green-500 mr-2"/>
        <span className="font-medium">Kapacita:&nbsp;</span> {capacity}
      </div>
      <div className="flex items-center">
        {accreditation &&
          <Badge className="bg-green-300 text-green-900">Akreditováno</Badge>
        }
      </div>
    </div>
  );
}