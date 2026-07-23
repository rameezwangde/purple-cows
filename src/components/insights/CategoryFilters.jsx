import { BrainCircuit, Megaphone, Palette, Search as SearchIcon, Sparkles, Target, Users } from 'lucide-react'
import { articleCategories } from '../../data/articles'
import SearchBar from './SearchBar'
const icons=[Sparkles,Target,Palette,Megaphone,Users,BrainCircuit,Sparkles,SearchIcon]
export default function CategoryFilters({active,onFilter,query,onSearch}){return <section className="in-filter-wrap" aria-label="Insight filters"><div className="in-filters">{articleCategories.map((category,index)=>{const Icon=icons[index];return <button type="button" className={active===category?'active':''} onClick={()=>onFilter(category)} key={category}><Icon/>{category}</button>})}</div><SearchBar value={query} onChange={onSearch}/></section>}