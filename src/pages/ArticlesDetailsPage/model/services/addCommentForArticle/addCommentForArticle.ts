import { createAsyncThunk } from '@reduxjs/toolkit'
import { ThunkConfig } from '@/app/providers/StoreProvider'
import { Comment } from '@/entities/Comment'
import { getArticleDetailsData } from '@/entities/Article/model/selectors/articleDetails'
import { getUserAuthData } from '@/entities/User'
import { addCommentFormActions } from '@/features/addCommentForm/model/slice/addCommentFormSlice'
import { fetchCommentByArticleId } from '../fetchCommentByArticleId/fetchCommentByArticleId'

export const addCommentForArticle = createAsyncThunk<Comment, string, ThunkConfig<string>>(
    'addCommentForm /addCommentForArticle',
    async (text, { extra, rejectWithValue, getState, dispatch }) => {
        const userData = getUserAuthData(getState())
        const article = getArticleDetailsData(getState())

        if (!userData || !text || !article) {
            return rejectWithValue('no-data')
        }

        try {
            const response = await extra.api.post<Comment>('/comments', {
                articleId: article.id,
                userId: userData.id,
                text,
            })

            if (!response.data) {
                throw new Error()
            }

            dispatch(addCommentFormActions.setText(''))
            dispatch(fetchCommentByArticleId(article.id))

            return response.data
        } catch (e) {
            console.log(e)
            return rejectWithValue('error')
        }
    }
)
