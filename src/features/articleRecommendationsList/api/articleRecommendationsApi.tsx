import { rtkApi } from 'shared/api/rtkApi'

const recommendationsApi = rtkApi.injectEndpoints({
    endpoints: (build) => ({
        getArticleRecommendationsList: build.query({
            query: (limit) => ({
                url: '/articles',
                params: {
                    _limit: limit || 4,
                },
            }),
        }),
    }),
    overrideExisting: false,
})

export const useArticleRecommendationsList =
    recommendationsApi.useGetArticleRecommendationsListQuery