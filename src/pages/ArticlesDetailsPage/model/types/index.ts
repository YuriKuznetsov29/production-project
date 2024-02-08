import { ArticleDetailsCommentsSchema } from './articleDetailsCommentsSchema'
import { ArticleDetailsPageRecommendationsSchema } from './articleDetailsPageRecommendationsSlice'

export interface ArticleDetailsPageSchema {
    comments: ArticleDetailsCommentsSchema
    recommendations: ArticleDetailsPageRecommendationsSchema
}
