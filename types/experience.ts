export type ExperienceRow = {
  id: string;
  title: string;
  company_name: string;
  icon_bg: string | null;
  start_date: string | null;
  end_date: string | null;
  date_label: string;
  sort_order: number | null;
  current: boolean | null;
  created_at: string;
};

export type Experience = {
  id: string;
  title: string;
  companyName: string;
  iconBg: string;
  startDate: string | null;
  endDate: string | null;
  dateLabel: string;
  sortOrder: number;
  current: boolean;
  createdAt: string;
};
