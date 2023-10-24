import { ReactComponent as IconActivity } from 'assets/icons/icon_activity.svg';
import { ReactComponent as IconBoard } from 'assets/icons/icon_board.svg';
import { ReactComponent as IconCertification } from 'assets/icons/icon_certification.svg';
import { ReactComponent as IconContest } from 'assets/icons/icon_contest.svg';
import { ReactComponent as IconIntern } from 'assets/icons/icon_intern.svg';

export type CardMenus = {
  id: number;
  icon: React.FunctionComponent<
    React.SVGProps<SVGSVGElement> & {
      title?: string | undefined;
    }
  >;
  text: string;
  path: string;
};

export const cardMenus: CardMenus[] = [
  {
    id: 1,
    icon: IconContest,
    text: '공모전',
    path: 'competition',
  },
  {
    id: 2,
    icon: IconActivity,
    text: '대외활동',
    path: 'outside',
  },
  {
    id: 3,
    icon: IconCertification,
    text: '자격증',
    path: 'qnet',
  },
  {
    id: 4,
    icon: IconIntern,
    text: '인턴',
    path: 'intern',
  },
  {
    id: 5,
    icon: IconBoard,
    text: '취준job담',
    path: 'community',
  },
];
