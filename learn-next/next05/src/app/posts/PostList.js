"use client";
import { postApi } from "@/redux/services/postApi";
const PostList = () => {
    const {data:postList, isLoading, isFetching, error} = postApi.useGetPokemonByNameQuery();
    if(isLoading){
        return <h3>Loading...</h3>
    }
    if(error){
        return <h3>Error...</h3>
    }
  return (
    <div>
        <h1>PostList</h1>
        {postList?.map(({id,title}) => (
            <h3 key={id}>{title}</h3>
        ))}
    </div>
  )
}

export default PostList