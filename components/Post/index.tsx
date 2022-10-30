import Head from 'next/head'
import { Paper, Typography } from '@material-ui/core'

import Image from 'next/image'
import styles from './Post.module.scss';

export const Post: React.FC = () => {
  return (
       <Paper elevation={0} className="p-20" classes={{root: styles.paper }}>
    <Typography variant="h5"> 19 августа, четверг</Typography>
    <Typography variant="h5" className='mt-10 mb-15'> какой то текст</Typography>
    <Image src="https://s1.stc.all.kpcdn.net/putevoditel/projectid_406014/images/tild3538-3161-4062-a666-376533626538__960.jpg" height={300} alt='Frontend-разработчик' width={550}></Image>
      
     <Typography variant="h5"> 19 августа, четверг</Typography>
    <Typography variant="h5" className='mt-10 mb-15'> какой то текст</Typography>
    <Image src="https://s1.stc.all.kpcdn.net/putevoditel/projectid_406014/images/tild3538-3161-4062-a666-376533626538__960.jpg" height={300} alt='Frontend-разработчик' width={550}></Image>
    </Paper>
  )
}
