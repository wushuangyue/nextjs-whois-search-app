/*
 * @Author: Sam Wu wushyue@gmail.com
 * @Date: 2023-12-08 16:27:16
 * @LastEditors: Sam Wu wushyue@gmail.com
 * @LastEditTime: 2023-12-08 16:32:07
 * @FilePath: \nextjs-whois-search-app\src\pages\index.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { useState, useEffect } from 'react'
import Search from '../components/Search'
import { searchRepos } from '../services/githubService'
import RepoList from '../components/RepoList'
import search from './api/search'
import getRandomWord from '../helpers/randowWord.helper'
import styles from './index.module.scss'

const Index = (props) => {
  console.log(props)
  const [searchText, setSearchText] = useState(props.searchText)
  const [language, setLanguage] = useState('')
  const [repos, setRepos] = useState(props.repos)
  const [loading, setLoading] = useState(false)

  const onSearchTextChange = (text) => {
    setSearchText(text)
    if (text) {
      loadRepos(text, language)
    }
  }

  const onLanguageChange = (language) => {
    setLanguage(language)
    loadRepos(searchText, language)
  }

  const loadRepos = async (searchText, language) => {
    setLoading(true)
    const res = await searchRepos(searchText, language)
    if (res && res.data) {
      setLoading(false)
      setRepos(res.data.items)
    }
  }

  return (
    <div className={styles.container}>
      <Search
        searchText={searchText}
        language={language}
        onSearchTextChange={onSearchTextChange}
      />
      <RepoList loading={loading} repos={repos} />
    </div>
  )
}

export const getServerSideProps = async () => {
  const searchText = getRandomWord()
  const res = await searchRepos(searchText)

  return {
    props: {
      searchText: searchText,
      repos: res.data.items,
    },
  }
}

export default Index
