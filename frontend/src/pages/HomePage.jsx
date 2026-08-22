import React from 'react';
import ProfileInfo from '../components/ProfileInfo';
import Repos from '../components/Repos';
import Search from '../components/Search';
import SortRepos from '../components/SortRepos';
import { useEffect } from 'react';
import toast from 'react-hot-toast';
const HomePage = () => {
  const [userProfile, setUserProfile] = React.useState({});
  const [repos, setRepos] = React.useState([]);
  const [sortType, setSortType] = React.useState('forks');
  const [loading, setLoading] = React.useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      const url = 'https://api.github.com/users/burakorkmez';
      const userRes = await fetch(url);
      const userProfile = await userRes.json();
      const reposRes = await fetch(userProfile.repos_url);
      const repos = await reposRes.json();
      console.log(repos);
      console.log(userProfile);
      setUserProfile(userProfile);
      setRepos(repos);
      setLoading(false);
    } catch (error) {
      console.log(error);
      toast.error(error.message || 'Something went wrong');
      setLoading(false);
    }
  };
  useEffect(() => {
    fetchData();
  }, [sortType]);
  return (
    <div className="m-4">
      <Search />
      <SortRepos  onSort={setSortType} sortType={sortType}  />
      <div className=" flex gap-4 flex-col lg:flex-row  justify-center items-start">
        <ProfileInfo  userProfile={userProfile} />
        <Repos alwaysFullWidth repos={repos} />
      </div>
    </div>
  );
};

export default HomePage;
