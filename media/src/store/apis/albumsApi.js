import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { faker } from '@faker-js/faker';

const pause = (duration) => {
    return new Promise((resolve) => {
        setTimeout(resolve, duration);
    });
};

//create API function, pass in config object
const albumsApi = createApi({
    reducerPath : "albums",
    baseQuery : fetchBaseQuery({
        baseUrl: "http://localhost:3005",
        fetchFn: async (...args) => {
            await pause(800);
            return fetch(...args);
        }
    }),
    endpoints (builder) {

        return {
            fetchAlbums : builder.query({
                providesTags : (result, error, user) => {
                    const tags = result.map(album => {
                        return {type : 'Album', id : album.id};
                    });

                    tags.push({type:'UsersAlbum', id: user.id});
                    return tags;
                },
                query: (user) => {
                    return {
                        url : '/albums',
                        params : {
                            userId : user.id
                        },
                        method : 'GET'
                    };
                }
            }),

            addAlbum : builder.mutation({
                invalidatesTags : (result, error, user) => {
                    return [{type : 'UsersAlbum', id : user.id}];
                },
                query : (user) => {
                    return {
                        url: '/albums',
                        method : 'POST',
                        body : {
                            title : faker.commerce.productName(),
                            userId : user.id
                        }
                    };
                }
                
            }),

            removeAlbums : builder.mutation({
                invalidatesTags : (results, error, album) => {
                    return [{type : 'Album', id : album.id}]
                },
                query : (album) => {
    
                    return {
                        url : `/albums/${album}`,
                        method: 'DELETE'
                    };
                },
                
            })
        }
    }
});


export const { useFetchAlbumsQuery, useAddAlbumMutation, useRemoveAlbumsMutation} = albumsApi;
export { albumsApi }