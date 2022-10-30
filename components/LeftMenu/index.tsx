import Head from 'next/head'
import { Button } from '@material-ui/core'
import { WhatshotOutlined as FireIcon, SmsOutlined as MessageIcon, TrendingUpOutlined as Rating, FormatListBulletedOutlined as ListIcon} from '@material-ui/icons';

import Image from 'next/image'
import styles from './LeftMenu.module.scss';

export const LeftMenu: React.FC = () => {
  return (
     <> 
<div className={styles.menu}>
<ul>
  <li><Button>
    <FireIcon/>
    Горячее
          </Button></li>
          <li><Button>
    <MessageIcon/>
    Сообщения
    </Button></li>
  <li><Button>
    <Rating/>
    Рейтинг вакансий
          </Button></li>
           <li><Button>
    <ListIcon/>
    Подписки
          </Button></li>
</ul  >
</div>

     </>
  )
}
