/*
 * @Author: Sam Wu wushyue@gmail.com
 * @Date: 2023-12-08 16:27:16
 * @LastEditors: Sam Wu wushyue@gmail.com
 * @LastEditTime: 2023-12-08 16:41:31
 * @FilePath: \nextjs-whois-search-app\src\components\Search.jsx
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import TextInput from '../components/shared/TextInput'
import Select from '../components/shared/Select'
import LANGUAGES from '../constants/languages.constant'
import styles from './search.module.scss'

const Search = (props) => {
  const { language, searchText, onSearchTextChange, onLanguageChange } = props
  const languages = [{ value: '', label: 'All' }, ...LANGUAGES]

  return (
    <div className={styles.search}>
      <TextInput
        label="Domain Search"
        value={searchText}
        onChange={(value) => onSearchTextChange(value)}
        className={styles.searchInput}
      />
    </div>
  )
}

export default Search
