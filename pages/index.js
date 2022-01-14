import CarForm from '../lib/CarForm';
import SearchForm from '../lib/SearchForm';
import Link from 'next/link'

export default function Home(props) {
  return (
    <div>
      <h1>Welcome To My Website</h1>
      <Link href="/data">
      <a>Database</a>
      </Link>
    </div>
  );
}
