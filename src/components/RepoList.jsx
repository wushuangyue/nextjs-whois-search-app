/*
 * @Author: Sam Wu wushyue@gmail.com
 * @Date: 2023-12-08 16:47:34
 * @LastEditors: Sam Wu wushyue@gmail.com
 * @LastEditTime: 2023-12-08 16:53:07
 * @FilePath: \nextjs-whois-search-app\src\components\RepoList.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import React from 'react'
import RepoListItem from './RepoListItem'
import styles from './repolist.module.scss'

function RepoList({ repos, loading }) {
  if (loading) {
    return <img src="/img/pacman-loading.gif" className={styles.loader} />
  }

  if (!repos || repos.length === 0) {
    return <div className={styles.message}>No Repositories Found.</div>
  }

  return (
    <div className={styles.repolist}>

    </div>
  )
}

export default RepoList
