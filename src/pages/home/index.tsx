import IGHeader from "components/IGHeader";
import IGContainer from "components/IGContainer";
import IGStory from "./components/IGStory.tsx";
import IGUser from "components/IGUser";
import IGPost from "./components/IGPost.tsx";
import IGProfile from "./components/IGProfile.tsx";

import Loading from "components/Loading";
import { useGetIGPostsQuery } from "service/homeService";

const IGPostList:React.FC = () =>{
  const {data,isLoading} = useGetIGPostsQuery("all");

  return <>
  {isLoading && (
    <div className="w-full flex justify-center mt-20">
      <Loading />
    </div>
  )}
  { !isLoading &&
    data?.map((item) => {
      const {
        id,
        location,
        account,
        avatar,
        photo,
        likes,
        description,
        hashTags,
        createTime,
      } = item;

      return (
        <IGPost 
              location={location}
              account={account}
              avatar={avatar}
              photo={photo}
              likes={likes}
              description={description}
              hashTags={hashTags}
              createTime={createTime}
              key={id}
        />
      )
      
    })
  }
  </>
}




const Home: React.FC = () => {
  return (
    <>
      <IGHeader />
      <IGContainer>
        <div className = "flex lg:justify-center">
          {/*left  */}
          <div className = "w-full lg:w-[600px]">
            <IGStory />
            <IGPostList />
          </div>

          {/*right */}
          <div className = "hidden lg:block lg:w-[424px]">
            <IGProfile/>
          </div>
        </div>
      </IGContainer>
    </>
  );
};

export default Home;
