import FormatListBulleted from "@mui/icons-material/FormatListBulleted";

export type DataMenuType = {
  id: string;
  label: string;
  depth: number;
  url: string;
  icon: React.ReactNode;
  children: DataMenuType[];
};

const data: DataMenuType[] = [
  {
    id: "todo-list",
    label: "todo list",
    depth: 0,
    url: "/",
    icon: <FormatListBulleted fontSize="small" />,
    children: [],
  },
];

export default data;
