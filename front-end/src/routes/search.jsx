import Header from '../components/header';
import Nav from '../components/nav'


export default function Search() {
    var url = new URL(window.location.href);
    var c = url.searchParams.get("key");
    c = c.trim()
    return (
      <>
        <Nav />
        <Header />
        <div>Search for: <span>{c}</span></div>
      </>
    );
  }